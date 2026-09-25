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
    { label: "Exercises", value: exercises },
    { label: "Minutes", value: minutes },
    { label: "Calories", value: calories },
  ];

  return (
    <div className="grid grid-cols-3 gap-4">
      {stats.map((stat) => (
        <div
          key={stat.label}
          className="rounded-2xl border border-white/10 bg-white/5 p-4 text-center sm:p-6"
        >
          <p className="font-display text-2xl font-bold text-[var(--accent)] sm:text-4xl">
            {stat.value}
          </p>
          <p className="mt-1 text-xs uppercase tracking-wide text-white/50 sm:text-sm">
            {stat.label}
          </p>
        </div>
      ))}
    </div>
  );
}
