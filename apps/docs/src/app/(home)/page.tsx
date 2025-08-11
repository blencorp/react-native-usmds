"use client";

import Link from "next/link";
import { FeaturesSection } from "@/components/landing/features-section";
import { Footer } from "@/components/landing/footer";
import { useEffect } from "react";
import Prism from "prismjs";
import "prismjs/components/prism-bash";
import "prismjs/themes/prism.css";
import { HeroSection } from "../../components/landing/HeroSection";
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import InstallSnippet from "@/components/landing/InstallSnippet";


export default function HomePage() {
  useEffect(() => {
    Prism.highlightAll();
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <HeroSection />

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-3 text-gray-900 dark:text-gray-100">
            Key Features
          </h2>
          <FeaturesSection />
        </div>
      </section>

      {/* Components Preview Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
            Popular Components
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Badge Preview */}
            <Link href="/docs/components/badge" className="group">
              <Card className="h-full border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition flex flex-col">
                <CardHeader>
                  <CardTitle className="group-hover:text-blue-600 text-xl font-bold">
                    Badge
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex flex-col flex-1 justify-between">
                  <div className="space-x-2">
                    <Badge>Default</Badge>
                    <Badge variant="secondary">Secondary</Badge>
                    <Badge className="bg-blue-500 text-white">Custom</Badge>
                  </div>
                  <p className="text-blue-600 font-medium mt-4">
                    View component →
                  </p>
                </CardContent>
              </Card>
            </Link>

            {/* Button Preview */}
            <Link href="/docs/components/button" className="group">
              <Card className="h-full border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition flex flex-col">
                <CardHeader>
                  <CardTitle className="group-hover:text-blue-600 text-xl font-bold">
                    Button
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex flex-col flex-1 justify-between">
                  <div className="space-x-2">
                    <Button>Primary</Button>
                    <Button variant="outline">Outline</Button>
                    <Button variant="destructive">Destructive</Button>
                  </div>
                  <p className="text-blue-600 font-medium mt-4">
                    View component →
                  </p>
                </CardContent>
              </Card>
            </Link>

            {/* Card Preview */}
            <Link href="/docs/components/card" className="group">
              <Card className="h-full border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition flex flex-col">
                <CardHeader>
                  <CardTitle className="group-hover:text-blue-600 text-xl font-bold">
                    Card
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex flex-col flex-1 justify-between">
                  <p className="text-gray-600">
                    A flexible container to group related content and actions.
                  </p>
                  <p className="text-blue-600 font-medium mt-4">
                    View component →
                  </p>
                </CardContent>
              </Card>
            </Link>
          </div>

          <div className="text-center mt-12">
            <Link
              href="/docs/components"
              className="px-6 py-3 bg-gray-100 text-gray-800 font-medium rounded-md hover:bg-gray-200 transition inline-flex items-center"
            >
              View All Components
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 ml-2"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Getting Started Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-6">Get Started</h2>
              <p className="text-gray-600 mb-6">
                Start building your React Native application with USMDS
                components. Follow our step-by-step guide to install and
                configure the library.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/docs"
                  className="px-6 py-3 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 transition"
                >
                  Introduction
                </Link>
                <Link
                  href="/docs/getting-started/initial-setup"
                  className="px-6 py-3 bg-gray-200 text-gray-800 font-medium rounded-md hover:bg-gray-300 transition"
                >
                  Installation
                </Link>
              </div>
            </div>
            <div className="md:w-1/2 bg-white p-4 rounded-lg shadow-sm">
              <pre className="bg-gray-900 text-gray-100 p-4 rounded text-sm overflow-x-auto">
                <InstallSnippet />
                {/* <code className="language-bash">{`# Using npm
npx usmds init

# Using yarn
yarn usmds init`}</code> */}
              </pre>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}

      <Footer />
    </div>
  );
}