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
    <div className="flex flex-col gap-4 rounded-2xl border border-white/10 bg-[#1a1d23] p-4 sm:flex-row sm:items-center sm:p-5">
      <div className="relative h-24 w-24 shrink-0 overflow-hidden rounded-xl sm:h-20 sm:w-20">
        <Image src={workout.image} alt={workout.name} fill sizes="96px" className="object-cover" />
      </div>

      <div className="flex-1">
        <h3
          className={`font-display text-lg font-semibold uppercase sm:text-base ${
            workout.done ? "text-white/40 line-through" : ""
          }`}
        >
          {workout.name}
        </h3>
        <p className="text-sm text-white/50">{workout.equipment}</p>
        <div className="mt-2 flex items-center gap-4 text-sm text-white/60 sm:text-xs">
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

      <div className="flex flex-wrap items-center gap-2">
        <Link
          href={`/workout/${workout.id}`}
          className="rounded-2xl border border-white/80 px-3 py-2 text-sm font-semibold text-white hover:bg-white/10 sm:py-1.5 sm:text-xs"
        >
          View Details
        </Link>
        {onMarkDone && (
          <button
            onClick={onMarkDone}
            className="flex items-center gap-1.5 rounded-2xl bg-[var(--accent)] px-3 py-2 text-sm font-semibold text-black sm:py-1.5 sm:text-xs"
          >
            <Check size={14} />
            Mark as Done
          </button>
        )}
        <button
          onClick={onRemove}
          aria-label={`Remove ${workout.name}`}
          className="flex h-9 w-9 items-center justify-center rounded-2xl text-white/60 hover:bg-white/10 hover:text-red-400 sm:h-8 sm:w-8"
        >
          <X size={16} />
        </button>
      </div>
    </div>
  );
}
