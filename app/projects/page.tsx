import Container from "@/components/layout/Container";
import { projects } from "@/content/projects";

export default function ProjectsPage() {
  return (
    <main>
      <Container className="py-12">
        <h1 className="text-3xl font-semibold tracking-tight">Projects</h1>
        <p className="mt-4 text-black/70 leading-relaxed max-w-2xl">
          A few things I’ve built.
        </p>

        <div className="mt-10 divide-y divide-black/10 border-t border-black/10">
          {projects.map((p) => (
            <article key={p.slug} className="py-6">
              <div className="flex items-baseline justify-between gap-6">
                <h2 className="text-lg font-semibold tracking-tight">
                  {p.title}
                </h2>
                <p className="text-xs text-black/50">
                  {p.stack.join(" · ")}
                </p>
              </div>

              <p className="mt-2 text-sm text-black/70 leading-relaxed max-w-3xl">
                {p.description}
              </p>

              {p.links && p.links.length > 0 && (
                <div className="mt-3 flex gap-4 text-sm">
                  {p.links.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      className="underline underline-offset-4 text-black/70 hover:text-black transition"
                      target="_blank"
                      rel="noreferrer"
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
              )}
            </article>
          ))}
        </div>
      </Container>
    </main>
  );
}
