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
  video?: string;        // local path ("/videos/demo.mp4") or YouTube URL
  screenshot?: string;   // local path ("/images/project-slug.png") or external URL
};

export const projects: Project[] = [
  {
    slug: "onetap",
    title: "OneTap — Vandy Hacks",
    description:
      "Chrome extension that optimizes credit card rewards at checkout. Won Best Startup + Best use of MongoDB Atlas (35+ teams).",
    stack: ["React", "MongoDB", "Vercel", "Render", "Gemini API"],
    links: [
      { label: "GitHub", href: "https://github.com/ashwinpatri/OneTap/blob/main/README.md" },
    ],
    featured: true,
    video: "https://www.youtube.com/embed/2tqr90ty_Gc",
  },
  {
    slug: "smartnote",
    title: "SmartNote",
    description:
      "Full-Stack in-memory RAG engine with chunking and vector search for semantic note retrieval.",
    stack: ["Python", "SentenceTransformers", "Next.js", "TypeScript", "Vercel", "Google Cloud"],
    links: [
      { label: "GitHub", href: "https://github.com/thung19/SmartNote" },
    ],
    featured: true,
    screenshot: "/images/smart-note.png",
  },
  {
    slug: "portfolio",
    title: "Personal Portfolio Website",
    description:
      "A minimal, content-first site for projects, experience, and writing.",
    stack: ["Next.js", "TypeScript", "Tailwind"],
    links: [
      { label: "GitHub", href: "https://github.com/thung19/thung-site" },
    ],
    featured: true,
    screenshot: "/images/personal-site.png",
  },
];
