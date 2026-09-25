import Image from "next/image";
import Link from "next/link";
import { Clock, Flame, Star } from "lucide-react";
import { Workout } from "@/types/workout";

export default function WorkoutCard({ workout }: { workout: Workout }) {
  return (
    <Link
      href={`/workout/${workout.id}`}
      className="group flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/5 transition-colors hover:border-[var(--accent)]/60"
    >
      <div className="relative h-44 w-full overflow-hidden bg-black/40">
        <Image
          src={workout.image}
          alt={workout.name}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-1 flex-col gap-3 p-4">
        <div className="flex flex-wrap gap-2">
          {workout.muscleGroups.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-white/10 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-white/70"
            >
              {tag}
            </span>
          ))}
        </div>
        <h3 className="font-display text-lg font-semibold uppercase leading-tight">
          {workout.name}
        </h3>
        <p className="text-sm text-white/50">{workout.equipment}</p>
        <div className="mt-auto flex items-center gap-4 text-sm text-white/70">
          <span className="flex items-center gap-1">
            <Clock size={16} className="text-[var(--accent)]" />
            {workout.duration} min
          </span>
          <span className="flex items-center gap-1">
            <Flame size={16} className="text-[var(--accent)]" />
            {workout.caloriesBurned} kcal
          </span>
          <span className="flex items-center gap-1">
            <Star size={16} className="text-[var(--accent)]" />
            {workout.rating}
          </span>
        </div>
      </div>
    </Link>
  );
}
