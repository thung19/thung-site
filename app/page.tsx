import Container from "@/components/layout/Container";

export default function Home() {
  return (
    <main>
      <Container className="py-12">
        {/* Intro */}
        <section className="space-y-5">
          <h1 className="text-3xl font-semibold tracking-tight">
            Hi, I’m Thomas Hung — a CS + Applied Math student at Vanderbilt.
          </h1>

          <p className="text-black/70 leading-relaxed max-w-2xl">
            I build practical software (full-stack + Python tooling) and I’m especially interested in
            data-centric ML and systems that are easy to maintain. I like projects that feel clean,
            measurable, and useful.
          </p>

          <p className="text-black/70 leading-relaxed max-w-2xl">
            Currently: working on a local note retrieval/summarization tool (RAG-style pipeline) and
            exploring research areas around document understanding and evaluation.
          </p>

          {/* Jump links */}
          <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
            <a
              href="#experience"
              className="underline underline-offset-4 text-black/70 hover:text-black transition"
            >
              Scroll to experience
            </a>
            <a
              href="#projects"
              className="underline underline-offset-4 text-black/70 hover:text-black transition"
            >
              Scroll to projects
            </a>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="underline underline-offset-4 text-black/70 hover:text-black transition"
            >
              Resume PDF
            </a>
          </div>
        </section>

        {/* Experience placeholder section */}
        <section id="experience" className="mt-16 scroll-mt-24">
          <h2 className="text-sm font-medium tracking-wide text-black/60 uppercase">
            Experience
          </h2>
          <p className="mt-4 text-black/70 leading-relaxed max-w-2xl">
            (Coming next) This section will summarize research, internships, and leadership highlights.
          </p>
        </section>

        {/* Projects placeholder section */}
        <section id="projects" className="mt-16 scroll-mt-24">
          <h2 className="text-sm font-medium tracking-wide text-black/60 uppercase">
            Projects
          </h2>
          <p className="mt-4 text-black/70 leading-relaxed max-w-2xl">
            (Coming next) This section will show selected projects and link to full write-ups.
          </p>
        </section>
      </Container>
    </main>
  );
}
