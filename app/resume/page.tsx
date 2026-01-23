export default function ResumePage() {
  return (
    <main className="mx-auto max-w-4xl px-5 py-12">
      <h1 className="text-2xl font-semibold tracking-tight">Resume</h1>
      <p className="mt-3 text-black/70">
        PDF version.
      </p>
      <div className="mt-6">
        <a className="underline underline-offset-4" href="/resume.pdf" target="_blank" rel="noreferrer">
          Open resume.pdf
        </a>
      </div>
    </main>
  );
}
