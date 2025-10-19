"use client"

import Link from "next/link"
import Image from "next/image"

const heroImage = {
  src: "/images/usmds-mobile.webp",
  width: 380,
  height: 474,
  blurDataURL:
    "data:image/webp;base64,UklGRgwBAABXRUJQVlA4WAoAAAAQAAAAEwAAGAAAQUxQSGoAAAABcFvbthLdTsgIyYhYZFRHA78DCmDc3X1Cd3cLXW80cURMAADI/nbnfUrDR/fty8aLakdj52+upWJEz96I+Tajw5lT+pQ9YzVh7NaMQYvR+cvaUUZQFpa1/+YihCkBgP+bDj4qmcXHuvECVlA4IHwAAACQBACdASoUABkAPu1uqlGppiOiqAqpMB2JaQAAIfkVx6eVlnpSMY1k+HaFYAAA/fxozRsAyr6ThYUuk//E/PDXSYnyn99MKyRPnEr9oBmCQ4QUH252BtD23In4pRg/AgD1+3feU5oesi21RsqgWu9GVbsefWNuFYUEAAAA",
}

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-[#162e51] hero">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:py-20 md:py-24">
        <div className="grid items-center gap-10 md:grid-cols-5">
          <div className="md:col-span-3">
            <h1>
              Build beautiful & accessible government mobile apps
            </h1>
            <p className="mt-4 text-lg leading-7 text-white/80">
              USMDS is an open‑source United States Mobile Design System, providing accessible,
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
          <div className="relative md:col-span-2">
            <Image
              src={heroImage.src}
              alt="USMDS mobile component previews"
              width={heroImage.width}
              height={heroImage.height}
              priority
              placeholder="blur"
              blurDataURL={heroImage.blurDataURL}
              sizes="(max-width: 640px) 80vw, (max-width: 1024px) 45vw, 380px"
              className="mx-auto h-auto w-full max-w-[380px]"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
