export type ProjectLink = {
  label: string;
  href: string;
};

export type Project = {
  slug: string;          // stable id for URLs later, e.g. "smartnote"
  title: string;         // display name
  description: string;   // 1–2 sentence summary
  stack: string[];       // short tech list
  links?: ProjectLink[]; // GitHub, demo, paper, etc.
  featured?: boolean;    // optional: used for home page later
};

export const projects: Project[] = [
  {
    slug: "smartnote",
    title: "SmartNote Summarizer (Local RAG)",
    description:
      "Local note indexing + retrieval with a clean pipeline (chunking, embeddings, search, summarization).",
    stack: ["Python", "FastAPI", "Local embeddings"],
    links: [
      { label: "GitHub", href: "https://github.com/your-username/your-repo" },
    ],
    featured: true,
  },
  {
    slug: "portfolio",
    title: "Personal Portfolio Website",
    description:
      "A minimal, content-first site for projects, experience, and writing.",
    stack: ["Next.js", "TypeScript", "Tailwind"],
    featured: true,
  },
];
