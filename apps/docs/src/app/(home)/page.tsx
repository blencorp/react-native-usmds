'use client';

import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white text-gray-900">

      {/* Navigation */}
      <nav className="border-b bg-white/80 backdrop-blur sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 flex items-center justify-center rounded-md bg-blue-600 text-white font-bold text-sm">U</div>
            <span className="text-lg font-semibold">USMDS</span>
          </div>
          <div className="hidden md:flex items-center gap-6 text-sm font-medium">
            <Link href="/docs" className="text-gray-500 hover:text-gray-900 transition">Documentation</Link>
            <Link href="/playground" className="text-gray-500 hover:text-gray-900 transition">Playground</Link>
            <Link href="/docs/components" className="text-gray-500 hover:text-gray-900 transition">Components</Link>
            <Link
              href="/docs"
              className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
            >
              Get Started
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="py-24 sm:py-32">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight">
              React Native{' '}
              <span className="bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
                USMDS
              </span>
            </h1>
            <p className="mt-6 text-lg text-gray-600 max-w-xl mx-auto lg:mx-0">
              U.S. Mobile Design System components for React Native apps. Build consistent, accessible, and beautiful mobile experiences.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link
                href="/docs"
                className="px-6 py-3 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 transition text-base"
              >
                Get Started →
              </Link>
              <Link
                href="/docs/components"
                className="px-6 py-3 border border-gray-300 text-gray-800 font-medium rounded-md hover:bg-gray-100 transition text-base"
              >
                View Components
              </Link>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-100 to-purple-100 rounded-3xl blur-3xl"></div>
              <div className="relative bg-white border rounded-2xl p-8 shadow-xl">
                <div className="flex items-center justify-center h-48 w-48 bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-blue-600 mb-2">📱</div>
                    <p className="text-sm font-medium text-gray-600">USMDS</p>
                  </div>
                </div>
                <p className="text-xs text-center text-gray-500 mt-4">USMDS Component Preview</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold">Key Features</h2>
            <p className="mt-4 text-lg text-gray-600">
              Everything you need to build world-class React Native applications
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Accessible',
                desc: 'Built with accessibility in mind. All components meet WCAG standards and are tested for screen readers.',
              },
              {
                title: 'Customizable',
                desc: 'Easily adapt components to your specific requirements while maintaining design consistency.',
              },
              {
                title: 'Cross-Platform',
                desc: 'Works seamlessly on both iOS and Android platforms with consistent behavior.',
              },
            ].map(({ title, desc }) => (
              <div key={title} className="bg-white p-6 rounded-lg shadow-sm text-center md:text-left">
                <h3 className="text-xl font-bold mb-2">{title}</h3>
                <p className="text-gray-600">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ✅ Playground Preview Section */}
      <section className="py-20 bg-blue-50">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">Try it Live</h2>
          <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
            Use the interactive playground to explore and test USMDS components in real time.
          </p>
          <Link
            href="/playground"
            className="inline-block px-8 py-4 bg-blue-600 text-white text-base font-semibold rounded-md hover:bg-blue-700 transition"
          >
            Open Playground →
          </Link>
        </div>
      </section>

      {/* Components */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold">Featured Components</h2>
            <p className="mt-4 text-lg text-gray-600">
              Explore our React Native component library
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Alert',
                desc: 'Display important messages with severity levels.',
                href: '/docs/components/alert',
              },
              {
                title: 'Button',
                desc: 'Multiple variants and sizes for actions.',
                href: '/docs/components/button',
              },
              {
                title: 'Card',
                desc: 'Flexible containers for UI content and actions.',
                href: '/docs/components/card',
              },
            ].map(({ title, desc, href }) => (
              <Link key={title} href={href} className="block group bg-white p-6 border rounded-lg hover:shadow-md transition">
                <h3 className="text-xl font-bold mb-2 group-hover:text-blue-600">{title}</h3>
                <p className="text-gray-600 mb-4">{desc}</p>
                <p className="text-blue-600 font-medium">View component →</p>
              </Link>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              href="/docs/components"
              className="px-6 py-3 bg-gray-100 text-gray-800 font-medium rounded-md hover:bg-gray-200 transition"
            >
              View All Components →
            </Link>
          </div>
        </div>
      </section>

      {/* Getting Started */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-4">Get Started</h2>
            <p className="text-gray-600 mb-6">
              Follow our guide to install and configure the USMDS component library.
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
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <pre className="bg-gray-900 text-gray-100 p-4 rounded text-sm overflow-x-auto">
              <code>{`# Using npm
npx usmds init

# Using yarn
yarn usmds init`}</code>
            </pre>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-12">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="h-8 w-8 flex items-center justify-center rounded-md bg-white text-blue-700 font-bold text-sm">U</div>
              <span className="text-lg font-semibold">USMDS</span>
            </div>
            <p className="text-sm text-gray-400">© 2025 React Native USMDS</p>
          </div>
          <div>
            <h4 className="text-sm font-semibold mb-4">Documentation</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link href="/docs" className="hover:text-white">Getting Started</Link></li>
              <li><Link href="/docs/components" className="hover:text-white">Components</Link></li>
              <li><Link href="/playground" className="hover:text-white">Playground</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold mb-4">Resources</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <a
                  href="https://github.com/blencorp/react-native-usmds"
                  className="hover:text-white"
                >
                  GitHub
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
}
