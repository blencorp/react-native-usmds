"use client";

import { Button } from "@/components/ui/Button";
import Link from "next/link";
import InstallSnippet from "./InstallSnippet";

export function GettingStartedSection() {
  return (
    <section
        aria-labelledby="getting-started-heading"
        className="w-screen relative left-1/2 right-1/2 -mx-[50vw] py-15 bg-muted"
      >
        <div className="max-w-screen-xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <h2 id="getting-started-heading" className="text-4xl font-bold mb-8 -mt-2">
                Get Started
              </h2>
              <p className="text-lg leading-relaxed text-muted-foreground mb-5">
                Start building your React Native application with USMDS
                components. Follow our step-by-step guide to install and
                configure the library for federal compliance.
              </p>
              <div className="flex flex-wrap gap-4">
                 <Button asChild variant="default" size="lg" className="w-full sm:w-auto sm:flex-1">
                    <Link href="/docs" className="hover:bg-[var(--usa-color-primary-dark)]">Introduction</Link>
                </Button>
                 <Button asChild variant="destructive" size="lg" className="w-full sm:w-auto sm:flex-1">
                    <Link href="/docs/getting-started/initial-setup" className="hover:bg-[var(--usa-color-error-dark)]">
                        Installation Guide
                    </Link>
                </Button>
              </div>
            </div>

            <div className="lg:w-1/2">
              <div className="bg-card text-card-foreground p-5 rounded-lg shadow-sm border border-border">
                <div className="bg-secondary text-secondary-foreground p-6 rounded-lg text-sm overflow-x-auto">
                  <pre className="language-bash">
                    <InstallSnippet />
                  </pre>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}