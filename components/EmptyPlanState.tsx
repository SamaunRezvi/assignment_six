import Link from "next/link";
import { Dumbbell } from "lucide-react";

export default function EmptyPlanState() {
  return (
    <div className="flex flex-col items-center justify-center gap-4 rounded-2xl border border-dashed border-white/15 py-20 text-center">
      <Dumbbell size={40} className="text-white/30" />
      <h3 className="font-display text-xl font-bold uppercase">
        Nothing Here Yet
      </h3>
      <p className="max-w-sm text-white/50">
        Browse the library and add a lift to get today moving.
      </p>
      <Link
        href="/"
        className="mt-2 rounded-full bg-[var(--accent)] px-6 py-3 text-sm font-bold uppercase tracking-wide text-black transition-transform hover:scale-105"
      >
        Go to workouts
      </Link>
    </div>
  );
}
