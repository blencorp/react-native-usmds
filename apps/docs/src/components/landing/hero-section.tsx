"use client"

import Link from "next/link"
import Image from "next/image"
import heroImage from "../../../images/hero-mobile.png"

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-[#1a4480]">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:py-20 md:py-24">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div>
            <h1 className="text-2xl text-balance leading-tight text-white lg:text-5xl sm:text-sm">
              Build Accessible Government Mobile Apps Fast
            </h1>
            <p className="mt-4 leading-7 text-white/80 lg:text-xl md:text-base sm:text-sm">
              USMDS is the open‑source United States Mobile Design System, providing accessible,
              compliant React Native components that accelerate development for public‑sector apps.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href="/docs/getting-started"
                className="inline-flex items-center justify-center rounded-md bg-white px-6 py-3 text-lg font-medium text-[#002d72] shadow-sm transition hover:bg-neutral-100 focus:outline-none focus:ring-2 focus:ring-white/80 focus:ring-offset-2 focus:ring-offset-[#002d72]"
              >
                Get Started
              </Link>
              <Link
                href="/docs/components"
                className="inline-flex items-center justify-center rounded-md border-2 border-white bg-transparent px-6 py-3 text-lg font-medium text-white shadow-sm transition hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/80 focus:ring-offset-2 focus:ring-offset-[#002d72]"
              >
                View Components
              </Link>
            </div>
          </div>
          <div className="relative">
            <Image src={heroImage} alt="USMDS" className="w-2/3 mx-auto" />
          </div>
        </div>
      </div>
    </section>
  )
}


