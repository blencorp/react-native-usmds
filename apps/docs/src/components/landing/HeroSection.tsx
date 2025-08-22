"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";

export function HeroSection() {
  return (
    <section
      aria-labelledby="hero-heading"
      className="py-24 sm:py-32 bg-[var(--usa-color-blue-60v,#005ea2)] text-[var(--usa-base-lightest,#ffffff)]"
    >
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <div className="text-center lg:text-left space-y-6">
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
            className="mt-6 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
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

            {/* Secondary CTA — BLUE (filled, darker hover, still variant="outline") */}
            <Button
              asChild
              variant="outline"
              size="lg"
              className="
    bg-[var(--usa-color-blue-60v,#005ea2)]
    text-[var(--usa-color-base-lightest,#ffffff)]
    border border-[var(--usa-color-blue-60v,#005ea2)]
    hover:bg-[var(--usa-color-blue-70v,#1a4480)]
    active:bg-[var(--usa-color-blue-80v,#0b4778)]
    supports-[color:color-mix(in_srgb,blue,black)]:hover:bg-[color-mix(in_srgb,var(--usa-color-blue-60v,#005ea2)_90%,black)]
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
          className="flex justify-center"
          role="img"
          aria-label="USMDS mobile component preview"
        >
          <Link
            href="/docs/components"
            className="relative group focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-blue-800 rounded-3xl"
            aria-label="View USMDS mobile components documentation"
          >
            <div
              className="absolute inset-0 bg-gradient-to-tr from-blue-100 to-purple-100 rounded-3xl blur-3xl transition-transform group-hover:scale-105"
              aria-hidden="true"
            ></div>
            <div className="relative bg-white border rounded-2xl p-8 shadow-xl transition-transform group-hover:scale-105">
              <div className="flex items-center justify-center h-48 w-48 bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl">
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-blue-800 rounded-lg flex items-center justify-center">
                    <svg
                      className="w-8 h-8 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                      focusable="false"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2z"
                      />
                    </svg>
                  </div>
                  <p className="text-sm font-semibold text-gray-800">USMDS</p>
                  <p className="text-xs text-gray-600 mt-1">
                    Mobile Components
                  </p>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
