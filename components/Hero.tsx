import Image from "next/image";
import { ArrowDown } from "lucide-react";

export default function Hero() {
  return (
    <section className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:px-8 lg:py-24">
      <div>
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[var(--accent)]">
          Workout Library
        </p>
        <h1 className="mt-4 font-display text-4xl font-bold uppercase leading-tight sm:text-5xl lg:text-6xl">
          Train with intent. Log every set.
        </h1>
        <p className="mt-6 max-w-md text-base text-white/60">
          FitLog is a dark, no-nonsense gym companion: pick a lift, lock it
          into today&apos;s plan, and watch the week&apos;s work add up.
        </p>
        <a
          href="#library"
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-[var(--accent)] px-6 py-3 text-sm font-bold uppercase tracking-wide text-black transition-transform hover:scale-105"
        >
          Browse Workouts
          <ArrowDown size={18} />
        </a>
      </div>
      <div className="relative flex h-72 w-full items-center justify-center overflow-hidden rounded-3xl border border-white/10 bg-white/5 sm:h-96 lg:h-[420px]">
        <div className="absolute h-56 w-56 rounded-full bg-[var(--accent)]/10 blur-3xl sm:h-72 sm:w-72" />
        <Image
          src="/banner.png"
          alt="FitLog workout banner"
          fill
          className="object-contain p-10"
          priority
        />
      </div>
    </section>
  );
}
