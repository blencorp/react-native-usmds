export default function BuiltBy() {
  return (
    <section className="bg-white py-14">
      <div className="mx-auto max-w-6xl px-4 py-10">
        <h2>Built by</h2>
        <div className="mt-3 flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
          <div className="h-12 w-40 rounded bg-neutral-100 bg-[url('/logos/blen.png')] bg-contain bg-left bg-no-repeat" />
          <p className="max-w-3xl text-neutral-600">
            BLEN is a digital services company that provides Emerging Technology
            (ML/AI, RPA), Digital Modernization (Legacy to Cloud) and
            Human-Centered Web/Mobile Design and Development.
          </p>
        </div>
      </div>
    </section>
  );
}
