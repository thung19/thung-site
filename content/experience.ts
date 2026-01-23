export type ExperienceItem = {
  org: string;           // company / lab / org
  role: string;          // your title
  period: string;        // dates (keep as text for flexibility)
  description?: string; // 1–2 sentence overview
  bullets?: string[];   // resume-style bullet points
};

export const experience: ExperienceItem[] = [
  {
    org: "Homo Sapien",
    role: "Human Being",
    period: "2024 — Present",
    description:
      "Focused on daily responsibilities related to being a human being.",
    bullets: [
      "Located and consumed food to maintain energy levels.",
      "Maintained personal hygiene and well-being.",
    ],
  },
  {
    org: "Vanderbilt University",
    role: "Student",
    period: "2023 — Present",
    description:
      "Performed academic and personal development activities.",
    bullets: [
      "Did various coursework and projects.",
      "Ate food",
    ],
  },
];
