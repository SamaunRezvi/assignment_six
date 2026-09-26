export default function LibrarySkeleton() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-12 sm:px-6">
      <div className="flex items-center justify-center py-20">
        <div className="flex flex-col items-center gap-4">
          <div className="h-10 w-10 animate-spin rounded-full border-4 border-white/20 border-t-[var(--accent)]" />
          <p className="text-base uppercase tracking-wide text-white/50">
            Loading workouts…
          </p>
        </div>
      </div>
    </section>
  );
}
