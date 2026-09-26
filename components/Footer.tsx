import Image from "next/image";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#1a1d23]">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-center gap-3 px-4 py-6 text-center sm:flex-row sm:justify-between sm:gap-5 sm:px-6 sm:py-8 sm:text-left">
        <div className="flex items-center justify-center gap-2">
          <Image src="/logo.png" alt="FitLog logo" width={24} height={24} />
          <span className="font-display text-base font-semibold tracking-wide">
            FITLOG
          </span>
        </div>
        <p className="max-w-xs text-sm leading-6 text-white/50 sm:max-w-none">
          © 2026 FitLog. Workout Library. Train hard, log honest.
        </p>
      </div>
    </footer>
  );
}
