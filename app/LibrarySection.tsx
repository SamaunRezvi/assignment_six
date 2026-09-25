import { getWorkouts } from "@/lib/api";
import Library from "@/components/Library";

export default async function LibrarySection() {
  const workouts = await getWorkouts();
  return <Library workouts={workouts} />;
}
