import Container from "@/components/layout/Container";
import { experience } from "@/content/experience";

export default function ExperiencePage() {
  return (
    <main>
      <Container className="py-12">
        <h1 className="text-3xl font-semibold tracking-tight">Experience</h1>
        <p className="mt-4 text-black/70 leading-relaxed max-w-2xl">
          Research, internships, and long-term projects.
        </p>

        <div className="mt-10 space-y-10">
          {experience.map((item, idx) => (
            <section key={idx}>
              <div className="flex items-baseline justify-between gap-6">
                <h2 className="text-lg font-semibold tracking-tight">
                  {item.role} · {item.org}
                </h2>
                <span className="text-xs text-black/50">
                  {item.period}
                </span>
              </div>

              {item.description && (
                <p className="mt-2 text-sm text-black/70 leading-relaxed max-w-3xl">
                  {item.description}
                </p>
              )}

              {item.bullets && (
                <ul className="mt-3 list-disc pl-5 space-y-1 text-sm text-black/70">
                  {item.bullets.map((bullet, i) => (
                    <li key={i}>{bullet}</li>
                  ))}
                </ul>
              )}
            </section>
          ))}
        </div>
      </Container>
    </main>
  );
}
