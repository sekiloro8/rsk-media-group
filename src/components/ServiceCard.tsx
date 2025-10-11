import { LucideIcon } from "lucide-react";
import { Card } from "./ui/card";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

const ServiceCard = ({ icon: Icon, title, description }: ServiceCardProps) => {
  return (
    <Card className="group p-8 hover:shadow-2xl transition-all duration-300 border-border hover:border-primary/50 bg-card animate-fade-in hover:-translate-y-1">
      <div className="mb-6 inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-accent text-white group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg">
        <Icon size={32} />
      </div>
      <h3 className="text-2xl font-bold mb-3 text-foreground">{title}</h3>
      <p className="text-muted-foreground leading-relaxed">{description}</p>
    </Card>
  );
};

export default ServiceCard;
