import { Card } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";
import { Link } from "react-router-dom";

interface SubjectCardProps {
  title: string;
  icon: LucideIcon;
  color: string;
  image: string;
  description: string;
  to: string;
}

export const SubjectCard = ({ title, icon: Icon, color, image, description, to }: SubjectCardProps) => {
  return (
    <Link to={to}>
      <Card className="group overflow-hidden bg-card hover:shadow-hover transition-all duration-300 cursor-pointer animate-bounce-in">
        <div className="relative h-40 overflow-hidden">
          <img 
            src={image} 
            alt={title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
          />
          <div className={`absolute inset-0 bg-gradient-to-t from-${color}/80 to-transparent`} />
          <div className="absolute top-4 right-4 bg-card/90 backdrop-blur-sm p-3 rounded-full shadow-lg">
            <Icon className="w-6 h-6" style={{ color }} />
          </div>
        </div>
        <div className="p-5">
          <h3 className="text-xl font-bold mb-2 text-foreground">{title}</h3>
          <p className="text-muted-foreground text-sm">{description}</p>
        </div>
      </Card>
    </Link>
  );
};
