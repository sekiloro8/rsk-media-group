import { Link } from "react-router-dom";
import { Package, Award, MessageSquare, Printer, TrendingUp, Radio, ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const Services = () => {
  const services = [
    {
      icon: Award,
      title: "Brand Development",
      description: "Build a powerful brand identity that resonates with your audience and stands out in the marketplace.",
      features: [
        "Business Cards",
        "Banners & Flyers",
        "Logo Design",
        "Corporate Identity",
      ],
    },
    {
      icon: Package,
      title: "Product Development",
      description: "Comprehensive product design and development services to bring your ideas to market successfully.",
      features: [
        "Packaging Design",
        "Product Label Design",
        "Barcodes",
        "Testing & Consultation",
      ],
    },
    {
      icon: MessageSquare,
      title: "Brand Consultation",
      description: "Expert guidance on brand strategy, positioning, and growth to help your business thrive.",
      features: [
        "Brand Strategy",
        "Market Positioning",
        "Brand Guidelines",
        "Growth Consulting",
      ],
    },
    {
      icon: Printer,
      title: "Printing & Publishing",
      description: "High-quality printing services for all your business and marketing needs.",
      features: [
        "Product Labels",
        "Vinyl Stickers",
        "Contravision",
        "Sandblast/Frosting",
        "Uniforms",
        "TV & Radio Materials",
      ],
    },
    {
      icon: TrendingUp,
      title: "Digital Marketing",
      description: "Comprehensive digital solutions to expand your online presence and reach your target audience.",
      features: [
        "Social Media Management",
        "Web Design",
        "Custom Emails",
        "Company Registration",
        "Business Proposals",
        "Business Plans",
        "Company Profiles",
      ],
    },
    {
      icon: Radio,
      title: "Outdoor Marketing",
      description: "Strategic outdoor advertising solutions to maximize your brand visibility.",
      features: [
        "Sign Boards",
        "Digital Screens",
        "Vinyl Stickers",
        "Billboard Design",
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
              What We Do
            </h1>
            <p className="text-xl md:text-2xl text-white/90 animate-fade-in">
              Comprehensive media solutions designed to elevate your brand
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {services.map((service, index) => (
              <Card
                key={index}
                className="p-8 hover:shadow-xl transition-all duration-300 border-border/50 hover:border-primary/30 bg-gradient-card animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-accent text-accent-foreground mb-6">
                  <service.icon size={32} />
                </div>
                <h2 className="text-2xl font-bold mb-4 text-foreground">{service.title}</h2>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {service.description}
                </p>
                <div className="space-y-2">
                  <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider">Services Include:</h3>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <span className="text-primary mt-0.5">•</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Production Section */}
      <section className="py-20 bg-gradient-card">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-xl bg-gradient-accent text-accent-foreground mb-6">
              <Radio size={40} />
            </div>
            <h2 className="text-4xl font-bold mb-6 text-foreground">Media Production</h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Professional radio and TV advert production services to amplify your message across traditional media channels.
            </p>
            <div className="flex flex-wrap gap-6 justify-center">
              <div className="flex items-center gap-2 text-foreground">
                <span className="text-primary">✓</span>
                <span className="font-medium">Radio Adverts</span>
              </div>
              <div className="flex items-center gap-2 text-foreground">
                <span className="text-primary">✓</span>
                <span className="font-medium">TV Adverts</span>
              </div>
            </div>
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
