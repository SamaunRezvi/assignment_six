import Link from "next/link";
import { Dumbbell } from "lucide-react";

export default function NotFound() {
  return (
    <div className="mx-auto flex max-w-2xl flex-col items-center justify-center px-4 py-24 text-center">
      <div className="flex h-40 w-40 items-center justify-center rounded-3xl border border-white/10 bg-[#1a1d23]">
        <Dumbbell size={56} className="text-[var(--accent)]" strokeWidth={1.5} />
      </div>
      <h1 className="mt-8 font-display text-2xl font-bold uppercase sm:text-3xl">
        404: Page Not Found
      </h1>
      <p className="mt-4 text-white/50">
        The page you were looking for isn&apos;t in the library. Head back to
        the floor and pick a workout that exists.
      </p>
      <Link
        href="/"
        className="mt-8 rounded-full bg-[var(--accent)] px-6 py-3 text-sm font-semibold text-black transition-transform hover:scale-105"
      >
        Back to workouts
      </Link>
    </div>
  );
}
