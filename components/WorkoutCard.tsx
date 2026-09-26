import Image from "next/image";
import Link from "next/link";
import { Workout } from "@/types/workout";
import WorkoutStats from "./WorkoutStats";

export default function WorkoutCard({ workout }: { workout: Workout }) {
  return (
    <Link
      href={`/workout/${workout.id}`}
      className="group flex flex-col overflow-hidden rounded-2xl border border-[#252830] bg-[#1a1d23] transition-colors hover:border-[var(--accent)]/60"
    >
      <div className="relative h-48 w-full overflow-hidden bg-black/40">
        <Image
          src={workout.image}
          alt={workout.name}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-1 flex-col gap-3 p-5">
        <div className="flex flex-wrap gap-2">
          {workout.muscleGroups.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-[var(--accent)] px-2.5 py-0.5 text-xs font-semibold text-black"
            >
              {tag}
            </span>
          ))}
        </div>
        <h3 className="font-display text-xl font-semibold uppercase leading-tight">
          {workout.name}
        </h3>
        <p className="text-sm text-white/50">{workout.equipment}</p>
        <WorkoutStats
          duration={workout.duration}
          caloriesBurned={workout.caloriesBurned}
          rating={workout.rating}
          className="mt-auto text-sm text-white/70"
        />
      </div>
    </Link>
  );
}
