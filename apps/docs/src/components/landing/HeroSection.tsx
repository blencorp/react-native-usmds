"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";

export function HeroSection() {
  return (
    <section
      aria-labelledby="hero-heading"
      className="bg-[var(--usa-color-blue-60v,#005ea2)] text-[var(--usa-base-lightest,#ffffff)]"
    >
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-8 items-stretch"> {/* Change items-center to items-stretch */}
        {/* Text Content */}
        <div className="text-center lg:text-left space-y-6 py-8 flex flex-col justify-center"> {/* Reduce padding and add flex centering */}
          <h1
            id="hero-heading"
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight"
          >
            Build Compliant Government Mobile Apps
          </h1>
          <p
            className="text-lg sm:text-xl font-light max-w-xl mx-auto lg:mx-0 text-white/90"
            aria-describedby="hero-heading"
          >
            React Native USMDS provides accessible, mobile-optimized components
            built for federal UI compliance and consistency across mobile
            platforms.
          </p>
          <div
            className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            role="group"
            aria-label="Primary actions"
          >
            {/* Primary CTA — RED (USWDS “error” red) */}
            <Button
              asChild
              variant="default"
              size="lg"
              className="
    bg-[var(--usa-color-error,#b50909)]
    text-[var(--usa-color-base-lightest,#ffffff)]
    border border-[color-mix(in_srgb,var(--usa-color-error,#b50909)_70%,black)]
    hover:bg-[var(--usa-color-red-70v,#8b0a03)]
    active:bg-[var(--usa-color-red-80v,#5c0000)]
    supports-[color:color-mix(in_srgb,red,black)]:hover:bg-[color-mix(in_srgb,var(--usa-color-error,#b50909)_90%,black)]
    focus-visible:ring-4 focus-visible:ring-[var(--usa-color-focus,#2491ff)]
    focus-visible:ring-offset-4 focus-visible:ring-offset-[var(--usa-color-error,#b50909)]
    rounded-sm h-12 px-[var(--usa-space-4,1rem)] py-[var(--usa-space-3,0.75rem)]
    transition-colors
  "
            >
              <Link href="/docs">Get Started</Link>
            </Button>
            <span id="get-started-description" className="sr-only">
              Begin using USMDS components in your government mobile application
            </span>

            {/* Secondary CTA — WHITE (filled, with hover effects) */}
            <Button
              asChild
              variant="outline"
              size="lg"
              className="
    bg-white
    text-[var(--usa-color-blue-60v,#005ea2)] dark:text-black
    border border-white
    hover:bg-gray-100
    active:bg-gray-200
    focus-visible:ring-4 focus-visible:ring-[var(--usa-color-focus,#2491ff)]
    focus-visible:ring-offset-4 focus-visible:ring-offset-[var(--usa-color-blue-60v,#005ea2)]
    rounded-sm h-12 px-[var(--usa-space-4,1rem)] py-[var(--usa-space-3,0.75rem)]
    transition-colors
  "
            >
              <Link href="/docs/components">View Components</Link>
            </Button>
          </div>
        </div>

        {/* Visual Preview */}
        <div
          className="flex justify-center items-stretch h-full"
          role="img"
          aria-label="USMDS digital interface network illustration"
        >
          <div className="h-full w-full flex items-center justify-center">
            <img
              src="/digital-interfaces-illustration.png"
              alt="Digital interfaces network illustration showing interconnected web pages, mobile screens, and digital elements"
              className="w-full h-full object-contain rounded-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
