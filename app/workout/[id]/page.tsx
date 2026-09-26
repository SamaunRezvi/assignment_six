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
    <div className="mx-auto max-w-7xl px-5 py-10 sm:px-6 lg:py-12">
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
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
          <h1 className="font-display text-4xl font-bold uppercase sm:text-5xl">
            {workout.name}
          </h1>
          <p className="mt-5 text-lg leading-8 text-white/60">{workout.description}</p>

          <div className="mt-4 flex flex-wrap gap-2">
            {workout.muscleGroups.map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-[var(--accent)] px-4 py-2 text-base font-semibold text-black"
              >
                {tag}
              </span>
            ))}
          </div>

          <dl className="mt-8 overflow-hidden rounded-2xl border border-white/10 bg-[#1a1d23]">
            {specs.map((spec) => (
              <div
                key={spec.label}
                className="flex items-center justify-between border-b border-white/10 px-7 py-4 last:border-b-0"
              >
                <dt className="text-base font-bold uppercase tracking-wide text-white/50">
                  {spec.label}
                </dt>
                <dd className="font-medium text-white">{spec.value}</dd>
              </div>
            ))}
          </dl>

          <div className="mt-8">
            <h2 className="font-display text-2xl font-bold uppercase text-[var(--accent)]">
              Instructions
            </h2>
            <ol className="mt-5 space-y-3">
              {workout.instructions.map((step, index) => (
                <li key={index} className="text-base leading-7 text-white/70">
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
