import Link from "next/link"

export default function WorkTogetherCta() {
  return (
    <section className="bg-neutral-950">
      <div className="mx-auto max-w-6xl px-4 py-20">
        <h2 className="text-white">Let's work together</h2>
        <p className="mt-2 max-w-3xl text-white/80">
          We partner with federal agencies and businesses to deliver innovative solutions that drive
          real value.
        </p>
        <div className="mt-6">
          <Link
            href="/docs"
            className="inline-flex items-center justify-center rounded-md bg-white px-4 py-2 font-medium text-neutral-900 shadow-sm transition hover:bg-neutral-100 focus:outline-none focus:ring-2 focus:ring-white/80 focus:ring-offset-2 focus:ring-offset-neutral-950"
          >
            Connect with us
          </Link>
        </div>
      </div>
    </section>
  )
}


