import { Target, Eye, Award } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Card } from "@/components/ui/card";
import teamCollaboration from "@/assets/team-collaboration.jpg";
import brandConsultation from "@/assets/brand-consultation.jpg";
import aboutHeroBg from "@/assets/team-collaboration.jpg";

const About = () => {
  const values = [
    {
      icon: Eye,
      title: "Our Vision",
      description: "To lead people towards the light, anything that can bring light into this dark world is the Truth. We shall not compromise on telling what is true without any fear of favour.",
    },
    {
      icon: Target,
      title: "Our Mission",
      description: "To be the main usher of the word (Truth) into the world.",
    },
    {
      icon: Award,
      title: "Our Values",
      description: "Creativity, Honesty, Openness, Integrity, Courage, Hardwork, and Respect.",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      <WhatsAppButton />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={aboutHeroBg} 
            alt="R-SK Media Group team" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-hero/90"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-black mb-6 animate-fade-in-up">
              About R-SK Media Group
            </h1>
            <p className="text-xl md:text-2xl text-white/90 animate-fade-in">
              Your Trusted Partner in Media Excellence
            </p>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto items-center">
            <div className="order-2 md:order-1">
              <h2 className="text-4xl font-bold mb-6 text-foreground">Our Story</h2>
              <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                <p>
                  We are professionals with over 12 years of experience in the business world, spanning various industries from Finance, Textiles, Manufacturing, and Farming. Founded on July 1, 2021, R-SK Media Group (PTY LTD) was established with a clear purpose: to be different in a world full of falsehood.
                </p>
                <p>
                  Based in Mafeteng, Lesotho, we've built our reputation on providing comprehensive media solutions including Product and Brand Development, E-Marketing, Brand Consultation, Printing & Publishing, Outdoor Media, and TV & Radio Production. Our commitment to truth, creativity, and excellence drives everything we do.
                </p>
                <p>
                  What sets us apart is our unwavering commitment to honesty and integrity. We believe in leading people towards the light, telling what is true without any fear or favour. Our diverse experience across multiple industries gives us unique insights that we bring to every project.
                </p>
              </div>
            </div>
            <div className="order-1 md:order-2 animate-fade-in">
              <img 
                src={teamCollaboration} 
                alt="R-SK Media Group team collaborating on creative projects" 
                className="rounded-lg shadow-2xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-20 bg-gradient-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-hero bg-clip-text text-transparent">
              What Drives Us
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Our guiding principles and commitment to excellence
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {values.map((value, index) => (
              <Card
                key={index}
                className="p-8 text-center hover:shadow-lg transition-all duration-300 border-border/50 hover:border-primary/30 bg-background animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-accent text-accent-foreground mb-6">
                  <value.icon size={32} />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-foreground">{value.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{value.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
              <div className="animate-fade-in">
                <img 
                  src={brandConsultation} 
                  alt="Professional brand consultation and strategy meeting" 
                  className="rounded-lg shadow-2xl w-full"
                />
              </div>
              <div>
                <h2 className="text-4xl font-bold mb-6 text-foreground">
                  Why Choose R-SK Media Group?
                </h2>
                <p className="text-lg text-muted-foreground mb-6">
                  Our unique combination of experience, integrity, and innovation makes us the perfect partner for your media needs.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { title: "Buy into Media Corporations", description: "Strategic goal to expand our reach and influence across Africa" },
                { title: "Internationally Recognized", description: "Building a globally respected brand known for excellence" },
                { title: "Leaders in Innovation", description: "Pioneering creative and innovative solutions in media" },
                { title: "Modern Media Platforms", description: "Adopting cutting-edge trends to ensure effective communication" },
                { title: "12+ Years Experience", description: "Deep expertise across Finance, Textiles, Manufacturing, and Farming" },
                { title: "Truth & Integrity", description: "Committed to honesty without fear or favour in all we do" },
              ].map((item, index) => (
                <div
                  key={index}
                  className="p-6 rounded-lg border border-border/50 hover:border-primary/30 transition-colors animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <h3 className="text-xl font-bold mb-2 text-foreground">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
