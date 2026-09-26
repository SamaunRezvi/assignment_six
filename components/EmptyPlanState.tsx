import Link from "next/link";

export default function EmptyPlanState() {
  return (
    <div className="flex flex-col items-center justify-center gap-4 rounded-3xl border border-white/10 bg-[#1a1d23] px-5 py-24 text-center">
      <h3 className="font-display text-2xl font-bold uppercase tracking-wide">
        Nothing Here Yet
      </h3>
      <p className="max-w-sm text-base text-white/50">
        Browse the library and add a lift to get today moving.
      </p>
      <Link
        href="/"
        className="mt-3 rounded-full bg-[var(--accent)] px-7 py-4 text-base font-semibold text-black transition-transform hover:scale-105"
      >
        Go to workouts
      </Link>
    </div>
  );
}
