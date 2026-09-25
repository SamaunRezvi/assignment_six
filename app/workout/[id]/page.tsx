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

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
        <div className="relative h-72 w-full overflow-hidden rounded-3xl sm:h-96 lg:h-full lg:min-h-[480px]">
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
                className="rounded-full bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-white/70"
              >
                {tag}
              </span>
            ))}
          </div>

          <dl className="mt-8 grid grid-cols-2 gap-4 rounded-2xl border border-white/10 bg-white/5 p-6 sm:grid-cols-3">
            <Spec label="Equipment" value={workout.equipment} />
            <Spec label="Difficulty" value={workout.difficulty} />
            <Spec label="Sets" value={String(workout.sets)} />
            <Spec label="Reps" value={workout.reps} />
            <Spec label="Duration" value={`${workout.duration} min`} />
            <Spec label="Calories" value={`${workout.caloriesBurned} kcal`} />
            <Spec label="Rating" value={String(workout.rating)} />
          </dl>

          <div className="mt-8">
            <h2 className="font-display text-xl font-bold uppercase">
              Instructions
            </h2>
            <ol className="mt-4 space-y-3">
              {workout.instructions.map((step, index) => (
                <li key={index} className="flex gap-3 text-white/70">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[var(--accent)] text-xs font-bold text-black">
                    {index + 1}
                  </span>
                  {step}
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

function Spec({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <dt className="text-xs font-semibold uppercase tracking-wide text-white/40">
        {label}
      </dt>
      <dd className="mt-1 font-medium text-white">{value}</dd>
    </div>
  );
}
