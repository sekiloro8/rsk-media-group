import { Link } from "react-router-dom";
import { ArrowRight, Package, Award, MessageSquare, Printer, TrendingUp, Radio, Lightbulb, Rocket, Target, BarChart3, Heart, Users, Globe, Sparkles } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import ServiceCard from "@/components/ServiceCard";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import heroImage from "@/assets/hero-bg.jpg";
import collaborativeWork from "@/assets/collaborative-work.jpg";
import creativeExcellence from "@/assets/creative-excellence.jpg";
import digitalMarketing from "@/assets/digital-marketing.jpg";

const Index = () => {
  const services = [
    {
      icon: Award,
      title: "Brand Development",
      description: "Build a powerful brand identity with our logo design, corporate identity, banners, flyers, and business cards.",
    },
    {
      icon: Package,
      title: "Product Development",
      description: "From packaging design to product labels and barcodes - complete product development and consultation services.",
    },
    {
      icon: TrendingUp,
      title: "Digital Marketing",
      description: "Social media management, web design, custom emails, business proposals, and comprehensive digital strategies.",
    },
    {
      icon: Printer,
      title: "Printing & Publishing",
      description: "High-quality printing services including product labels, vinyl stickers, contravision, uniforms, and more.",
    },
    {
      icon: Radio,
      title: "Outdoor Marketing",
      description: "Strategic outdoor advertising with sign boards, digital screens, vinyl stickers, and billboard design.",
    },
    {
      icon: MessageSquare,
      title: "Brand Consultation",
      description: "Expert guidance on brand strategy, positioning, and growth to help your business thrive in the market.",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      <WhatsAppButton />

      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-hero">
        <div
          className="absolute inset-0 z-0 opacity-10"
          style={{
            backgroundImage: `url(${heroImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />

        <div className="container mx-auto px-4 relative z-10 py-20">
          <div className="max-w-5xl mx-auto text-center">
            <div className="inline-block mb-6 px-6 py-2 bg-primary/10 rounded-full border border-primary/20 backdrop-blur-sm animate-fade-in">
              <span className="text-primary font-semibold text-sm tracking-wide">Africa's Creative Growth Partner</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white mb-8 animate-fade-in-up leading-tight">
              We Build Brands
              <span className="block bg-gradient-accent bg-clip-text text-transparent">That Grow.</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed animate-fade-in" style={{ animationDelay: "0.2s" }}>
              R-SK Media Group helps African and global businesses tell their story through design, strategy, and measurable digital impact.
            </p>
            
            <div className="flex flex-wrap gap-4 justify-center animate-scale-in" style={{ animationDelay: "0.4s" }}>
              <Button asChild size="lg" variant="premium" className="text-base">
                <Link to="/portfolio">
                  See Our Work <ArrowRight className="ml-2" size={20} />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="text-base bg-white/5 border-white/30 text-white hover:bg-white hover:text-secondary backdrop-blur-sm">
                <Link to="/contact">
                  Talk to Our Team
                </Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Subtle bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-10" />
      </section>

      {/* 3-Step Process Section */}
      <section className="py-24 bg-background relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent" />
        
        <div className="container mx-auto px-4 relative">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
              How We Work
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Our proven three-step approach delivers consistent results
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="p-8 text-center hover:shadow-glow hover:border-primary/50 transition-all duration-500 group bg-gradient-card">
              <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-accent flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:shadow-glow transition-all duration-300">
                <Target className="text-white" size={40} />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-foreground">Strategy</h3>
              <p className="text-muted-foreground leading-relaxed">
                We analyze your market, audience, and goals to create a data-driven roadmap for success.
              </p>
            </Card>

            <Card className="p-8 text-center hover:shadow-glow hover:border-primary/50 transition-all duration-500 group bg-gradient-card">
              <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-accent flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:shadow-glow transition-all duration-300">
                <Sparkles className="text-white" size={40} />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-foreground">Create</h3>
              <p className="text-muted-foreground leading-relaxed">
                Our creative team brings your vision to life with stunning design and compelling storytelling.
              </p>
            </Card>

            <Card className="p-8 text-center hover:shadow-glow hover:border-primary/50 transition-all duration-500 group bg-gradient-card">
              <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-accent flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:shadow-glow transition-all duration-300">
                <Rocket className="text-white" size={40} />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-foreground">Scale</h3>
              <p className="text-muted-foreground leading-relaxed">
                We launch, measure, and optimize your campaigns for maximum impact and sustainable growth.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-hero bg-clip-text text-transparent">
              What We Do
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive media solutions tailored to elevate your brand across every channel
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div key={index} style={{ animationDelay: `${index * 0.1}s` }}>
                <ServiceCard {...service} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
              Results That Speak
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Real projects. Real impact. See how we've helped brands grow.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            <Card className="overflow-hidden group hover:shadow-xl transition-all duration-500 hover:-translate-y-2">
              <div className="overflow-hidden h-64">
                <img 
                  src={collaborativeWork} 
                  alt="Brand transformation project" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="p-8">
                <div className="inline-block px-3 py-1 bg-primary/10 rounded-full mb-4">
                  <span className="text-primary font-semibold text-sm">Branding</span>
                </div>
                <h3 className="text-2xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors">Complete Brand Transformation</h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  Redesigned brand identity resulting in increased recognition and market presence.
                </p>
                <div className="flex items-center gap-2 text-primary font-bold text-lg">
                  <BarChart3 size={20} />
                  <span>+45% Engagement</span>
                </div>
              </div>
            </Card>

            <Card className="overflow-hidden group hover:shadow-xl transition-all duration-500 hover:-translate-y-2">
              <div className="overflow-hidden h-64">
                <img 
                  src={digitalMarketing} 
                  alt="Digital campaign success" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="p-8">
                <div className="inline-block px-3 py-1 bg-primary/10 rounded-full mb-4">
                  <span className="text-primary font-semibold text-sm">Digital Marketing</span>
                </div>
                <h3 className="text-2xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors">Multi-Channel Campaign</h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  Strategic digital marketing campaign that exceeded all performance targets.
                </p>
                <div className="flex items-center gap-2 text-primary font-bold text-lg">
                  <TrendingUp size={20} />
                  <span>+120% Conversions</span>
                </div>
              </div>
            </Card>

            <Card className="overflow-hidden group hover:shadow-xl transition-all duration-500 hover:-translate-y-2">
              <div className="overflow-hidden h-64">
                <img 
                  src={creativeExcellence} 
                  alt="Product packaging design" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="p-8">
                <div className="inline-block px-3 py-1 bg-primary/10 rounded-full mb-4">
                  <span className="text-primary font-semibold text-sm">Product Development</span>
                </div>
                <h3 className="text-2xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors">Premium Packaging Design</h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  Award-winning packaging that elevated product positioning and sales.
                </p>
                <div className="flex items-center gap-2 text-primary font-bold text-lg">
                  <Award size={20} />
                  <span>+80% Sales Growth</span>
                </div>
              </div>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Button asChild size="lg" variant="outline">
              <Link to="/portfolio">
                View All Case Studies <ArrowRight className="ml-2" size={20} />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Metrics Strip */}
      <section className="py-20 bg-gradient-secondary text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center max-w-5xl mx-auto">
            <div className="animate-fade-in">
              <div className="text-5xl md:text-6xl font-black mb-2 text-primary">100+</div>
              <div className="text-white/90 font-medium">Projects Completed</div>
            </div>
            <div className="animate-fade-in" style={{ animationDelay: "0.1s" }}>
              <div className="text-5xl md:text-6xl font-black mb-2 text-primary">+30%</div>
              <div className="text-white/90 font-medium">Average Growth</div>
            </div>
            <div className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <div className="text-5xl md:text-6xl font-black mb-2 text-primary">12+</div>
              <div className="text-white/90 font-medium">Years Experience</div>
            </div>
            <div className="animate-fade-in" style={{ animationDelay: "0.3s" }}>
              <div className="text-5xl md:text-6xl font-black mb-2 text-primary">5</div>
              <div className="text-white/90 font-medium">African Regions</div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
              Why Choose R-SK Media Group
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We combine African creativity with global excellence
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="p-10 text-center hover:shadow-glow hover:border-primary/50 transition-all duration-500 group relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-500" />
              <BarChart3 className="mx-auto mb-6 text-primary" size={48} />
              <h3 className="text-2xl font-bold mb-4 text-foreground">Creative Strategy Meets Data</h3>
              <p className="text-muted-foreground leading-relaxed">
                We blend artistic vision with analytics to create campaigns that look great and perform even better.
              </p>
            </Card>

            <Card className="p-10 text-center hover:shadow-glow hover:border-primary/50 transition-all duration-500 group relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-500" />
              <Globe className="mx-auto mb-6 text-primary" size={48} />
              <h3 className="text-2xl font-bold mb-4 text-foreground">African Perspective, Global Standard</h3>
              <p className="text-muted-foreground leading-relaxed">
                Rooted in African authenticity while delivering world-class quality that competes globally.
              </p>
            </Card>

            <Card className="p-10 text-center hover:shadow-glow hover:border-primary/50 transition-all duration-500 group relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-500" />
              <Heart className="mx-auto mb-6 text-primary" size={48} />
              <h3 className="text-2xl font-bold mb-4 text-foreground">Results That Speak</h3>
              <p className="text-muted-foreground leading-relaxed">
                Over 12 years of proven success, delivering measurable growth and lasting impact for our clients.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-muted/30 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
        
        <div className="container mx-auto px-4 relative">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
              What Our Clients Say
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Trust built on results and relationships
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="p-8 hover:shadow-lg transition-all duration-300">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-primary text-xl">★</span>
                ))}
              </div>
              <p className="text-muted-foreground mb-6 leading-relaxed italic">
                "R-SK Media Group transformed our brand identity completely. Their creative approach and strategic thinking delivered results beyond our expectations."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-gradient-accent" />
                <div>
                  <div className="font-bold text-foreground">Sarah Mokoena</div>
                  <div className="text-sm text-muted-foreground">CEO, TechStart Africa</div>
                </div>
              </div>
            </Card>

            <Card className="p-8 hover:shadow-lg transition-all duration-300">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-primary text-xl">★</span>
                ))}
              </div>
              <p className="text-muted-foreground mb-6 leading-relaxed italic">
                "Professional, creative, and results-driven. They understood our vision and brought it to life with exceptional quality and attention to detail."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-gradient-accent" />
                <div>
                  <div className="font-bold text-foreground">John Nkosi</div>
                  <div className="text-sm text-muted-foreground">Founder, Urban Retail</div>
                </div>
              </div>
            </Card>

            <Card className="p-8 hover:shadow-lg transition-all duration-300">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-primary text-xl">★</span>
                ))}
              </div>
              <p className="text-muted-foreground mb-6 leading-relaxed italic">
                "Outstanding work! Their digital marketing expertise helped us achieve a 120% increase in conversions. Highly recommend their services."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-gradient-accent" />
                <div>
                  <div className="font-bold text-foreground">Thabo Leshoai</div>
                  <div className="text-sm text-muted-foreground">Director, AgriGrow</div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 bg-gradient-hero text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-gradient-gold-shimmer animate-pulse" />
        </div>
        
        <div className="container mx-auto px-4 text-center relative">
          <h2 className="text-4xl md:text-6xl font-black mb-6">
            Let's Create Something Great Together.
          </h2>
          <p className="text-xl md:text-2xl mb-12 text-white/90 max-w-3xl mx-auto leading-relaxed">
            Ready to transform your brand? Get in touch and discover how R-SK Media Group can help you achieve your goals.
          </p>
          
          <div className="flex flex-wrap gap-4 justify-center">
            <Button asChild size="lg" variant="premium" className="text-base">
              <Link to="/contact">
                Start Your Project <ArrowRight className="ml-2" size={20} />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="text-base bg-white/5 border-white/30 text-white hover:bg-white hover:text-secondary backdrop-blur-sm">
              <Link to="/about">
                Learn More About Us
              </Link>
            </Button>
          </div>

          <div className="mt-16 flex flex-wrap items-center justify-center gap-8 text-white/70">
            <div className="flex items-center gap-2">
              <Users size={20} />
              <span className="text-sm">100+ Happy Clients</span>
            </div>
            <div className="flex items-center gap-2">
              <Award size={20} />
              <span className="text-sm">Award-Winning Work</span>
            </div>
            <div className="flex items-center gap-2">
              <Globe size={20} />
              <span className="text-sm">Serving 5 African Regions</span>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
