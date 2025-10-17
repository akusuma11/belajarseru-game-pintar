import { Card } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

interface AchievementBadgeProps {
  title: string;
  icon: LucideIcon;
  description: string;
  earned: boolean;
  color?: string;
}

export const AchievementBadge = ({ 
  title, 
  icon: Icon, 
  description, 
  earned,
  color = "var(--accent)"
}: AchievementBadgeProps) => {
  return (
    <Card 
      className={`p-4 text-center transition-all duration-300 ${
        earned ? 'bg-gradient-accent shadow-hover animate-bounce-in' : 'bg-muted opacity-50'
      }`}
    >
      <div className={`mx-auto w-16 h-16 rounded-full flex items-center justify-center mb-3 ${
        earned ? 'bg-card/90' : 'bg-background/50'
      }`}>
        <Icon className="w-8 h-8" style={{ color: earned ? color : 'gray' }} />
      </div>
      <h4 className="font-bold text-sm mb-1">{title}</h4>
      <p className="text-xs text-muted-foreground">{description}</p>
    </Card>
  );
};
