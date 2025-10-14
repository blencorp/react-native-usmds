"use client"

import Link from "next/link"

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-[#002d72]">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:py-20 md:py-24">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div>
            <h1 className="leading-tight text-white md:text-5xl">
              Build Accessible Government Mobile Apps Fast
            </h1>
            <p className="mt-4 max-w-prose leading-7 text-white/80 md:text-base">
              USMDS is the open‑source United States Mobile Design System, providing accessible,
              compliant React Native components that accelerate development for public‑sector apps.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href="/docs/getting-started"
                className="inline-flex items-center justify-center rounded-md bg-white px-4 py-2 font-medium text-[#002d72] shadow-sm transition hover:bg-neutral-100 focus:outline-none focus:ring-2 focus:ring-white/80 focus:ring-offset-2 focus:ring-offset-[#002d72]"
              >
                Get Started
              </Link>
              <Link
                href="/docs/components"
                className="inline-flex items-center justify-center rounded-md border border-white/25 bg-transparent px-4 py-2 font-medium text-white shadow-sm transition hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/80 focus:ring-offset-2 focus:ring-offset-[#002d72]"
              >
                View Components
              </Link>
            </div>
          </div>
          <div className="relative">
            <div className="mx-auto h-[520px] w-[280px] rounded-[36px] border border-white/20 bg-white/95 p-4 shadow-2xl ring-1 ring-black/10 md:ml-auto md:mr-0">
              <div className="h-full w-full rounded-[28px] bg-neutral-200 bg-[url('/images/hero-1.png')] bg-cover bg-center" />
            </div>
            <div className="pointer-events-none absolute -right-10 -top-8 hidden h-[420px] w-[220px] rounded-[28px] border border-white/15 bg-white/80 p-3 shadow-xl ring-1 ring-black/5 md:block">
              <div className="h-full w-full rounded-[22px] bg-neutral-200 bg-[url('/images/hero-2.png')] bg-cover bg-center" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}


