import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Privacy Policy - USMDS",
  description: "Privacy Policy for United States Mobile Design System (USMDS)",
}

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold tracking-tight text-neutral-900 mb-2">
          Privacy Policy
        </h1>
        <p className="text-neutral-600 mb-8">
          Last Updated: October 21, 2025
        </p>

        <div className="prose prose-neutral max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-neutral-900 mb-4">
              Introduction
            </h2>
            <p className="text-neutral-700 leading-relaxed mb-4">
              Welcome to the United States Mobile Design System (USMDS). We respect your privacy and are committed to protecting your personal data. This privacy policy explains how we handle information when you use our open-source design system, components, and related applications.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-neutral-900 mb-4">
              Information We Collect
            </h2>
            <p className="text-neutral-700 leading-relaxed mb-4">
              USMDS is an open-source design system and component library. When you use our:
            </p>
            <ul className="list-disc pl-6 mb-4 text-neutral-700 space-y-2">
              <li>
                <strong>Documentation Website:</strong> We may collect anonymous analytics data through standard web analytics tools to understand usage patterns and improve our documentation.
              </li>
              <li>
                <strong>Component Library:</strong> The components themselves do not collect any personal information. They are UI building blocks that operate entirely on your device.
              </li>
              <li>
                <strong>Showcase/Demo Applications:</strong> Our demo applications do not collect, store, or transmit any personal data.
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-neutral-900 mb-4">
              How We Use Information
            </h2>
            <p className="text-neutral-700 leading-relaxed mb-4">
              Any analytics data we collect is used solely to:
            </p>
            <ul className="list-disc pl-6 mb-4 text-neutral-700 space-y-2">
              <li>Improve our documentation and user experience</li>
              <li>Understand which components and features are most valuable</li>
              <li>Identify and fix technical issues</li>
              <li>Monitor website performance</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-neutral-900 mb-4">
              Data Storage and Security
            </h2>
            <p className="text-neutral-700 leading-relaxed mb-4">
              We do not store personal data. The USMDS component library operates entirely on your device. Any analytics data collected through our website is anonymous and aggregated.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-neutral-900 mb-4">
              Third-Party Services
            </h2>
            <p className="text-neutral-700 leading-relaxed mb-4">
              Our documentation website may use third-party services such as:
            </p>
            <ul className="list-disc pl-6 mb-4 text-neutral-700 space-y-2">
              <li>
                <strong>Vercel Analytics:</strong> For website performance monitoring
              </li>
              <li>
                <strong>GitHub:</strong> For hosting our open-source code repository
              </li>
            </ul>
            <p className="text-neutral-700 leading-relaxed mb-4">
              These services have their own privacy policies governing their use of information.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-neutral-900 mb-4">
              Cookies
            </h2>
            <p className="text-neutral-700 leading-relaxed mb-4">
              Our documentation website may use cookies to enhance your browsing experience, such as remembering your theme preference (light/dark mode). These cookies do not track personal information and are used solely for functionality purposes.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-neutral-900 mb-4">
              Children's Privacy
            </h2>
            <p className="text-neutral-700 leading-relaxed mb-4">
              USMDS is a developer tool and is not directed at children under the age of 13. We do not knowingly collect personal information from children.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-neutral-900 mb-4">
              Your Rights
            </h2>
            <p className="text-neutral-700 leading-relaxed mb-4">
              As USMDS does not collect personal data, there is no personal information to access, modify, or delete. If you have questions about data practices on our documentation website, please contact us.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-neutral-900 mb-4">
              Changes to This Policy
            </h2>
            <p className="text-neutral-700 leading-relaxed mb-4">
              We may update this privacy policy from time to time. Any changes will be posted on this page with an updated "Last Updated" date.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-neutral-900 mb-4">
              Open Source
            </h2>
            <p className="text-neutral-700 leading-relaxed mb-4">
              USMDS is open source and available on GitHub. You can review our code, contribute to the project, or fork it for your own use. Our transparency extends to our privacy practices.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-neutral-900 mb-4">
              Contact Us
            </h2>
            <p className="text-neutral-700 leading-relaxed mb-4">
              If you have any questions about this privacy policy, please contact us:
            </p>
            <ul className="list-none mb-4 text-neutral-700 space-y-2">
              <li>
                <strong>GitHub:</strong>{" "}
                <a
                  href="https://github.com/blencorp/react-native-usmds"
                  className="text-blue-600 hover:text-blue-800 underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  github.com/blencorp/react-native-usmds
                </a>
              </li>
              <li>
                <strong>Issues:</strong> Open an issue on our GitHub repository for any privacy-related questions
              </li>
            </ul>
          </section>

          <section className="mb-8 p-6 bg-neutral-50 rounded-lg border border-neutral-200">
            <h2 className="text-2xl font-semibold text-neutral-900 mb-4">
              For Developers Using USMDS
            </h2>
            <p className="text-neutral-700 leading-relaxed mb-4">
              If you integrate USMDS components into your own applications, you are responsible for your own privacy policy and data practices. USMDS components do not collect or transmit any data on their own, but your application's overall data handling is your responsibility.
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}
