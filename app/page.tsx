import { Suspense } from "react";
import Hero from "@/components/Hero";
import LibrarySection from "./LibrarySection";
import LibrarySkeleton from "@/components/LibrarySkeleton";

export default function Home() {
  return (
    <>
      <Hero />
      <Suspense fallback={<LibrarySkeleton />}>
        <LibrarySection />
      </Suspense>
    </>
  );
}
