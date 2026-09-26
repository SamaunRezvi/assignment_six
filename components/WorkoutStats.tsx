import { Clock, Flame, Star } from "lucide-react";

interface WorkoutStatsProps {
  duration: number;
  caloriesBurned: number;
  rating: number;
  className?: string;
  iconSize?: number;
}

export default function WorkoutStats({
  duration,
  caloriesBurned,
  rating,
  className = "text-base text-white/70",
  iconSize = 16,
}: WorkoutStatsProps) {
  return (
    <div className={`flex items-center gap-5 ${className}`}>
      <span className="flex items-center gap-1">
        <Clock size={iconSize} className="text-[var(--accent)]" />
        {duration} min
      </span>
      <span className="flex items-center gap-1">
        <Flame size={iconSize} className="text-[var(--accent)]" />
        {caloriesBurned} kcal
      </span>
      <span className="flex items-center gap-1">
        <Star size={iconSize} className="text-[var(--accent)]" />
        {rating}
      </span>
    </div>
  );
}
