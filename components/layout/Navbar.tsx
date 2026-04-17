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
    <header
      className="sticky top-0 z-50 bg-white backdrop-blur"
      style={{ borderBottom: "1px solid #e0e0e0" }}
    >
      <div
        className="mx-auto max-w-300 flex items-center justify-between"
        style={{ padding: "0 2rem", height: "64px" }}
      >
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2 font-bold text-[#05537a]"
          style={{ fontSize: "1.1rem", letterSpacing: "-0.02em" }}
        >
          Thomas Hung
        </Link>

        {/* Nav links */}
        <nav className="hidden md:flex items-center gap-6">
          {homeNav.map((item) => {
            const active = activeSection === item.id;
            return (
              <a
                key={item.id}
                href={item.href}
                style={{
                  fontSize: "0.9rem",
                  fontWeight: active ? 700 : 400,
                  color: active ? "#05537a" : "#333333",
                  textDecorationLine: active ? "underline" : "none",
                  textDecorationColor: "#51e0cd",
                  textUnderlineOffset: "3px",
                  transition: "all 300ms cubic-bezier(0.215, 0.61, 0.355, 1)",
                }}
              >
                {item.label}
              </a>
            );
          })}
        </nav>

        {/* CTA */}
        <div className="flex items-center gap-3">
          <a
            href="mailto:thomashung733@gmail.com"
            style={{
              fontSize: "0.875rem",
              color: "#666666",
              transition: "color 300ms",
            }}
          >
            Contact
          </a>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center"
            style={{
              fontSize: "0.875rem",
              fontWeight: 700,
              color: "#ffffff",
              background: "#05537a",
              padding: "8px 20px",
              borderRadius: "0.4rem",
              boxShadow: "0 2px 2px rgba(0,0,0,0.08), 0 1px 1px rgba(0,0,0,0.06)",
              transition: "all 300ms cubic-bezier(0.215, 0.61, 0.355, 1)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "#066899";
              e.currentTarget.style.boxShadow =
                "0 8px 8px -4px rgba(0,0,0,0.1), 0 4px 4px -2px rgba(0,0,0,0.08), 0 2px 2px rgba(0,0,0,0.06)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "#05537a";
              e.currentTarget.style.boxShadow =
                "0 2px 2px rgba(0,0,0,0.08), 0 1px 1px rgba(0,0,0,0.06)";
            }}
          >
            Resume
          </a>
        </div>
      </div>
    </header>
  );
}
