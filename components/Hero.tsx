import Image from "next/image";
import { ArrowDown } from "lucide-react";

export default function Hero() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-10 sm:px-6 lg:py-12">
      <div className="grid grid-cols-1 items-center gap-12 rounded-3xl border border-white/10 bg-[#1a1d23] p-9 lg:grid-cols-2 lg:p-14">
        <div className="min-w-0">
          <p className="text-base font-semibold uppercase tracking-[0.3em] text-[var(--accent)]">
            Workout Library
          </p>
          <h1 className="mt-5 font-display text-4xl font-bold uppercase leading-tight sm:text-6xl lg:text-7xl">
            Train with intent. Log every set.
          </h1>
          <p className="mt-7 max-w-xl text-lg leading-8 text-white/60">
            FitLog is a dark, no-nonsense gym companion: pick a lift, lock it
            into today&apos;s plan, and watch the week&apos;s work add up.
          </p>
          <a
            href="#library"
            className="mt-9 inline-flex items-center gap-2 rounded-full bg-[var(--accent)] px-8 py-4 text-lg font-semibold text-black transition-transform hover:scale-105"
          >
            Browse Workouts
            <ArrowDown size={18} />
          </a>
        </div>
        <div className="relative h-72 w-full sm:h-96 lg:h-[28rem]">
          <Image
            src="/banner.png"
            alt="FitLog workout banner"
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-contain"
            priority
          />
        </div>
      </div>
    </section>
  );
}
