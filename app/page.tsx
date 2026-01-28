import Container from "@/components/layout/Container";
import { experience } from "@/content/experience";
import { projects } from "@/content/projects";
import SocialLinks from "@/components/ui/SocialLinks";
import Reveal from "@/components/ui/Reveal";
import { education } from "@/content/education";

export default function Home() {
  return (
    <main>
      <Container className="py-12">
        {/* INTRO */}
        <section
          id="intro"
          className="
            min-h-screen
            flex flex-col items-center justify-center
            scroll-mt-24
            space-y-6
            bg-[radial-gradient(60%_40%_at_50%_0%,rgba(37,99,235,0.18),transparent_70%)]
          "
        >
          <h1 className="text-3xl font-semibold tracking-tight text-center">
            I’m Thomas Hung — a CS + Applied Math student at Vanderbilt.
          </h1>

          <p className="text-black/70 leading-relaxed max-w-2xl mx-auto text-center">
            I build practical software (TypeScript/Next.js and Python tooling) with an academic,
            content-first mindset: clean structure, clear writing, and measurable results.
          </p>

          <p className="text-black/70 leading-relaxed max-w-2xl mx-auto text-center">
            I’m especially interested in data-centric ML and evaluation—how we build systems that
            hold up outside of toy demos.
          </p>

          <div className="flex justify-center pt-2 mt-16">
            <SocialLinks
              email="thomashung733@gmail.com"
              github="https://github.com/thung19"
              linkedin="https://linkedin.com/in/thomashung19"
            />
          </div>

          <div className="flex justify-center pt-4">
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="
                inline-flex items-center gap-2
                rounded-full
                px-5 py-2
                text-sm font-medium
                text-white
                bg-[var(--accent)]
                hover:bg-[var(--accent-2)]
                transition
              "
            >
              Download Resume
            </a>
          </div>

          <div className="pt-10 text-center text-xs text-black/50">Scroll</div>
        </section>

        {/* EDUCATION */}
        <section id="education" className="mt-24 scroll-mt-24">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            <div className="md:col-span-3">
              <Reveal delay={0.1}>
                <h2 className="text-sm font-medium tracking-wide uppercase text-[var(--accent)]">
                  Education
                </h2>
                <p className="mt-2 text-sm text-[var(--text-muted)]">
                  Background and focus areas.
                </p>
              </Reveal>
            </div>

            <div className="md:col-span-9">
              <div className="border-t border-[var(--border)] divide-y divide-[var(--border)]">
                {education.map((ed, idx) => (
                  <Reveal key={idx} delay={0.2 + 0.1 * idx}>
                    <div className="py-6">
                      <h3 className="text-lg font-semibold tracking-tight">{ed.school}</h3>

                      <div className="mt-1 flex items-baseline justify-between gap-4">
                        <p className="text-sm font-medium text-black/60 tracking-wide">
                          {ed.degree}
                        </p>
                        <span className="text-xs text-black/40 tracking-wide">{ed.period}</span>
                      </div>

                      {ed.details && ed.details.length > 0 && (
                        <ul className="mt-3 list-disc pl-5 space-y-1 text-sm text-black/70">
                          {ed.details.map((d, i) => (
                            <li key={i}>{d}</li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* EXPERIENCE */}
        <section
          id="experience"
          className="mt-24 scroll-mt-24 rounded-3xl bg-[var(--bg-soft)] py-16 px-8"
        >
          <Reveal delay={0.1}>
            <h2 className="text-2xl font-medium tracking-wide text-black/60 uppercase">
              Experience
            </h2>
          </Reveal>

          <div className="mt-8 border-t border-[var(--border)] divide-y divide-[var(--border)]">
            {experience.map((item, idx) => (
              <Reveal key={idx} delay={0.2 + 0.1 * idx}>
                <div className="py-6">
                  <div className="space-y-2">
                    <h3 className="text-lg font-semibold tracking-tight">{item.org}</h3>

                    <div className="flex items-baseline justify-between gap-4">
                      <p className="text-sm font-medium text-black/60 tracking-wide">
                        {item.role}
                      </p>
                      <span className="text-xs text-black/40 tracking-wide">{item.period}</span>
                    </div>
                  </div>

                  {item.description && (
                    <p className="mt-3 text-sm text-black/70 leading-relaxed max-w-3xl">
                      {item.description}
                    </p>
                  )}

                  {item.bullets && item.bullets.length > 0 && (
                    <ul className="mt-6 list-disc pl-5 space-y-1 text-sm text-black/70">
                      {item.bullets.map((b, i) => (
                        <li key={i}>{b}</li>
                      ))}
                    </ul>
                  )}
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* PROJECTS */}
        <section id="projects" className="mt-16 scroll-mt-24">
          <Reveal delay={0.1}>
            <h2 className="text-2xl font-medium tracking-wide text-black/60 uppercase">
              Projects
            </h2>
          </Reveal>

          <div className="mt-6 divide-y divide-black/10 border-t border-black/10">
            {projects.map((p, idx) => (
              <Reveal key={p.slug} delay={0.2 + 0.1 * idx}>
                <article className="py-6">
                  <div className="flex items-baseline justify-between gap-6">
                    <h3 className="text-lg font-semibold tracking-tight">{p.title}</h3>
                    <p className="text-xs text-black/50">{p.stack.join(" · ")}</p>
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
                          className="underline underline-offset-4 text-black/70 hover:text-[var(--accent)] transition"
                          target="_blank"
                          rel="noreferrer"
                        >
                          {link.label}
                        </a>
                      ))}
                    </div>
                  )}
                </article>
              </Reveal>
            ))}
          </div>
        </section>
      </Container>
    </main>
  );
}
