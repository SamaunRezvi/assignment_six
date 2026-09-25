import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto flex max-w-2xl flex-col items-center justify-center px-4 py-32 text-center">
      <p className="font-display text-7xl font-bold text-[var(--accent)]">
        404
      </p>
      <h1 className="mt-4 font-display text-2xl font-bold uppercase sm:text-3xl">
        Page Not Found
      </h1>
      <p className="mt-4 text-white/50">
        The page you&apos;re looking for doesn&apos;t exist or has been moved.
      </p>
      <Link
        href="/"
        className="mt-8 rounded-full bg-[var(--accent)] px-6 py-3 text-sm font-bold uppercase tracking-wide text-black transition-transform hover:scale-105"
      >
        Back to Home
      </Link>
    </div>
  );
}
