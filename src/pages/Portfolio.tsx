import { Link } from "react-router-dom";
import { ArrowRight, Quote } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import portfolio1 from "@/assets/portfolio-1.jpg";
import portfolio2 from "@/assets/portfolio-2.jpg";
import portfolio3 from "@/assets/portfolio-3.jpg";
import heroBg from "@/assets/hero-bg.jpg";

const Portfolio = () => {
  const projects = [
    {
      image: portfolio1,
      title: "Urban Billboard Campaign",
      category: "Outdoor Advertising",
      description: "Strategic billboard placement across major city centers, resulting in 40% increase in brand awareness for our retail client.",
    },
    {
      image: portfolio2,
      title: "Creative Production Suite",
      category: "Video Production",
      description: "Complete video campaign production including concept development, filming, and post-production for a leading FMCG brand.",
    },
    {
      image: portfolio3,
      title: "Social Media Success",
      category: "Digital Marketing",
      description: "Comprehensive social media strategy delivering 250% growth in engagement and 150% increase in conversions over 6 months.",
    },
  ];

  const testimonials = [
    {
      quote: "R-SK Media Group transformed our brand visibility. Their strategic approach and creative excellence delivered results beyond our expectations.",
      author: "Sarah M.",
      position: "Marketing Director, Retail Brand",
    },
    {
      quote: "Professional, creative, and results-driven. Working with R-SK has been a game-changer for our digital presence.",
      author: "James K.",
      position: "CEO, Tech Startup",
    },
    {
      quote: "The team's understanding of the African market and their innovative solutions made all the difference in our campaign success.",
      author: "Linda T.",
      position: "Brand Manager, FMCG Company",
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
            src={heroBg} 
            alt="R-SK Media Portfolio background" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-hero/90"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-black mb-6 animate-fade-in-up">
              Our Portfolio
            </h1>
            <p className="text-xl md:text-2xl text-white/90 animate-fade-in">
              Success stories and campaigns that made an impact
            </p>
          </div>
        </div>
      </section>

      {/* Projects Showcase */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-hero bg-clip-text text-transparent">
              Featured Work
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Explore some of our most successful campaigns and creative projects
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="overflow-hidden group hover:shadow-xl transition-all duration-300 border-border/50 hover:border-primary/30 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <div className="text-sm font-semibold text-primary mb-2">{project.category}</div>
                  <h3 className="text-2xl font-bold mb-3 text-foreground">{project.title}</h3>
                  <p className="text-muted-foreground">{project.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gradient-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
              Client Testimonials
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Don't just take our word for it – hear from our satisfied clients
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className="p-8 hover:shadow-lg transition-all duration-300 border-border/50 hover:border-primary/30 bg-background animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <Quote className="text-primary mb-4" size={32} />
                <p className="text-muted-foreground mb-6 leading-relaxed italic">
                  "{testimonial.quote}"
                </p>
                <div>
                  <div className="font-bold text-foreground">{testimonial.author}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.position}</div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Before & After Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6 text-foreground">
              Measurable Results
            </h2>
            <p className="text-lg text-muted-foreground mb-12">
              Our campaigns deliver tangible outcomes that drive business growth
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { metric: "40%", label: "Average Brand Awareness Increase" },
                { metric: "250%", label: "Social Media Engagement Growth" },
                { metric: "150%", label: "Average ROI Improvement" },
              ].map((stat, index) => (
                <div
                  key={index}
                  className="p-8 rounded-lg bg-gradient-accent text-white animate-scale-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="text-5xl font-black mb-2">{stat.metric}</div>
                  <div className="text-lg">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-hero text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Create Your Success Story?
          </h2>
          <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
            Let's discuss how we can help your brand achieve similar results.
          </p>
          <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90 text-lg px-8 py-6 hover:shadow-glow transition-all duration-300">
            <Link to="/contact">
              Start Your Project <ArrowRight className="ml-2" size={20} />
            </Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Portfolio;
