"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";

export function HeroSection() {
  return (
    <section className="py-24 sm:py-32 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <div className="text-center lg:text-left space-y-6">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight">
            Build Compliant Government Mobile Apps
          </h1>
          <p className="text-lg sm:text-xl font-light max-w-xl mx-auto lg:mx-0 text-white/90">
            React Native USMDS provides accessible, mobile-optimized components
            built for federal UI compliance and consistency across mobile
            platforms.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Link href="/docs">
              <Button variant="default" size="lg">
                Get Started
              </Button>
            </Link>
            <Link href="/docs/components">
              <Button
                variant="outline"
                size="lg"
                className="text-white border-white hover:bg-white/10"
              >
                View Components
              </Button>
            </Link>
          </div>
        </div>

        {/* Visual Preview */}
        <div className="flex justify-center">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-100 to-purple-100 rounded-3xl blur-3xl"></div>
            <div className="relative bg-white border rounded-2xl p-8 shadow-xl">
              <div className="flex items-center justify-center h-48 w-48 bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl">
                <div className="text-center">
                  <div className="text-4xl font-bold text-blue-600 mb-2">
                    📱
                  </div>
                  <p className="text-sm font-medium text-gray-600">USMDS</p>
                </div>
              </div>
              <p className="text-xs text-center text-gray-500 mt-4">
                USMDS Component Preview
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
