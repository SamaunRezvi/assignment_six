"use client";

import { useMemo, useState } from "react";
import { usePlan } from "@/context/PlanContext";
import PlanMetrics from "@/components/PlanMetrics";
import PlanWorkoutCard from "@/components/PlanWorkoutCard";
import EmptyPlanState from "@/components/EmptyPlanState";
import SortDropdown from "@/components/SortDropdown";
import { SortOption, sortWorkouts } from "@/lib/sort";

type Tab = "today" | "saved";

export default function MyPlanPage() {
  const { plan, saved, removeFromPlan, removeFromSaved, markDone, loaded } =
    usePlan();
  const [tab, setTab] = useState<Tab>("today");
  const [sortBy, setSortBy] = useState<SortOption>("Duration");

  const activeList = tab === "today" ? plan : saved;
  const sortedList = useMemo(
    () => sortWorkouts(activeList, sortBy),
    [activeList, sortBy]
  );

  const exercises = plan.length;
  const minutes = plan.reduce((sum, w) => sum + w.duration, 0);
  const calories = plan.reduce((sum, w) => sum + w.caloriesBurned, 0);

  return (
    <div className="mx-auto max-w-7xl px-5 py-10 sm:px-6 lg:py-12">
      <h1 className="font-display text-5xl font-bold uppercase">My Plan</h1>
      <p className="mt-3 text-lg text-white/50">
        Cap of five lifts for today. Finish them, then load more.
      </p>

      <div className="mt-10">
        <PlanMetrics exercises={exercises} minutes={minutes} calories={calories} />
      </div>

      <div className="mt-10 flex flex-col items-start justify-between gap-5 sm:flex-row sm:items-center">
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

      <div className="mt-10 space-y-5">
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
                tab === "today" ? () => markDone(workout.id) : undefined
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
      className={`rounded-full px-5 py-2.5 text-base font-semibold transition-colors ${
        active
          ? "bg-white/10 text-[var(--accent)]"
          : "text-white/50 hover:text-white/80"
      }`}
    >
      {children}
    </button>
  );
}
