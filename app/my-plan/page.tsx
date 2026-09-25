"use client";

import { useState } from "react";
import { usePlan } from "@/context/PlanContext";
import PlanMetrics from "@/components/PlanMetrics";
import PlanWorkoutCard from "@/components/PlanWorkoutCard";
import EmptyPlanState from "@/components/EmptyPlanState";

type Tab = "today" | "saved";

export default function MyPlanPage() {
  const { plan, saved, removeFromPlan, removeFromSaved, toggleDone, loaded } =
    usePlan();
  const [tab, setTab] = useState<Tab>("today");

  const activeList = tab === "today" ? plan : saved;

  const exercises = plan.length;
  const minutes = plan.reduce((sum, w) => sum + w.duration, 0);
  const calories = plan.reduce((sum, w) => sum + w.caloriesBurned, 0);

  return (
    <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8">
      <h1 className="font-display text-3xl font-bold uppercase sm:text-4xl">
        My Plan
      </h1>
      <p className="mt-2 text-white/50">
        Cap of five lifts for today. Finish them, then load more.
      </p>

      <div className="mt-8">
        <PlanMetrics exercises={exercises} minutes={minutes} calories={calories} />
      </div>

      <div className="mt-10 flex gap-2 border-b border-white/10">
        <TabButton active={tab === "today"} onClick={() => setTab("today")}>
          Today&apos;s Plan
        </TabButton>
        <TabButton active={tab === "saved"} onClick={() => setTab("saved")}>
          Saved
        </TabButton>
      </div>

      <div className="mt-8 space-y-4">
        {!loaded ? (
          <p className="py-10 text-center text-white/50">Loading workouts…</p>
        ) : activeList.length === 0 ? (
          <EmptyPlanState />
        ) : (
          activeList.map((workout) => (
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
      className={`border-b-2 px-4 py-3 text-sm font-semibold uppercase tracking-wide transition-colors ${
        active
          ? "border-[var(--accent)] text-white"
          : "border-transparent text-white/40 hover:text-white/70"
      }`}
    >
      {children}
    </button>
  );
}
