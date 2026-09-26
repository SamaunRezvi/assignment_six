import { notFound } from "next/navigation";
import Image from "next/image";
import { getWorkoutById } from "@/lib/api";
import WorkoutDetailActions from "@/components/WorkoutDetailActions";

export default async function WorkoutDetailPage({
  params,
}: PageProps<"/workout/[id]">) {
  const { id } = await params;
  const workout = await getWorkoutById(id);

  if (!workout) {
    notFound();
  }

  const specs = [
    { label: "Equipment", value: workout.equipment },
    { label: "Difficulty", value: workout.difficulty },
    { label: "Sets", value: String(workout.sets) },
    { label: "Reps", value: workout.reps },
    { label: "Duration", value: `${workout.duration} min` },
    { label: "Calories", value: `${workout.caloriesBurned} kcal` },
    { label: "Rating", value: String(workout.rating) },
  ];

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
        <div className="relative h-72 w-full overflow-hidden rounded-3xl border border-white/10 sm:h-96 lg:h-full lg:min-h-[480px]">
          <Image
            src={workout.image}
            alt={workout.name}
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover"
            priority
          />
        </div>

        <div>
          <h1 className="font-display text-3xl font-bold uppercase sm:text-4xl">
            {workout.name}
          </h1>
          <p className="mt-4 text-white/60">{workout.description}</p>

          <div className="mt-4 flex flex-wrap gap-2">
            {workout.muscleGroups.map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-[var(--accent)] px-3 py-1 text-xs font-semibold text-black"
              >
                {tag}
              </span>
            ))}
          </div>

          <dl className="mt-8 overflow-hidden rounded-2xl border border-white/10 bg-[#14161b]">
            {specs.map((spec) => (
              <div
                key={spec.label}
                className="flex items-center justify-between border-b border-white/10 px-6 py-3 last:border-b-0"
              >
                <dt className="text-xs font-bold uppercase tracking-wide text-white/50">
                  {spec.label}
                </dt>
                <dd className="font-medium text-white">{spec.value}</dd>
              </div>
            ))}
          </dl>

          <div className="mt-8">
            <h2 className="font-display text-xl font-bold uppercase text-[var(--accent)]">
              Instructions
            </h2>
            <ol className="mt-4 space-y-2">
              {workout.instructions.map((step, index) => (
                <li key={index} className="text-white/70">
                  {index + 1}. {step}
                </li>
              ))}
            </ol>
          </div>

          <WorkoutDetailActions workout={workout} />
        </div>
      </div>
    </div>
  );
}
