import { LucideIcon } from "lucide-react";
import { Card } from "./ui/card";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

const ServiceCard = ({ icon: Icon, title, description }: ServiceCardProps) => {
  return (
    <Card className="group p-6 hover:shadow-lg transition-all duration-300 border-border/50 hover:border-primary/30 bg-gradient-card animate-fade-in">
      <div className="mb-4 inline-flex items-center justify-center w-14 h-14 rounded-lg bg-gradient-accent text-accent-foreground group-hover:scale-110 transition-transform duration-300">
        <Icon size={28} />
      </div>
      <h3 className="text-xl font-bold mb-2 text-foreground">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </Card>
  );
};

export default ServiceCard;
