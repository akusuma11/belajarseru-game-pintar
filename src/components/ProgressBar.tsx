import { Progress } from "@/components/ui/progress";

interface ProgressBarProps {
  value: number;
  label?: string;
  showPercentage?: boolean;
}

export const ProgressBar = ({ value, label, showPercentage = true }: ProgressBarProps) => {
  return (
    <div className="w-full space-y-2">
      {label && (
        <div className="flex justify-between items-center">
          <span className="text-sm font-medium text-foreground">{label}</span>
          {showPercentage && <span className="text-sm text-muted-foreground">{value}%</span>}
        </div>
      )}
      <Progress value={value} className="h-3" />
    </div>
  );
};
