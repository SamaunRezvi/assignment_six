"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";
import toast from "react-hot-toast";
import { Workout } from "@/types/workout";

interface PlanItem extends Workout {
  done?: boolean;
}

interface PlanContextValue {
  plan: PlanItem[];
  saved: PlanItem[];
  addToPlan: (workout: Workout) => void;
  addToSaved: (workout: Workout) => void;
  removeFromPlan: (id: number) => void;
  removeFromSaved: (id: number) => void;
  toggleDone: (id: number) => void;
  isInPlan: (id: number) => boolean;
  isInSaved: (id: number) => boolean;
  isPlanFull: boolean;
  loaded: boolean;
}

const PLAN_CAP = 5;

const PlanContext = createContext<PlanContextValue | undefined>(undefined);

const PLAN_KEY = "fitlog-plan";
const SAVED_KEY = "fitlog-saved";

function readStorage(key: string): PlanItem[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = localStorage.getItem(key);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

export function PlanProvider({ children }: { children: ReactNode }) {
  const [plan, setPlan] = useState<PlanItem[]>([]);
  const [saved, setSaved] = useState<PlanItem[]>([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect -- one-time hydration from localStorage after mount, required to avoid SSR/client mismatch
    setPlan(readStorage(PLAN_KEY));
    setSaved(readStorage(SAVED_KEY));
    setLoaded(true);
  }, []);

  useEffect(() => {
    if (loaded) localStorage.setItem(PLAN_KEY, JSON.stringify(plan));
  }, [plan, loaded]);

  useEffect(() => {
    if (loaded) localStorage.setItem(SAVED_KEY, JSON.stringify(saved));
  }, [saved, loaded]);

  const isInPlan = (id: number) => plan.some((w) => w.id === id);
  const isInSaved = (id: number) => saved.some((w) => w.id === id);

  const addToPlan = (workout: Workout) => {
    if (isInPlan(workout.id)) {
      toast("Already in today's plan");
      return;
    }
    if (plan.length >= PLAN_CAP) {
      toast.error("Today's plan is full (max 5 lifts)");
      return;
    }
    setPlan((prev) => [...prev, { ...workout, done: false }]);
    toast.success("Added to today's plan");
  };

  const addToSaved = (workout: Workout) => {
    if (isInSaved(workout.id)) {
      toast("Already saved");
      return;
    }
    setSaved((prev) => [...prev, workout]);
    toast.success("Saved for later");
  };

  const removeFromPlan = (id: number) => {
    setPlan((prev) => prev.filter((w) => w.id !== id));
    toast.success("Removed from today's plan");
  };

  const removeFromSaved = (id: number) => {
    setSaved((prev) => prev.filter((w) => w.id !== id));
    toast.success("Removed from saved");
  };

  const toggleDone = (id: number) => {
    setPlan((prev) =>
      prev.map((w) => (w.id === id ? { ...w, done: !w.done } : w))
    );
    toast.success("Marked as done");
  };

  return (
    <PlanContext.Provider
      value={{
        plan,
        saved,
        addToPlan,
        addToSaved,
        removeFromPlan,
        removeFromSaved,
        toggleDone,
        isInPlan,
        isInSaved,
        isPlanFull: plan.length >= PLAN_CAP,
        loaded,
      }}
    >
      {children}
    </PlanContext.Provider>
  );
}

export function usePlan() {
  const ctx = useContext(PlanContext);
  if (!ctx) throw new Error("usePlan must be used within PlanProvider");
  return ctx;
}
