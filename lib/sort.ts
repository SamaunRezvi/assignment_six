import { Workout } from "@/types/workout";

export type SortOption = "Duration" | "Calories" | "Rating";

export const sortOptions: SortOption[] = ["Duration", "Calories", "Rating"];

const sortKeyMap: Record<SortOption, keyof Workout> = {
  Duration: "duration",
  Calories: "caloriesBurned",
  Rating: "rating",
};

export function sortWorkouts<T extends Workout>(
  workouts: T[],
  sortBy: SortOption
): T[] {
  const key = sortKeyMap[sortBy];
  return [...workouts].sort((a, b) => Number(a[key]) - Number(b[key]));
}
