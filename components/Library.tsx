"use client";

import { useMemo, useState } from "react";
import { Workout } from "@/types/workout";
import WorkoutCard from "./WorkoutCard";
import SortDropdown, { SortOption } from "./SortDropdown";

const sortKeyMap: Record<SortOption, keyof Workout> = {
  Duration: "duration",
  Calories: "caloriesBurned",
  Rating: "rating",
};

export default function Library({ workouts }: { workouts: Workout[] }) {
  const [sortBy, setSortBy] = useState<SortOption>("Duration");

  const sorted = useMemo(() => {
    const key = sortKeyMap[sortBy];
    return [...workouts].sort((a, b) => Number(a[key]) - Number(b[key]));
  }, [workouts, sortBy]);

  return (
    <section id="library" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
        <div>
          <h2 className="font-display text-3xl font-bold uppercase sm:text-4xl">
            The Library
          </h2>
          <p className="mt-2 text-white/50">
            Twelve lifts covering every major muscle group.
          </p>
        </div>
        <SortDropdown value={sortBy} onChange={setSortBy} />
      </div>

      <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {sorted.map((workout) => (
          <WorkoutCard key={workout.id} workout={workout} />
        ))}
      </div>
    </section>
  );
}
