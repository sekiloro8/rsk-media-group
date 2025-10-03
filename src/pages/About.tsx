import { Target, Eye, Award } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Card } from "@/components/ui/card";

const About = () => {
  const values = [
    {
      icon: Target,
      title: "Our Mission",
      description: "To deliver innovative, impactful media solutions that empower African brands to reach their full potential and connect meaningfully with their audiences.",
    },
    {
      icon: Eye,
      title: "Our Vision",
      description: "To be Africa's most trusted media partner, recognized for creativity, reliability, and transformative campaigns that shape the future of advertising.",
    },
    {
      icon: Award,
      title: "Our Values",
      description: "Excellence, Innovation, Integrity, and Partnership. We believe in building lasting relationships and delivering results that exceed expectations.",
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
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-6 text-foreground">Our Story</h2>
            <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
              <p>
                Founded with the vision to redefine media in Africa, R-SK Media Group has grown from a passionate startup into a leading media solutions provider. We recognized early on that African brands needed a partner who understood both the local market dynamics and global best practices.
              </p>
              <p>
                Over the years, we've built a reputation for delivering exceptional results through innovative outdoor advertising campaigns, cutting-edge digital marketing strategies, and compelling creative productions. Our team combines deep industry knowledge with creative excellence to help brands tell their stories and achieve their goals.
              </p>
              <p>
                What sets us apart is our commitment to understanding each client's unique needs and crafting customized solutions that deliver measurable results. We don't just execute campaigns – we build partnerships that drive long-term success.
              </p>
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
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-center text-foreground">
              Why Choose R-SK Media Group?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { title: "Local Expertise", description: "Deep understanding of African markets and consumer behavior" },
                { title: "Proven Track Record", description: "Successful campaigns across multiple industries and regions" },
                { title: "Creative Excellence", description: "Award-winning creative team delivering stunning visuals and compelling narratives" },
                { title: "Data-Driven Approach", description: "Strategic decisions backed by insights and analytics" },
                { title: "End-to-End Solutions", description: "From strategy to execution, we handle everything" },
                { title: "Dedicated Support", description: "Committed account management and ongoing optimization" },
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
