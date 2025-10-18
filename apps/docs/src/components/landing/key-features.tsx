import {
  Accessibility,
  Layers,
  Palette,
  Code2,
  Wrench,
  Rocket,
} from "lucide-react";

export default function KeyFeatures() {
  const data = [
    {
      title: "Accessibility First",
      desc: "WCAG 2.1 AA and Section 508 compliant components that work seamlessly with TalkBack, VoiceOver, and keyboard navigation.",
      Icon: Accessibility,
    },
    {
      title: "Cross-Platform Components",
      desc: "Build once, deploy everywhere — iOS, Android, and Web with consistent visuals and behavior across all platforms.",
      Icon: Layers,
    },
    {
      title: "Customizable Design Tokens",
      desc: "Use NativeWind themes and design tokens to easily brand and customize components for your agency or department's visual identity.",
      Icon: Palette,
    },
    {
      title: "Production Ready",
      desc: "Tested components with comprehensive unit tests, integration testing, and detailed documentation ready for enterprise deployment at scale.",
      Icon: Rocket,
    },
    {
      title: "Open-Source & Extensible",
      desc: "MIT-licensed with a transparent, well-documented codebase that enables teams to contribute, extend, and customize components as needed.",
      Icon: Code2,
    },
    {
      title: "Developer-Ready",
      desc: "TypeScript-based, lightweight architecture that's fully compatible with modern React Native projects and development workflows.",
      Icon: Wrench,
    },
  ];

  return (
    <section className="bg-white">
      <div className="mx-auto max-w-6xl px-4 py-20">
        <div className="mb-4">
          <h2 className="text-black">Key Features</h2>
          <p className="mt-2 max-w-2xl text-neutral-700 text-lg">
            Everything you need to ship mobile apps that meet Federal standards.
          </p>
        </div>
        <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2">
          {data.map(({ title, desc, Icon }) => (
            <div key={title} className="flex flex-col gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-md text-black">
                <Icon className="h-8 w-8" />
              </div>
              <div>
                <h3 className="text-black">{title}</h3>
                <div className="mt-1 leading-6 text-neutral-500">{desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
