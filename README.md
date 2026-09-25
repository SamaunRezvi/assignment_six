# 💪 FitLog — Workout Library

FitLog is a dark, no-nonsense gym companion built with Next.js. Browse a library of twelve lifts, dive into detailed instructions and stats for each workout, then build out today's training plan or save lifts for later — all tracked live in the navbar and persisted across reloads.

## Description

FitLog lets you pick a lift, lock it into today's plan, and watch the week's work add up. The home page showcases the full workout library pulled from a live API, each workout has a dedicated detail page with step-by-step instructions and key specs, and the My Plan page tracks your daily session with live metrics (exercises, minutes, calories), a cap of five lifts per day, and separate tabs for Today's Plan and Saved workouts.

## Technologies Used

- **Next.js** (App Router) — routing, server components, and data fetching
- **React** — UI and client-side state
- **Tailwind CSS** — styling and responsive layout
- **lucide-react** — icon set
- **react-hot-toast** — toast notifications
- **localStorage** — persisting the plan and saved lists across reloads

## Features

1. **Responsive workout library** — all workouts fetched live from the FitLog API and displayed in a 3×4 card grid on desktop, collapsing gracefully on tablet and mobile.
2. **Sort by duration, calories, or rating** — a "Sort By" dropdown re-orders the library instantly.
3. **Detailed workout pages** — each lift has its own page with a hero image, key specs (equipment, difficulty, sets, reps, duration, calories, rating), and numbered instructions.
4. **Live plan & saved tracking** — adding or saving a workout updates the navbar badges instantly, shows a toast, and persists to `localStorage` so your plan survives a page reload.
5. **My Plan dashboard** — live metrics (exercises, minutes, calories), tabbed Today's Plan / Saved views, mark-as-done and remove actions, and an empty state guiding you back to the library.
6. **Plan cap enforcement** — Today's Plan is capped at five lifts; the "Add to today's plan" button disables itself once the cap is reached.
7. **Custom 404 page** — any unknown route, or an invalid workout id, lands on a branded not-found page.

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Submission

- Live Link:
- GitHub Repository Link: https://github.com/SamaunRezvi/assignment_six
