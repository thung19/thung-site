"use client";

const footerLinks = [
  { label: "GitHub", href: "https://github.com/thung19" },
  { label: "LinkedIn", href: "https://linkedin.com/in/thomashung19" },
  { label: "Email", href: "mailto:thomashung733@gmail.com" },
];

export default function Footer() {
  return (
    <footer style={{ borderTop: "1px dashed #e0e0e0" }}>
      <div
        className="mx-auto max-w-300 flex items-center justify-between flex-wrap gap-4"
        style={{ padding: "2rem" }}
      >
        <span
          style={{
            fontSize: "0.875rem",
            fontWeight: 700,
            color: "#05537a",
            letterSpacing: "-0.02em",
          }}
        >
          Thomas Hung
        </span>

        <div className="flex items-center gap-6">
          {footerLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel={link.href.startsWith("http") ? "noreferrer" : undefined}
              style={{
                fontSize: "0.875rem",
                color: "#000000",
                textDecoration: "none",
                fontWeight: 500,
                transition: "color 300ms",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#05537a")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#000000")}
            >
              {link.label}
            </a>
          ))}
        </div>

        <span style={{ fontSize: "0.8rem", color: "#999999" }}>
          © {new Date().getFullYear()} Thomas Hung
        </span>
      </div>
    </footer>
  );
}
