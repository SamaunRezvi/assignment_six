"use client";

import { useMemo, useState } from "react";
import { usePlan } from "@/context/PlanContext";
import PlanMetrics from "@/components/PlanMetrics";
import PlanWorkoutCard from "@/components/PlanWorkoutCard";
import EmptyPlanState from "@/components/EmptyPlanState";
import SortDropdown, { SortOption } from "@/components/SortDropdown";
import { Workout } from "@/types/workout";

type Tab = "today" | "saved";

const sortKeyMap: Record<SortOption, keyof Workout> = {
  Duration: "duration",
  Calories: "caloriesBurned",
  Rating: "rating",
};

export default function MyPlanPage() {
  const { plan, saved, removeFromPlan, removeFromSaved, toggleDone, loaded } =
    usePlan();
  const [tab, setTab] = useState<Tab>("today");
  const [sortBy, setSortBy] = useState<SortOption>("Duration");

  const activeList = tab === "today" ? plan : saved;
  const sortedList = useMemo(() => {
    const key = sortKeyMap[sortBy];
    return [...activeList].sort((a, b) => Number(a[key]) - Number(b[key]));
  }, [activeList, sortBy]);

  const exercises = plan.length;
  const minutes = plan.reduce((sum, w) => sum + w.duration, 0);
  const calories = plan.reduce((sum, w) => sum + w.caloriesBurned, 0);

  return (
    <div className="mx-auto max-w-6xl px-4 py-8">
      <h1 className="font-display text-4xl font-bold uppercase">My Plan</h1>
      <p className="mt-2 text-white/50">
        Cap of five lifts for today. Finish them, then load more.
      </p>

      <div className="mt-8">
        <PlanMetrics exercises={exercises} minutes={minutes} calories={calories} />
      </div>

      <div className="mt-8 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
        <div className="flex gap-1 rounded-2xl border border-white/10 bg-[#1a1d23] p-1">
          <TabButton active={tab === "today"} onClick={() => setTab("today")}>
            Today&apos;s Plan
          </TabButton>
          <TabButton active={tab === "saved"} onClick={() => setTab("saved")}>
            Saved
          </TabButton>
        </div>
        <div className="w-full sm:w-auto">
          <SortDropdown value={sortBy} onChange={setSortBy} />
        </div>
      </div>

      <div className="mt-8 space-y-4">
        {!loaded ? (
          <p className="py-10 text-center text-white/50">Loading workouts…</p>
        ) : sortedList.length === 0 ? (
          <EmptyPlanState />
        ) : (
          sortedList.map((workout) => (
            <PlanWorkoutCard
              key={workout.id}
              workout={workout}
              onRemove={() =>
                tab === "today"
                  ? removeFromPlan(workout.id)
                  : removeFromSaved(workout.id)
              }
              onMarkDone={
                tab === "today" ? () => toggleDone(workout.id) : undefined
              }
            />
          ))
        )}
      </div>
    </div>
  );
}

function TabButton({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      onClick={onClick}
      className={`rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
        active
          ? "bg-white/10 text-[var(--accent)]"
          : "text-white/50 hover:text-white/80"
      }`}
    >
      {children}
    </button>
  );
}
