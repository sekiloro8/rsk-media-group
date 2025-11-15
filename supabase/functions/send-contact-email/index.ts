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
}

const handler = async (req: Request): Promise<Response> => {
  console.log("Received request to send contact email");
  
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { name, email, phone, message }: ContactEmailRequest = await req.json();
    console.log("Processing contact email from:", email);

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
        reply_to: email,
        subject: `New Contact Form Submission from ${name}`,
        html: `
          <h2>New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          <p><strong>Message:</strong></p>
          <p>${message}</p>
          <hr>
          <p><em>This email was sent from the R-SK Media contact form.</em></p>
        `,
      }),
    });

    if (!businessEmailResponse.ok) {
      const errorData = await businessEmailResponse.json();
      throw new Error(`Resend API error: ${JSON.stringify(errorData)}`);
    }

    const businessEmailData = await businessEmailResponse.json();
    console.log("Business email sent successfully:", businessEmailData);

    // Send auto-reply confirmation to customer
    const customerEmailResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "R-SK Media <onboarding@resend.dev>",
        to: [email],
        subject: "Thank you for contacting R-SK Media",
        html: `
          <h2>Thank you for your message, ${name}!</h2>
          <p>We have received your inquiry and will get back to you as soon as possible.</p>
          <h3>Your message:</h3>
          <p>${message}</p>
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
      console.log("Customer confirmation email sent successfully:", customerEmailData);
    }

    return new Response(JSON.stringify({ success: true, data: businessEmailData }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        ...corsHeaders,
      },
    });
  } catch (error: any) {
    console.error("Error in send-contact-email function:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
