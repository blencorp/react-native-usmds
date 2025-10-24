"use client";

import Link from "next/link";
import Image from "next/image";
import siteLogo from "../../../public/assets/images/logo.webp";
import usmdsMobile from "../../../images/usmds-mobile.webp";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-[#162e51] hero">
      <div className="pointer-events-none absolute inset-0">
        <Image
          src={siteLogo}
          alt=""
          aria-hidden="true"
          fill
          priority
          sizes="(min-width: 1024px) 50vw, 80vw"
          className="origin-top-right scale-[1.35] object-contain object-right -translate-y-[0%] translate-x-[20%] opacity-5 blur-[0.1px]"
        />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-4 py-16 sm:py-20 md:py-24">
        <div className="grid items-center gap-10 md:grid-cols-5">
          <div className="md:col-span-3">
            <h1>Build beautiful & accessible government mobile apps</h1>
            <p className="mt-4 leading-7 text-white/80">
              USMDS is an open‑source United States Mobile Design System,
              providing accessible, compliant React Native components that
              accelerate development for public‑sector apps.
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
          <div className="relative md:col-span-2">
            <Image
              src={usmdsMobile}
              alt="USMDS mobile component previews"
              className="mx-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
