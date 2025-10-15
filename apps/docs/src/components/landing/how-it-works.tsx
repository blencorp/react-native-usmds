export default function HowItWorks() {
  const bullets = [
    "Accessibility First",
    "Accessibility First",
    "Accessibility First",
    "Accessibility First",
  ]

  return (
    <section className="relative">
      <div className="absolute inset-0 -z-10 bg-neutral-900" />
      <div className="absolute inset-0 -z-10 bg-[url('/images/how-it-works.jpg')] bg-cover bg-center opacity-50" />
      <div className="mx-auto max-w-6xl px-4 py-20 text-white">
        <h2>How It Works</h2>
        <p className="mt-1 max-w-2xl text-white/80">Built on a Simple, Scalable Architecture</p>
        <div className="mt-8 grid items-start gap-8 md:grid-cols-2">
          <div className="space-y-6">
            {bullets.map((b, i) => (
              <div key={i} className="bg-neutral-900/60">
                <h3>{b}</h3>
                <p className="text-white/80">
                  WCAG 2.1 AA and Section 508 compliant — works with TalkBack, VoiceOver, and
                  keyboard navigation.
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}


