"use client";

import Link from "next/link";
import useActiveSection, { SectionId } from "@/components/layout/useActiveSection";

const homeNav: { href: `#${SectionId}`; label: string; id: SectionId }[] = [
  { href: "#intro", label: "Intro", id: "intro" },
  { href: "#education", label: "Education", id: "education" },
  { href: "#experience", label: "Experience", id: "experience" },
  { href: "#projects", label: "Projects", id: "projects" },
];

export default function Navbar() {
  const activeSection = useActiveSection(["intro", "education", "experience", "projects"]);

  return (
    <header className="border-b border-[var(--border)] sticky top-0 z-50 bg-[var(--bg-main)]/90 backdrop-blur">
      <div className="mx-auto max-w-4xl px-5 py-5 flex items-baseline justify-between">
        <Link href="/" className="text-base font-semibold tracking-tight">
          Home
        </Link>

        <nav className="flex gap-6 text-sm">
          {homeNav.map((item) => {
            const active = activeSection === item.id;

            return (
              <a
                key={item.id}
                href={item.href}
                className={`transition ${
                  active ? "text-black/50 hover:text-black" : "text-black"
                }`}
              >
                {item.label}
              </a>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
