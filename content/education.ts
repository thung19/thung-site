export type EducationItem = {
  school: string;
  degree: string;
  period: string;
  details?: string[]; // bullets like GPA, coursework, honors, etc.
};

export const education: EducationItem[] = [
  {
    school: "Vanderbilt University",
    degree: "B.S. Computer Science + Applied Mathematics",
    period: "2024 — 2028",
    details: [
      "Relevant coursework: Intermediate Software Design, Data Structures, Algorithms, Discrete Structures, Linear Algebra, Multivariable Calculus",
    ],
  },
];
