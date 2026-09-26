"use client";

import { useEffect } from "react";
import { Dumbbell } from "lucide-react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="mx-auto flex max-w-2xl flex-col items-center justify-center px-4 py-24 text-center">
      <div className="flex h-40 w-40 items-center justify-center rounded-3xl border border-white/10 bg-[#1a1d23]">
        <Dumbbell size={56} className="text-[var(--accent)]" strokeWidth={1.5} />
      </div>
      <h1 className="mt-8 font-display text-2xl font-bold uppercase sm:text-3xl">
        Something Slipped
      </h1>
      <p className="mt-4 text-white/50">
        The workout data didn&apos;t come through this time. Give it another
        try in a moment.
      </p>
      <button
        onClick={reset}
        className="mt-8 rounded-full bg-[var(--accent)] px-6 py-3 text-sm font-semibold text-black transition-transform hover:scale-105"
      >
        Try again
      </button>
    </div>
  );
}
