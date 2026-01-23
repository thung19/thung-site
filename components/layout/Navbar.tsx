"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { href: "/projects", label: "Projects" },
  { href: "/experience", label: "Experience" },
  { href: "/resume", label: "Resume" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="border-b border-black/10">
      <div className="mx-auto max-w-4xl px-5 py-5 flex items-baseline justify-between">
        <Link
          href="/"
          className="text-base font-semibold tracking-tight"
        >
          Thomas Hung
        </Link>

        <nav className="flex gap-6 text-sm">
          {navItems.map((item) => {
            const active = pathname === item.href;

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`transition ${
                  active
                    ? "text-black/60 hover:text-black"
                    : "text-black"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
