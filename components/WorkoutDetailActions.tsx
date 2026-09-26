"use client";

import { Plus, Bookmark } from "lucide-react";
import { usePlan } from "@/context/PlanContext";
import { Workout } from "@/types/workout";

export default function WorkoutDetailActions({
  workout,
}: {
  workout: Workout;
}) {
  const { addToPlan, addToSaved, isInPlan, isPlanFull } = usePlan();
  const planFull = isPlanFull && !isInPlan(workout.id);

  return (
    <div className="mt-8 flex flex-wrap gap-4">
      <button
        onClick={() => addToPlan(workout)}
        disabled={planFull}
        className="flex items-center gap-2 rounded-full bg-[var(--accent)] px-5 py-2.5 text-sm font-semibold text-black transition-transform hover:scale-105 disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:scale-100"
      >
        <Plus size={16} />
        Add to today&apos;s plan
      </button>
      <button
        onClick={() => addToSaved(workout)}
        className="flex items-center gap-2 rounded-full border border-white/30 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:border-white"
      >
        <Bookmark size={16} />
        Save for later
      </button>
    </div>
  );
}
