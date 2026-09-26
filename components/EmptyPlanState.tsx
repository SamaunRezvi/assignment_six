import Link from "next/link";

export default function EmptyPlanState() {
  return (
    <div className="flex flex-col items-center justify-center gap-3 rounded-2xl border border-white/10 bg-[#1a1d23] py-20 text-center">
      <h3 className="font-display text-lg font-bold uppercase tracking-wide">
        Nothing Here Yet
      </h3>
      <p className="max-w-sm text-white/50">
        Browse the library and add a lift to get today moving.
      </p>
      <Link
        href="/"
        className="mt-2 rounded-full bg-[var(--accent)] px-6 py-3 text-sm font-semibold text-black transition-transform hover:scale-105"
      >
        Go to workouts
      </Link>
    </div>
  );
}
