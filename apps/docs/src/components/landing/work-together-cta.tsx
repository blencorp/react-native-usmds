export default function WorkTogetherCta() {
  return (
    <section style={{ backgroundColor: "var(--section-background-color-alt)" }}>
      <div className="mx-auto max-w-6xl px-4 py-20">
        <h2 className="text-black">Let's work together</h2>
        <p className="mt-2 max-w-3xl text-neutral-600">
          We partner with federal agencies and businesses to deliver innovative
          solutions that drive real value.
        </p>
        <div className="mt-6">
          <a
            href="https://www.blencorp.com/connect"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-md bg-black px-8 py-4 text-lg font-medium text-white shadow-sm transition hover:bg-neutral-800 focus:outline-none focus:ring-2 focus:ring-white/80 focus:ring-offset-2 focus:ring-offset-neutral-950"
          >
            Connect with us
          </a>
        </div>
      </div>
    </section>
  );
}
