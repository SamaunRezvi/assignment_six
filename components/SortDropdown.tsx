"use client";

import { ChevronDown } from "lucide-react";

export type SortOption = "Duration" | "Calories" | "Rating";

const options: SortOption[] = ["Duration", "Calories", "Rating"];

export default function SortDropdown({
  value,
  onChange,
}: {
  value: SortOption;
  onChange: (value: SortOption) => void;
}) {
  return (
    <div className="relative inline-block">
      <select
        value={value}
        onChange={(e) => onChange(e.target.value as SortOption)}
        className="appearance-none rounded-full border border-white/20 bg-white/5 py-2 pl-4 pr-9 text-sm font-medium text-white outline-none focus:border-[var(--accent)]"
      >
        {options.map((opt) => (
          <option key={opt} value={opt} className="bg-[#0b0b0c]">
            Sort By: {opt}
          </option>
        ))}
      </select>
      <ChevronDown
        size={16}
        className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-white/60"
      />
    </div>
  );
}
