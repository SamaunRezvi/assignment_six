import { Workout } from "@/types/workout";

const API_BASE = "https://api.abcz.workers.dev/api/fitlog";
const MAX_RETRIES = 2;
const RETRY_DELAY_MS = 500;

function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function fetchWithRetry(url: string): Promise<Response> {
  let lastResponse: Response | null = null;

  for (let attempt = 0; attempt <= MAX_RETRIES; attempt++) {
    const res = await fetch(url, { cache: "no-store" });
    if (res.ok) return res;

    lastResponse = res;
    // Retry on rate limiting or transient server errors, not on 404s.
    const isRetryable = res.status === 429 || res.status >= 500;
    if (!isRetryable || attempt === MAX_RETRIES) break;

    await sleep(RETRY_DELAY_MS * (attempt + 1));
  }

  return lastResponse as Response;
}

export async function getWorkouts(): Promise<Workout[]> {
  const res = await fetchWithRetry(API_BASE);
  if (!res.ok) {
    throw new Error(
      `Failed to fetch workouts (status ${res.status}: ${res.statusText})`
    );
  }
  return res.json();
}

export async function getWorkoutById(id: string): Promise<Workout | null> {
  const res = await fetchWithRetry(`${API_BASE}/${id}`);
  if (res.status === 404) {
    return null;
  }
  if (!res.ok) {
    throw new Error(
      `Failed to fetch workout ${id} (status ${res.status}: ${res.statusText})`
    );
  }
  return res.json();
}
