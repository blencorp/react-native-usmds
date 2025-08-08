'use client';

import Link from 'next/link';
import { FeaturesSection } from '@/components/landing/features-section';
import { useEffect } from 'react';
import Prism from 'prismjs';
import 'prismjs/components/prism-bash';
import 'prismjs/themes/prism.css';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function HomePage() {
  useEffect(() => {
    Prism.highlightAll();
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header/Hero Section */}
      <header className="py-12 md:py-24 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="md:w-1/2 space-y-6">
              <h1 className="text-4xl md:text-5xl font-bold">React Native USMDS</h1>
              <p className="text-xl md:text-2xl font-light">
                U.S. Mobile Design System components for React Native applications
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/docs"
                  className="px-6 py-3 bg-white text-blue-700 font-medium rounded-md hover:bg-blue-50 transition"
                >
                  Get Started
                </Link>
                <Link
                  href="/docs/components"
                  className="px-6 py-3 bg-blue-800 text-white font-medium rounded-md hover:bg-blue-900 transition"
                >
                  Components
                </Link>
              </div>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <div className="w-full max-w-md h-80 bg-white bg-opacity-10 rounded-lg flex items-center justify-center p-4">
                <div className="text-center">
                  <div className="flex justify-center mb-4">
                    <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
                      <span className="text-blue-700 text-2xl font-bold">USMDS</span>
                    </div>
                  </div>
                  <p className="text-white font-medium">USMDS Component Preview</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

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
                  <p className="text-blue-600 font-medium mt-4">View component →</p>
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
                  <p className="text-blue-600 font-medium mt-4">View component →</p>
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
                  <p className="text-blue-600 font-medium mt-4">View component →</p>
                </CardContent>
              </Card>
            </Link>
          </div>

          <div className="text-center mt-12">
            <Button
              asChild
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 text-white"
            >
              <Link href="/docs/components">View All Components</Link>
            </Button>
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
                Start building your React Native application with USMDS components. Follow
                our step-by-step guide to install and configure the library.
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
                <code className="language-bash">{`# Using npm
npx usmds init

# Using yarn
yarn usmds init`}</code>
              </pre>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-gray-900 text-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p>© 2025 React Native USMDS</p>
            </div>
            <div className="flex gap-6">
              <Link href="/docs" className="hover:text-blue-400 transition">
                Documentation
              </Link>
              <Link href="/docs/components" className="hover:text-blue-400 transition">
                Components
              </Link>
              <a
                href="https://github.com/blencorp/react-native-usmds"
                className="hover:text-blue-400 transition"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
