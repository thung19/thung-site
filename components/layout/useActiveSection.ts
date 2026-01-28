"use client";

import { useEffect, useState } from "react";

export type SectionId = "intro" | "education" | "experience" | "projects";

export default function useActiveSection(sectionIds: SectionId[]) {
  const [active, setActive] = useState<SectionId>(sectionIds[0] ?? "intro");

  useEffect(() => {
    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];

    if (elements.length === 0) return;

    // Keep track of how visible each section is
    const ratios = new Map<string, number>();
    sectionIds.forEach((id) => ratios.set(id, 0));

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          ratios.set(entry.target.id, entry.isIntersecting ? entry.intersectionRatio : 0);
        }

        // Pick the section with the highest visibility ratio
        let bestId = active as string;
        let bestRatio = -1;

        for (const id of sectionIds) {
          const r = ratios.get(id) ?? 0;
          if (r > bestRatio) {
            bestRatio = r;
            bestId = id;
          }
        }

        // Only update if it actually changed
        if (bestId && bestId !== active) {
          setActive(bestId as SectionId);
        }
      },
      {
        root: null,
        // More "stable" than a single threshold
        threshold: [0, 0.15, 0.3, 0.45, 0.6, 0.75],
        // Make "active" track the section near the top half of the screen
        rootMargin: "-15% 0px -55% 0px",
      }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sectionIds.join("|"), active]);

  return active;
}
