"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";

export function HeroSection() {
  return (
    <section aria-labelledby="hero-heading" className="py-24 sm:py-32 bg-background text-foreground">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <div className="text-center lg:text-left space-y-6">
          <h1
            id="hero-heading"
            className="text-2xl sm:text-3xl lg:text-6xl font-bold tracking-tight leading-tight"
          >
            Build Compliant Government Mobile Apps
          </h1>
          <p className="text-lg sm:text-xl font-light max-w-xl mx-auto lg:mx-0" aria-describedby="hero-heading">
            React Native USMDS provides accessible, mobile-optimized components
            built for federal UI compliance and consistency across mobile
            platforms.
          </p>
          <div
            className="mt-6 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            role="group"
            aria-label="Primary actions"
          >
            <Button asChild variant="destructive" size="lg" className="w-full sm:w-auto sm:flex-1">
              <Link href="/docs" className="hover:bg-[var(--usa-color-error-dark)]">
                Get Started
              </Link>
            </Button>

            <Button asChild variant="default" size="lg" className="w-full sm:w-auto sm:flex-1">
              <Link href="/docs/components" className="hover:bg-[var(--usa-color-primary-dark)]">View Components</Link>
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
                        d="M7 2h10a2 2 0 012 2v16a2 2 0 01-2 2H7a2 2 0 01-2-2V4a2 2 0 012-2z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 18h.01"
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
