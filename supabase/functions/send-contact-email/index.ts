import { serve } from "https://deno.land/std@0.190.0/http/server.ts";

const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

interface ContactEmailRequest {
  name: string;
  email: string;
  phone: string;
  message: string;
  honeypot?: string; // Honeypot field for bot detection
}

// Simple rate limiting using in-memory store
// In production, consider using a distributed cache like Redis
const rateLimitStore = new Map<string, { count: number; resetTime: number }>();
const RATE_LIMIT_WINDOW_MS = 60 * 60 * 1000; // 1 hour
const MAX_REQUESTS_PER_WINDOW = 5; // 5 requests per hour per IP

function getClientIP(req: Request): string {
  // Try to get the real IP from common headers
  const forwardedFor = req.headers.get("x-forwarded-for");
  if (forwardedFor) {
    return forwardedFor.split(",")[0].trim();
  }
  const realIP = req.headers.get("x-real-ip");
  if (realIP) {
    return realIP;
  }
  // Fallback to a generic identifier
  return "unknown";
}

function isRateLimited(clientIP: string): boolean {
  const now = Date.now();
  const record = rateLimitStore.get(clientIP);

  if (!record || now > record.resetTime) {
    // First request or window expired - reset
    rateLimitStore.set(clientIP, { count: 1, resetTime: now + RATE_LIMIT_WINDOW_MS });
    return false;
  }

  if (record.count >= MAX_REQUESTS_PER_WINDOW) {
    return true;
  }

  record.count++;
  return false;
}

// Input validation
function validateInput(data: ContactEmailRequest): { valid: boolean; error?: string } {
  if (!data.name || typeof data.name !== "string" || data.name.trim().length < 2 || data.name.length > 100) {
    return { valid: false, error: "Invalid name" };
  }
  if (!data.email || typeof data.email !== "string" || !data.email.includes("@") || data.email.length > 255) {
    return { valid: false, error: "Invalid email" };
  }
  if (!data.phone || typeof data.phone !== "string" || data.phone.trim().length < 8 || data.phone.length > 20) {
    return { valid: false, error: "Invalid phone" };
  }
  if (!data.message || typeof data.message !== "string" || data.message.trim().length < 10 || data.message.length > 1000) {
    return { valid: false, error: "Invalid message" };
  }
  return { valid: true };
}

// HTML escape function to prevent XSS in emails
function escapeHtml(unsafe: string): string {
  return unsafe
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

const handler = async (req: Request): Promise<Response> => {
  console.log("Received request to send contact email");
  
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    // Rate limiting check
    const clientIP = getClientIP(req);
    if (isRateLimited(clientIP)) {
      console.warn(`Rate limit exceeded for IP: ${clientIP}`);
      return new Response(
        JSON.stringify({ error: "Too many requests. Please try again later." }),
        {
          status: 429,
          headers: { "Content-Type": "application/json", ...corsHeaders },
        }
      );
    }

    const requestData: ContactEmailRequest = await req.json();

    // Honeypot check - if this field has a value, it's likely a bot
    if (requestData.honeypot && requestData.honeypot.trim() !== "") {
      console.warn("Honeypot field triggered - likely bot submission");
      // Return success to not alert bots, but don't send email
      return new Response(JSON.stringify({ success: true }), {
        status: 200,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      });
    }

    // Validate input
    const validation = validateInput(requestData);
    if (!validation.valid) {
      return new Response(
        JSON.stringify({ error: validation.error }),
        {
          status: 400,
          headers: { "Content-Type": "application/json", ...corsHeaders },
        }
      );
    }

    const { name, email, phone, message } = requestData;
    
    // Escape HTML in user inputs
    const safeName = escapeHtml(name.trim());
    const safeEmail = escapeHtml(email.trim());
    const safePhone = escapeHtml(phone.trim());
    const safeMessage = escapeHtml(message.trim());

    console.log("Processing contact email from:", safeEmail);

    // Send email to R-SK Media using Resend API
    const businessEmailResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "R-SK Media Contact <onboarding@resend.dev>",
        to: ["rskmediagroup@gmail.com"],
        reply_to: email.trim(),
        subject: `New Contact Form Submission from ${safeName}`,
        html: `
          <h2>New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${safeName}</p>
          <p><strong>Email:</strong> ${safeEmail}</p>
          <p><strong>Phone:</strong> ${safePhone}</p>
          <p><strong>Message:</strong></p>
          <p>${safeMessage}</p>
          <hr>
          <p><em>This email was sent from the R-SK Media contact form.</em></p>
        `,
      }),
    });

    if (!businessEmailResponse.ok) {
      const errorData = await businessEmailResponse.json();
      console.error("Resend API error:", errorData);
      throw new Error("Failed to send email");
    }

    const businessEmailData = await businessEmailResponse.json();
    console.log("Business email sent successfully:", businessEmailData.id);

    // Send auto-reply confirmation to customer
    const customerEmailResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "R-SK Media <onboarding@resend.dev>",
        to: [email.trim()],
        subject: "Thank you for contacting R-SK Media",
        html: `
          <h2>Thank you for your message, ${safeName}!</h2>
          <p>We have received your inquiry and will get back to you as soon as possible.</p>
          <h3>Your message:</h3>
          <p>${safeMessage}</p>
          <hr>
          <p>Best regards,<br><strong>R-SK Media Team</strong></p>
          <p><em>This is an automated confirmation email.</em></p>
        `,
      }),
    });

    if (!customerEmailResponse.ok) {
      const errorData = await customerEmailResponse.json();
      console.error("Customer email failed:", errorData);
      // Don't throw error here - business email already sent
    } else {
      const customerEmailData = await customerEmailResponse.json();
      console.log("Customer confirmation email sent successfully:", customerEmailData.id);
    }

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        ...corsHeaders,
      },
    });
  } catch (error: any) {
    console.error("Error in send-contact-email function:", error);
    return new Response(
      JSON.stringify({ error: "Failed to send message. Please try again later." }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
