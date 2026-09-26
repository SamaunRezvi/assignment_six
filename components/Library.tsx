"use client";

import { useMemo, useState } from "react";
import { Workout } from "@/types/workout";
import { SortOption, sortWorkouts } from "@/lib/sort";
import WorkoutCard from "./WorkoutCard";
import SortDropdown from "./SortDropdown";

export default function Library({ workouts }: { workouts: Workout[] }) {
  const [sortBy, setSortBy] = useState<SortOption>("Duration");

  const sorted = useMemo(
    () => sortWorkouts(workouts, sortBy),
    [workouts, sortBy]
  );

  return (
    <section id="library" className="mx-auto max-w-6xl px-4 py-8">
      <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
        <div>
          <h2 className="font-display text-3xl font-bold uppercase sm:text-4xl">
            The Library
          </h2>
          <p className="mt-2 text-white/50">
            Twelve lifts covering every major muscle group.
          </p>
        </div>
        <div className="w-full sm:w-auto">
          <SortDropdown value={sortBy} onChange={setSortBy} />
        </div>
      </div>

      <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {sorted.map((workout) => (
          <WorkoutCard key={workout.id} workout={workout} />
        ))}
      </div>
    </section>
  );
}
