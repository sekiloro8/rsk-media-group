import { Link } from "react-router-dom";
import { Package, Award, MessageSquare, Printer, TrendingUp, Radio, ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import designWorkspace from "@/assets/design-workspace.jpg";
import printingFacility from "@/assets/printing-facility.jpg";
import digitalMarketing from "@/assets/digital-marketing.jpg";
import outdoorAdvertising from "@/assets/outdoor-advertising.jpg";

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

      {/* Services Showcase with Images */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 max-w-7xl">
          {/* Brand & Product Development */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <div className="animate-fade-in">
              <img 
                src={designWorkspace} 
                alt="Creative design workspace for brand and product development" 
                className="rounded-lg shadow-2xl w-full"
              />
            </div>
            <div>
              <div className="grid gap-6">
                {services.slice(0, 3).map((service, index) => (
                  <Card
                    key={index}
                    className="p-6 hover:shadow-xl transition-all duration-300 border-border/50 hover:border-primary/30 bg-gradient-card"
                  >
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-accent text-accent-foreground flex items-center justify-center">
                        <service.icon size={24} />
                      </div>
                      <div className="flex-1">
                        <h2 className="text-xl font-bold mb-2 text-foreground">{service.title}</h2>
                        <p className="text-muted-foreground text-sm mb-3">{service.description}</p>
                        <div className="flex flex-wrap gap-2">
                          {service.features.map((feature, idx) => (
                            <span key={idx} className="text-xs px-2 py-1 rounded bg-primary/10 text-primary">
                              {feature}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </div>

          {/* Printing & Digital Services */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <div className="order-2 md:order-1">
              <div className="grid gap-6">
                <Card className="p-6 hover:shadow-xl transition-all duration-300 border-border/50 hover:border-primary/30 bg-gradient-card">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-accent text-accent-foreground flex items-center justify-center">
                      <Printer size={24} />
                    </div>
                    <div className="flex-1">
                      <h2 className="text-xl font-bold mb-2 text-foreground">{services[3].title}</h2>
                      <p className="text-muted-foreground text-sm mb-3">{services[3].description}</p>
                      <div className="flex flex-wrap gap-2">
                        {services[3].features.map((feature, idx) => (
                          <span key={idx} className="text-xs px-2 py-1 rounded bg-primary/10 text-primary">
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </Card>
                <Card className="p-6 hover:shadow-xl transition-all duration-300 border-border/50 hover:border-primary/30 bg-gradient-card">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-accent text-accent-foreground flex items-center justify-center">
                      <TrendingUp size={24} />
                    </div>
                    <div className="flex-1">
                      <h2 className="text-xl font-bold mb-2 text-foreground">{services[4].title}</h2>
                      <p className="text-muted-foreground text-sm mb-3">{services[4].description}</p>
                      <div className="flex flex-wrap gap-2">
                        {services[4].features.map((feature, idx) => (
                          <span key={idx} className="text-xs px-2 py-1 rounded bg-primary/10 text-primary">
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
            <div className="order-1 md:order-2 grid grid-cols-2 gap-4 animate-fade-in">
              <img 
                src={printingFacility} 
                alt="Professional printing facility and equipment" 
                className="rounded-lg shadow-xl w-full"
              />
              <img 
                src={digitalMarketing} 
                alt="Digital marketing analytics and strategy" 
                className="rounded-lg shadow-xl w-full mt-8"
              />
            </div>
          </div>

          {/* Outdoor Marketing */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <img 
                src={outdoorAdvertising} 
                alt="Outdoor advertising billboards and signage" 
                className="rounded-lg shadow-2xl w-full"
              />
            </div>
            <div>
              <Card className="p-8 hover:shadow-xl transition-all duration-300 border-border/50 hover:border-primary/30 bg-gradient-card">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-accent text-accent-foreground mb-6">
                  <Radio size={32} />
                </div>
                <h2 className="text-3xl font-bold mb-4 text-foreground">{services[5].title}</h2>
                <p className="text-muted-foreground mb-6 leading-relaxed text-lg">
                  {services[5].description}
                </p>
                <div className="space-y-3">
                  {services[5].features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <span className="text-primary text-xl">✓</span>
                      <span className="text-foreground font-medium">{feature}</span>
                    </div>
                  ))}
                </div>
              </Card>
            </div>
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
