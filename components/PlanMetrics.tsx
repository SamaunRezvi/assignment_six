interface PlanMetricsProps {
  exercises: number;
  minutes: number;
  calories: number;
}

export default function PlanMetrics({
  exercises,
  minutes,
  calories,
}: PlanMetricsProps) {
  const stats = [
    { label: "Exercises", value: exercises, accent: true },
    { label: "Minutes", value: minutes, accent: false },
    { label: "Calories", value: calories, accent: false },
  ];

  return (
    <div className="grid grid-cols-3 gap-3 sm:gap-4">
      {stats.map((stat) => (
        <div
          key={stat.label}
          className="rounded-2xl border border-white/10 bg-[#1a1d23] p-4 sm:p-6"
        >
          <p className="text-sm text-white/50">{stat.label}</p>
          <p
            className={`mt-1 font-display text-3xl font-bold sm:text-4xl ${
              stat.accent ? "text-[var(--accent)]" : "text-white"
            }`}
          >
            {stat.value}
          </p>
        </div>
      ))}
    </div>
  );
}
