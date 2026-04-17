import Container from "@/components/layout/Container";
import { experience } from "@/content/experience";
import { projects } from "@/content/projects";
import SocialLinks from "@/components/ui/SocialLinks";
import Reveal from "@/components/ui/Reveal";
import StackTags from "@/components/ui/StackTags";
import { education } from "@/content/education";

export default function Home() {
  return (
    <main>
      {/* ── INTRO ──────────────────────────────────────────────────
          White background. Dark text throughout. No contrast issues. */}
      <Container>
        <section
          id="intro"
          className="min-h-screen flex flex-col items-center justify-center scroll-mt-24"
          style={{ padding: "6rem 0 4rem", gap: "1.5rem" }}
        >
          <Reveal delay={0}>
            <p
              className="text-center"
              style={{
                fontSize: "0.8rem",
                fontWeight: 700,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                color: "#51e0cd",
              }}
            >
              CS + Applied Math · Vanderbilt University
            </p>
          </Reveal>

          <Reveal delay={0.05}>
            <h1
              className="text-center"
              style={{
                fontSize: "clamp(2rem, 5vw, 3.5rem)",
                fontWeight: 700,
                lineHeight: 1.15,
                letterSpacing: "-0.03em",
                color: "#000000",
                maxWidth: "760px",
              }}
            >
              Hi, I&apos;m Thomas Hung.
            </h1>
          </Reveal>

          <Reveal delay={0.1}>
            <p
              className="text-center"
              style={{
                fontSize: "1.125rem",
                lineHeight: 1.7,
                color: "#666666",
                maxWidth: "560px",
              }}
            >
              I like building things.
            </p>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="flex flex-col items-center" style={{ gap: "1.25rem" }}>
              <SocialLinks
                email="thomashung733@gmail.com"
                github="https://github.com/thung19"
                linkedin="https://linkedin.com/in/thomashung19"
              />
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
                  padding: "10px 28px",
                  borderRadius: "0.4rem",
                  boxShadow: "0 2px 2px rgba(0,0,0,0.08), 0 1px 1px rgba(0,0,0,0.06)",
                  transition: "all 300ms cubic-bezier(0.215, 0.61, 0.355, 1)",
                }}
              >
                Download Resume
              </a>
            </div>
          </Reveal>
        </section>
      </Container>

      {/* ── EDUCATION ──────────────────────────────────────────────
          Teal pastel gradient bg. Dark text on very light bg = fine. */}
      <div style={{ background: "linear-gradient(225deg, #e6f9f8 0%, #e5fcf3 100%)" }}>
        <Container>
          <section
            id="education"
            className="scroll-mt-24"
            style={{ padding: "5rem 0" }}
          >
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
              <div className="md:col-span-3">
                <Reveal delay={0.05}>
                  <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                    <div
                      style={{
                        width: "2.5rem",
                        height: "3px",
                        background: "#51e0cd",
                        borderRadius: "2px",
                      }}
                    />
                    <h2
                      style={{
                        fontSize: "1.5rem",
                        fontWeight: 700,
                        letterSpacing: "-0.02em",
                        color: "#05537a",
                      }}
                    >
                      Education
                    </h2>
                  </div>
                </Reveal>
              </div>

              <div className="md:col-span-9">
                <div
                  style={{
                    marginTop: "0.5rem",
                    borderTop: "1px solid rgba(5,83,122,0.15)",
                  }}
                >
                  {education.map((ed, idx) => (
                    <Reveal key={idx} delay={0.1 + 0.08 * idx}>
                      <div
                        style={{
                          padding: "1.75rem 0",
                          borderBottom: "1px solid rgba(5,83,122,0.15)",
                        }}
                      >
                        <h3
                          style={{
                            fontSize: "1.05rem",
                            fontWeight: 700,
                            letterSpacing: "-0.01em",
                            color: "#000000",
                          }}
                        >
                          {ed.school}
                        </h3>

                        <div
                          className="flex items-baseline justify-between gap-4"
                          style={{ marginTop: "0.25rem" }}
                        >
                          <p
                            style={{
                              fontSize: "0.9rem",
                              fontWeight: 500,
                              color: "#05537a",
                            }}
                          >
                            {ed.degree}
                          </p>
                          <span style={{ fontSize: "0.8rem", color: "#999999" }}>
                            {ed.period}
                          </span>
                        </div>

                        {ed.details && ed.details.length > 0 && (
                          <ul
                            style={{
                              marginTop: "0.75rem",
                              paddingLeft: "1.25rem",
                              listStyle: "disc",
                              display: "flex",
                              flexDirection: "column",
                              gap: "0.25rem",
                            }}
                          >
                            {ed.details.map((d, i) => (
                              <li
                                key={i}
                                style={{ fontSize: "0.875rem", color: "#333333", lineHeight: 1.6 }}
                              >
                                {d}
                              </li>
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
        </Container>
      </div>

      {/* ── EXPERIENCE ─────────────────────────────────────────────
          Periwinkle pastel gradient bg. Dark text = fine.            */}
      <div style={{ background: "linear-gradient(225deg, #eeeeff 0%, #e6f5fb 100%)" }}>
        <Container>
          <section
            id="experience"
            className="scroll-mt-24"
            style={{ padding: "5rem 0" }}
          >
            <Reveal delay={0.05}>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem", marginBottom: "2.5rem" }}>
                <div
                  style={{
                    width: "2.5rem",
                    height: "3px",
                    background: "#51e0cd",
                    borderRadius: "2px",
                  }}
                />
                <h2
                  style={{
                    fontSize: "1.5rem",
                    fontWeight: 700,
                    letterSpacing: "-0.02em",
                    color: "#05537a",
                  }}
                >
                  Experience
                </h2>
              </div>
            </Reveal>

            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              {experience.map((item, idx) => (
                <Reveal key={idx} delay={0.08 + 0.06 * idx}>
                  <div
                    className="card-hover"
                    style={{
                      background: "#ffffff",
                      borderRadius: "0.6rem",
                      padding: "1.5rem 1.75rem",
                      border: "1px solid #e0e0e0",
                    }}
                  >
                    <div className="flex items-start justify-between gap-4 flex-wrap">
                      <div>
                        <h3
                          style={{
                            fontSize: "1rem",
                            fontWeight: 700,
                            letterSpacing: "-0.01em",
                            color: "#000000",
                          }}
                        >
                          {item.org}
                        </h3>
                        <p
                          style={{
                            fontSize: "0.875rem",
                            fontWeight: 500,
                            color: "#05537a",
                            marginTop: "0.2rem",
                          }}
                        >
                          {item.role}
                        </p>
                      </div>
                      <span
                        style={{
                          fontSize: "0.8rem",
                          color: "#999999",
                          flexShrink: 0,
                        }}
                      >
                        {item.period}
                      </span>
                    </div>

                    {item.bullets && item.bullets.length > 0 && (
                      <ul
                        style={{
                          marginTop: "1rem",
                          paddingLeft: "1.25rem",
                          listStyle: "disc",
                          display: "flex",
                          flexDirection: "column",
                          gap: "0.35rem",
                        }}
                      >
                        {item.bullets.map((b, i) => (
                          <li
                            key={i}
                            style={{ fontSize: "0.875rem", color: "#333333", lineHeight: 1.6 }}
                          >
                            {b}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </Reveal>
              ))}
            </div>
          </section>
        </Container>
      </div>

      {/* ── PROJECTS ───────────────────────────────────────────────
          White background. Cards with shadow elevation.              */}
      <Container>
        <section
          id="projects"
          className="scroll-mt-24"
          style={{ padding: "5rem 0 6rem" }}
        >
          <Reveal delay={0.05}>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem", marginBottom: "2.5rem" }}>
              <div
                style={{
                  width: "2.5rem",
                  height: "3px",
                  background: "#51e0cd",
                  borderRadius: "2px",
                }}
              />
              <h2
                style={{
                  fontSize: "1.5rem",
                  fontWeight: 700,
                  letterSpacing: "-0.02em",
                  color: "#05537a",
                }}
              >
                Projects
              </h2>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3" style={{ gap: "1.25rem" }}>
            {projects.map((p, idx) => (
              <Reveal key={p.slug} delay={0.08 + 0.06 * idx}>
                <article
                  className="card-hover flex flex-col"
                  style={{
                    background: "#ffffff",
                    border: "1px solid #e0e0e0",
                    borderRadius: "0.6rem",
                    padding: "1.5rem",
                    height: "100%",
                  }}
                >
                  <h3
                    style={{
                      fontSize: "1rem",
                      fontWeight: 700,
                      letterSpacing: "-0.01em",
                      color: "#000000",
                      marginBottom: "0.5rem",
                    }}
                  >
                    {p.title}
                  </h3>

                  <p
                    style={{
                      fontSize: "0.875rem",
                      color: "#666666",
                      lineHeight: 1.65,
                      marginBottom: "1rem",
                    }}
                  >
                    {p.description}
                  </p>

                  <div style={{ flex: 1 }} />

                  <div style={{ marginBottom: "1rem", position: "relative" }}>
                    <StackTags stack={p.stack} />
                  </div>

                  {p.links && p.links.length > 0 && (
                    <div className="flex flex-wrap" style={{ gap: "1rem" }}>
                      {p.links.map((link) => (
                        <a
                          key={link.href}
                          href={link.href}
                          target="_blank"
                          rel="noreferrer"
                          className="link-accent"
                          style={{ fontSize: "0.875rem" }}
                        >
                          {link.label} →
                        </a>
                      ))}
                    </div>
                  )}

                  {p.screenshot && (
                    <div
                      style={{
                        marginTop: "1rem",
                        borderRadius: "0.4rem",
                        overflow: "hidden",
                        background: "#f5f5f5",
                      }}
                    >
                      <img
                        src={p.screenshot}
                        alt={`${p.title} screenshot`}
                        style={{ width: "100%", height: "auto", display: "block" }}
                      />
                    </div>
                  )}

                  {p.video && (
                    <div
                      style={{
                        marginTop: "1rem",
                        borderRadius: "0.4rem",
                        overflow: "hidden",
                        background: "#f5f5f5",
                        aspectRatio: "16/9",
                      }}
                    >
                      {/(?:youtube\.com|youtu\.be)/.test(p.video) ? (
                        <iframe
                          src={p.video.replace(
                            /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/watch\?v=|youtu\.be\/)([\w-]+).*/,
                            "https://www.youtube-nocookie.com/embed/$1"
                          )}
                          title={p.title}
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                          style={{ width: "100%", height: "100%", border: "none" }}
                        />
                      ) : (
                        <video
                          src={p.video}
                          controls
                          playsInline
                          preload="metadata"
                          style={{ width: "100%", height: "100%", objectFit: "contain" }}
                        />
                      )}
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
