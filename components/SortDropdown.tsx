"use client";

import { useEffect, useRef, useState } from "react";
import { ChevronDown } from "lucide-react";
import { SortOption, sortOptions } from "@/lib/sort";

export default function SortDropdown({
  value,
  onChange,
}: {
  value: SortOption;
  onChange: (value: SortOption) => void;
}) {
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function closeOnOutsideClick(event: MouseEvent) {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    }

    function closeOnEscape(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpen(false);
      }
    }

    document.addEventListener("mousedown", closeOnOutsideClick);
    document.addEventListener("keydown", closeOnEscape);

    return () => {
      document.removeEventListener("mousedown", closeOnOutsideClick);
      document.removeEventListener("keydown", closeOnEscape);
    };
  }, []);

  return (
    <label className="flex w-full max-w-full flex-col gap-2 sm:max-w-sm">
      <span className="text-sm text-white sm:text-base">Sort By</span>
      <div ref={containerRef} className="relative w-full">
        <button
          type="button"
          aria-haspopup="listbox"
          aria-expanded={open}
          onClick={() => setOpen((current) => !current)}
          className="flex h-11 w-full min-w-0 items-center justify-between rounded-2xl border border-white/20 bg-[#0f1115] px-3 text-left text-sm font-medium text-white outline-none focus:border-[var(--accent)] sm:h-12 sm:px-4 sm:text-base"
        >
          {value}
          <ChevronDown
            size={16}
            className={`shrink-0 text-white/60 transition-transform ${
              open ? "rotate-180" : ""
            }`}
          />
        </button>

        {open && (
          <div
            role="listbox"
            aria-label="Sort workouts"
            className="absolute left-0 right-0 top-[calc(100%+6px)] z-30 overflow-hidden rounded-2xl border border-white/20 bg-[#0f1115] p-1 shadow-2xl"
          >
            {sortOptions.map((option) => (
              <button
                key={option}
                type="button"
                role="option"
                aria-selected={value === option}
                onClick={() => {
                  onChange(option);
                  setOpen(false);
                }}
                className={`flex w-full items-center rounded-xl px-3 py-2.5 text-left text-sm transition-colors sm:px-4 sm:py-3 sm:text-base ${
                  value === option
                    ? "bg-[var(--accent)] text-black"
                    : "text-white hover:bg-white/10"
                }`}
              >
                {option}
              </button>
            ))}
          </div>
        )}
      </div>
    </label>
  );
}
