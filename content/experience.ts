export type ExperienceItem = {
  org: string;           // company / lab / org
  role: string;          // your title
  period: string;        // dates (keep as text for flexibility)
  bullets?: string[];   // resume-style bullet points
};

export const experience: ExperienceItem[] = [
  {
    org: "Seedr Investments",
    role: "Software Development Intern",
    period: "Aug. 2025 — Nov. 2025",

    bullets: [
      "Built an MVP using React and MongoDB, developing dynamic front-end components and integrating a scalable NoSQL database",
      "Communicated technical progress and blockers clearly during team stand-ups, accelerating decision-making and feature iteration",
      "Developed a Python-based news scraper that processes user search queries to automatically extract and summarize news headlines",
    ],
  },
  {
    org: "Atlantic Health System",
    role: "Emergency Management Intern",
    period: "Jun. 2025 — Aug. 2025",
    bullets: [
      "Designed a Python workflow to filter, summarize, and email daily emergency-management news digests to 5 team members",
      "Directed deployment of 30 medical devices across 6 hospitals, applying process design and cross-team coordination skills",
      "Partnered with 15 hospital administrators and 5 internal departments to enhance emergency preparedness and draft protocols"
    ],
  },
  {
    org: "Envision Healthcare",
    role: "Clinical Information Manager",
    period: "Jun. 2024 — Jan. 2025",
    bullets: [
      "Composed the complete history and physicals for 300+ hospital patients for billing, insurance, and research use",
      "Coordinated with 30+ physicians and nurses to facilitate efficient care delivery by collecting and interpreting health data",
      "Verified that provided healthcare complied with healthcare regulations, insurance requirements, and quality standards"
    ],
  },
  {
    org: "Camp Fish & Game",
    role: "Assistant Health Director",
    period: "Jun. 2023 — Aug. 2023",
    bullets: [
      "Maintained the health records of 300+ campers and staff including immunization records, allergies, and special health conditions",
      "Coordinated proper care and response of campers with 35 staff members and provided first aid to 40+ campers and staff",
      "Assisted in the implementation and enforcement of health and safety policies to ensure a safe environment for campers and staff"
    ],
  },
];
