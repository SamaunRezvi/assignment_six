"use client";

import Image from "next/image";
import Link from "next/link";
import { Check, X } from "lucide-react";
import { Workout } from "@/types/workout";
import WorkoutStats from "./WorkoutStats";

interface PlanWorkoutCardProps {
  workout: Workout;
  onRemove: () => void;
  onMarkDone?: () => void;
}

export default function PlanWorkoutCard({
  workout,
  onRemove,
  onMarkDone,
}: PlanWorkoutCardProps) {
  return (
    <div className="flex flex-col gap-5 rounded-3xl border border-white/10 bg-[#1a1d23] p-5 sm:flex-row sm:items-center sm:p-6">
      <div className="relative h-28 w-28 shrink-0 overflow-hidden rounded-2xl sm:h-24 sm:w-24">
        <Image src={workout.image} alt={workout.name} fill sizes="96px" className="object-cover" />
      </div>

      <div className="flex-1">
        <h3 className="font-display text-xl font-semibold uppercase sm:text-lg">
          {workout.name}
        </h3>
        <p className="text-sm text-white/50">{workout.equipment}</p>
        <WorkoutStats
          duration={workout.duration}
          caloriesBurned={workout.caloriesBurned}
          rating={workout.rating}
          className="mt-2 text-sm text-white/60"
          iconSize={16}
        />
      </div>

      <div className="flex flex-wrap items-center gap-2">
        <Link
          href={`/workout/${workout.id}`}
          className="rounded-2xl border border-white/80 px-4 py-2.5 text-base font-semibold text-white hover:bg-white/10"
        >
          View Details
        </Link>
        {onMarkDone && (
          <button
            onClick={onMarkDone}
            className="flex items-center gap-1.5 rounded-2xl bg-[var(--accent)] px-4 py-2.5 text-base font-semibold text-black"
          >
            <Check size={14} />
            Mark as Done
          </button>
        )}
        <button
          onClick={onRemove}
          aria-label={`Remove ${workout.name}`}
            className="flex h-10 w-10 items-center justify-center rounded-2xl text-white/60 hover:bg-white/10 hover:text-red-400"
        >
          <X size={16} />
        </button>
      </div>
    </div>
  );
}
