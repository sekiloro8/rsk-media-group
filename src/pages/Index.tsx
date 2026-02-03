import { Link } from "react-router-dom";
import { ArrowRight, Package, Award, MessageSquare, Printer, TrendingUp, Radio } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import ServiceCard from "@/components/ServiceCard";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-bg.jpg";
import HeroBackground from "@/components/HeroBackground";
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
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero">
        <HeroBackground />
        <div className="absolute inset-0 bg-black/50 z-0" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="text-left">
              <h1 className="text-5xl md:text-7xl font-black text-white mb-6 animate-fade-in-up uppercase leading-tight">
                Best Digital
                <span className="block">Marketing</span>
                <span className="block">Agency</span>
              </h1>
              <div className="flex flex-wrap gap-4 mb-8">
                <span className="text-white/80 uppercase text-sm tracking-wider">• The Future Advertising</span>
                <span className="text-white/80 uppercase text-sm tracking-wider">• Strategic Minds</span>
                <span className="text-white/80 uppercase text-sm tracking-wider">• Strategy Genues</span>
              </div>
              <div className="flex flex-wrap gap-4 animate-scale-in">
                <Button asChild size="lg" className="text-lg px-8 py-6 uppercase font-bold">
                  <Link to="/contact">
                    Learn More
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="text-lg px-8 py-6 uppercase font-bold border-white text-white">
                  <Link to="/services">
                    See How It Works
                  </Link>
                </Button>
              </div>
            </div>
            <div className="relative animate-fade-in hidden md:block">
              <div className="absolute -inset-4 bg-primary/20 rounded-full blur-3xl" />
              <img 
                src={heroImage} 
                alt="Digital Marketing Team" 
                className="relative rounded-full w-full max-w-lg ml-auto border-4 border-white/20 shadow-2xl"
              />
            </div>
          </div>
        </div>

        {/* Service Categories Banner */}
        <div className="absolute bottom-0 left-0 right-0 bg-primary z-20">
          <div className="container mx-auto px-4">
            <div className="flex overflow-x-auto py-4 gap-8 scrollbar-hide">
              <span className="text-white whitespace-nowrap text-sm font-medium">Customer IT Solution</span>
              <span className="text-white whitespace-nowrap text-sm font-medium">Business Solutions</span>
              <span className="text-white whitespace-nowrap text-sm font-medium">Web Development Services</span>
              <span className="text-white whitespace-nowrap text-sm font-medium">UX-UI Design Services</span>
              <span className="text-white whitespace-nowrap text-sm font-medium">Business Consulting Services</span>
              <span className="text-white whitespace-nowrap text-sm font-medium">Marketing Company Services</span>
            </div>
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

      {/* Visual Showcase */}
      <section className="py-20 bg-gradient-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-hero bg-clip-text text-transparent">
              Where Creativity Meets Strategy
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              See how we bring brands to life through innovative design and strategic thinking
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 mb-20">
            <div className="animate-fade-in group">
              <div className="overflow-hidden rounded-lg shadow-xl">
                <img 
                  src={collaborativeWork} 
                  alt="Creative team collaborating on brand strategies" 
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <h3 className="text-xl font-bold mt-4 text-foreground">Collaborative Approach</h3>
              <p className="text-muted-foreground mt-2">Working together to bring your vision to life</p>
            </div>
            <div className="animate-fade-in group" style={{ animationDelay: "0.1s" }}>
              <div className="overflow-hidden rounded-lg shadow-xl">
                <img 
                  src={creativeExcellence} 
                  alt="Professional design workspace and creative process" 
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <h3 className="text-xl font-bold mt-4 text-foreground">Creative Excellence</h3>
              <p className="text-muted-foreground mt-2">Award-winning design and brand development</p>
            </div>
            <div className="animate-fade-in group" style={{ animationDelay: "0.2s" }}>
              <div className="overflow-hidden rounded-lg shadow-xl">
                <img 
                  src={digitalMarketing} 
                  alt="Digital marketing analytics and performance tracking" 
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <h3 className="text-xl font-bold mt-4 text-foreground">Data-Driven Results</h3>
              <p className="text-muted-foreground mt-2">Strategic insights that drive growth</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Teaser */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              We Are R-SK Media Group
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              We are professionals with over 12 years of experience in business across Finance, Textiles, Manufacturing, and Farming. Founded with the vision to redefine media in Africa, we combine creativity, strategy, and innovation to deliver exceptional results. Our commitment to truth, honesty, and integrity sets us apart as your trusted partner in media excellence.
            </p>
            <Button asChild variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
              <Link to="/about">
                Learn More About Us <ArrowRight className="ml-2" size={18} />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-hero text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Scale Your Brand?
          </h2>
          <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
            Let's create something amazing together. Get in touch and let's discuss how we can help your brand reach new heights.
          </p>
          <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90 text-lg px-8 py-6 hover:shadow-glow transition-all duration-300">
            <Link to="/contact">
              Contact Us Today <ArrowRight className="ml-2" size={20} />
            </Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
