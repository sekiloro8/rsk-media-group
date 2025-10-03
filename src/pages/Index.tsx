import { Link } from "react-router-dom";
import { ArrowRight, Package, Award, MessageSquare, Printer, TrendingUp, Radio } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import ServiceCard from "@/components/ServiceCard";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-bg.jpg";

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
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url(${heroImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-primary/80 to-accent/70" />
        </div>

        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-5xl md:text-7xl font-black text-white mb-6 animate-fade-in-up">
            Innovative Media Solutions
            <span className="block text-accent mt-2">for Africa</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto animate-fade-in">
            Your Partner You Can Trust in Media, Marketing & Digital Growth
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-scale-in">
            <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-white text-lg px-8 py-6 hover:shadow-glow transition-all duration-300">
              <Link to="/contact">
                Get Started <ArrowRight className="ml-2" size={20} />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-primary text-lg px-8 py-6 transition-all duration-300">
              <Link to="/services">Our Services</Link>
            </Button>
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

      {/* About Teaser */}
      <section className="py-20 bg-gradient-card">
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
