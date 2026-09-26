import Image from "next/image";

export default function Hero() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-8">
      <div className="grid grid-cols-1 items-center gap-10 rounded-2xl border border-white/10 bg-[#1a1d23] p-8 lg:grid-cols-2 lg:p-12">
        <div className="min-w-0">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--accent)]">
            Workout Library
          </p>
          <h1 className="mt-4 font-display text-3xl font-bold uppercase leading-tight sm:text-5xl lg:text-6xl">
            Train with intent. Log every set.
          </h1>
          <p className="mt-6 max-w-md text-base text-white/60">
            FitLog is a dark, no-nonsense gym companion: pick a lift, lock it
            into today&apos;s plan, and watch the week&apos;s work add up.
          </p>
          <a
            href="#library"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-[var(--accent)] px-6 py-3 text-sm font-semibold text-black transition-transform hover:scale-105"
          >
            Browse Workouts
          </a>
        </div>
        <div className="relative h-64 w-full sm:h-80 lg:h-96">
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
