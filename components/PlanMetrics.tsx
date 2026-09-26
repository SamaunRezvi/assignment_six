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
    <div className="grid grid-cols-1 gap-3 sm:grid-cols-3 sm:gap-4">
      {stats.map((stat) => (
        <div
          key={stat.label}
          className="rounded-3xl border border-white/10 bg-[#1a1d23] p-6 sm:p-7"
        >
          <p className="text-base text-white/50">{stat.label}</p>
          <p
            className={`mt-2 font-display text-4xl font-bold sm:text-5xl ${
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
