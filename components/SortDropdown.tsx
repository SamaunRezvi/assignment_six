"use client";

import { ChevronDown } from "lucide-react";
import { SortOption, sortOptions } from "@/lib/sort";

export default function SortDropdown({
  value,
  onChange,
}: {
  value: SortOption;
  onChange: (value: SortOption) => void;
}) {
  return (
    <label className="flex w-full max-w-sm flex-col gap-2">
      <span className="text-base text-white">Sort By</span>
      <div className="relative">
        <select
          value={value}
          onChange={(e) => onChange(e.target.value as SortOption)}
          className="h-12 w-full appearance-none rounded-2xl border border-white/20 bg-[#0f1115] pl-4 pr-9 text-base font-medium text-white outline-none focus:border-[var(--accent)]"
        >
          {sortOptions.map((opt) => (
            <option key={opt} value={opt} className="bg-[#0f1115]">
              {opt}
            </option>
          ))}
        </select>
        <ChevronDown
          size={16}
          className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-white/60"
        />
      </div>
    </label>
  );
}
