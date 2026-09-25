"use client";

import { Plus, Bookmark } from "lucide-react";
import { usePlan } from "@/context/PlanContext";
import { Workout } from "@/types/workout";

export default function WorkoutDetailActions({
  workout,
}: {
  workout: Workout;
}) {
  const { addToPlan, addToSaved } = usePlan();

  return (
    <div className="mt-8 flex flex-wrap gap-4">
      <button
        onClick={() => addToPlan(workout)}
        className="flex items-center gap-2 rounded-full bg-[var(--accent)] px-6 py-3 text-sm font-bold uppercase tracking-wide text-black transition-transform hover:scale-105"
      >
        <Plus size={18} />
        Add to today&apos;s plan
      </button>
      <button
        onClick={() => addToSaved(workout)}
        className="flex items-center gap-2 rounded-full border border-white/30 px-6 py-3 text-sm font-bold uppercase tracking-wide text-white transition-colors hover:border-white"
      >
        <Bookmark size={18} />
        Save for later
      </button>
    </div>
  );
}
