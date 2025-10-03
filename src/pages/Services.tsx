import { Link } from "react-router-dom";
import { Megaphone, TrendingUp, Palette, Target, ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const Services = () => {
  const services = [
    {
      icon: Megaphone,
      title: "Outdoor Media & Billboards",
      description: "Transform your brand visibility with our strategic outdoor advertising solutions. We offer premium billboard placements in high-traffic locations, creative design services, and campaign management that ensures maximum impact.",
      features: [
        "Strategic location analysis and selection",
        "Premium billboard placements",
        "Creative design and production",
        "Installation and maintenance",
        "Performance tracking and reporting",
      ],
    },
    {
      icon: TrendingUp,
      title: "Digital Marketing & Social Media",
      description: "Amplify your online presence with our comprehensive digital marketing services. From social media management to SEO and paid advertising, we help you connect with your audience where they spend their time.",
      features: [
        "Social media strategy and management",
        "Content creation and scheduling",
        "SEO optimization",
        "Paid advertising campaigns (Google, Facebook, Instagram)",
        "Analytics and performance reporting",
      ],
    },
    {
      icon: Palette,
      title: "Creative Production",
      description: "Bring your brand to life with stunning visuals and compelling content. Our creative team delivers high-quality graphics, videos, and multimedia content that captures attention and drives engagement.",
      features: [
        "Graphic design and branding",
        "Video production and editing",
        "Photography services",
        "Ad creative development",
        "Motion graphics and animation",
      ],
    },
    {
      icon: Target,
      title: "Media Strategy & Consulting",
      description: "Make informed decisions with our expert media strategy consulting. We analyze your market, identify opportunities, and develop comprehensive media plans that maximize your ROI and achieve your business objectives.",
      features: [
        "Market research and analysis",
        "Media planning and buying",
        "Campaign strategy development",
        "Budget optimization",
        "Competitive analysis",
      ],
    },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      <WhatsAppButton />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-hero text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-black mb-6 animate-fade-in-up">
              Our Services
            </h1>
            <p className="text-xl md:text-2xl text-white/90 animate-fade-in">
              Comprehensive media solutions designed to elevate your brand
            </p>
          </div>
        </div>
      </section>

      {/* Services Detail */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="space-y-16 max-w-6xl mx-auto">
            {services.map((service, index) => (
              <Card
                key={index}
                className="p-8 md:p-12 hover:shadow-xl transition-all duration-300 border-border/50 hover:border-primary/30 bg-gradient-card animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex flex-col md:flex-row gap-8">
                  <div className="flex-shrink-0">
                    <div className="inline-flex items-center justify-center w-20 h-20 rounded-xl bg-gradient-accent text-accent-foreground">
                      <service.icon size={40} />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h2 className="text-3xl font-bold mb-4 text-foreground">{service.title}</h2>
                    <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                      {service.description}
                    </p>
                    <div className="space-y-3">
                      <h3 className="text-xl font-semibold text-foreground">What we offer:</h3>
                      <ul className="space-y-2">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-muted-foreground">
                            <span className="text-primary mt-1">•</span>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-hero text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Let's Build Your Next Campaign
          </h2>
          <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
            Ready to take your brand to the next level? Contact us today and let's discuss how our services can help you achieve your goals.
          </p>
          <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90 text-lg px-8 py-6 hover:shadow-glow transition-all duration-300">
            <Link to="/contact">
              Get in Touch <ArrowRight className="ml-2" size={20} />
            </Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
