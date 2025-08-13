"use client";

import { HeroSection } from "@/components/landing/HeroSection";
import { FeaturesSection } from "@/components/landing/features-section";
import { ComponentShowcase } from "@/components/landing/ComponentShowcase";
import { Footer } from "@/components/landing/footer";
import Link from "next/link";
import { useEffect } from "react";
import InstallSnippet from "@/components/landing/InstallSnippet";

export default function HomePage() {
  useEffect(() => {
    (async () => {
      const Prism = (await import("prismjs")).default;
      await import("prismjs/components/prism-bash");
      Prism.highlightAll();
    })();
  }, []);

  return (
    <div className="min-h-screen bg-background">
        <HeroSection />
        <FeaturesSection />
        <ComponentShowcase />

        <section
          className="py-20 bg-white dark:bg-gray-900"
          aria-labelledby="getting-started-heading"
        >
          <div className="max-w-screen-xl mx-auto px-4 md:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row items-center gap-12">
              <div className="lg:w-1/2">
                <h2
                  id="getting-started-heading"
                  className="text-4xl font-bold mb-8 text-slate-800 dark:text-white"
                >
                  Get Started
                </h2>
                <p className="text-gray-600 dark:text-gray-300 mb-8 text-lg leading-relaxed">
                  Start building your React Native application with USMDS
                  components. Follow our step-by-step guide to install and
                  configure the library for federal compliance.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link
                    href="/docs"
                    className="px-8 py-4 bg-blue-800 text-white font-semibold rounded-md hover:bg-blue-900 transition-colors focus-visible:outline-2 focus-visible:outline-blue-600 focus-visible:outline-offset-2"
                  >
                    Introduction
                  </Link>
                  <Link
                    href="/docs/getting-started/initial-setup"
                    className="px-8 py-4 bg-white dark:bg-gray-800 text-blue-800 dark:text-blue-300 font-semibold rounded-md border-2 border-blue-800 dark:border-blue-300 hover:bg-blue-50 dark:hover:bg-gray-700 transition-colors focus-visible:outline-2 focus-visible:outline-blue-600 focus-visible:outline-offset-2"
                  >
                    Installation Guide
                  </Link>
                </div>
              </div>

              <div className="lg:w-1/2">
                <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700">
                  <div className="bg-slate-900 text-gray-100 p-6 rounded-lg text-sm overflow-x-auto">
                    <pre>
                      <InstallSnippet />
                    </pre>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Footer />
    </div>
  );
}
