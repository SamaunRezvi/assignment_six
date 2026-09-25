"use client";

import Image from "next/image";
import Link from "next/link";
import { Clock, Flame, Star, Check, X } from "lucide-react";
import { Workout } from "@/types/workout";

interface PlanWorkoutCardProps {
  workout: Workout & { done?: boolean };
  onRemove: () => void;
  onMarkDone?: () => void;
}

export default function PlanWorkoutCard({
  workout,
  onRemove,
  onMarkDone,
}: PlanWorkoutCardProps) {
  return (
    <div className="flex flex-col gap-4 rounded-2xl border border-white/10 bg-white/5 p-4 sm:flex-row sm:items-center">
      <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-xl">
        <Image src={workout.image} alt={workout.name} fill className="object-cover" />
      </div>

      <div className="flex-1">
        <h3
          className={`font-display text-base font-semibold uppercase ${
            workout.done ? "text-white/40 line-through" : ""
          }`}
        >
          {workout.name}
        </h3>
        <p className="text-sm text-white/50">{workout.equipment}</p>
        <div className="mt-2 flex items-center gap-4 text-xs text-white/60">
          <span className="flex items-center gap-1">
            <Clock size={14} className="text-[var(--accent)]" />
            {workout.duration} min
          </span>
          <span className="flex items-center gap-1">
            <Flame size={14} className="text-[var(--accent)]" />
            {workout.caloriesBurned} kcal
          </span>
          <span className="flex items-center gap-1">
            <Star size={14} className="text-[var(--accent)]" />
            {workout.rating}
          </span>
        </div>
      </div>

      <div className="flex items-center gap-2">
        <Link
          href={`/workout/${workout.id}`}
          className="rounded-full border border-white/20 px-4 py-2 text-xs font-semibold uppercase text-white/80 hover:border-white"
        >
          View Details
        </Link>
        {onMarkDone && (
          <button
            onClick={onMarkDone}
            aria-label="Mark as done"
            className="flex h-9 w-9 items-center justify-center rounded-full bg-[var(--accent)] text-black"
          >
            <Check size={16} />
          </button>
        )}
        <button
          onClick={onRemove}
          aria-label="Remove"
          className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 text-white/70 hover:border-red-400 hover:text-red-400"
        >
          <X size={16} />
        </button>
      </div>
    </div>
  );
}
