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
      desc: "WCAG 2.1 AA and Section 508 compliant — works with TalkBack, VoiceOver, and keyboard navigation.",
      Icon: Accessibility,
    },
    {
      title: "Cross-Platform Components",
      desc: "Build once, deploy on iOS, Android, and Web with consistent visuals.",
      Icon: Layers,
    },
    {
      title: "Customizable Design Tokens",
      desc: "Use NativeWind themes to easily brand agency or department apps.",
      Icon: Palette,
    },
    {
      title: "Production Ready",
      desc: "Fully tested components with comprehensive testing and documentation for enterprise deployment.",
      Icon: Rocket,
    },
    {
      title: "Open-Source & Extensible",
      desc: "MIT-licensed, transparent codebase for teams to contribute and extend.",
      Icon: Code2,
    },
    {
      title: "Developer-Ready",
      desc: "TypeScript-based, lightweight, and compatible with modern React Native projects.",
      Icon: Wrench,
    },
  ];

  return (
    <section className="bg-white">
      <div className="mx-auto max-w-6xl px-4 py-20">
        <div className="mb-4">
          <h2 className="text-black">Key Features</h2>
          <p className="mt-1 max-w-2xl text-neutral-700 text-lg">
            Everything you need to ship mobile apps that meet Federal standards.
          </p>
        </div>
        <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2">
          {data.map(({ title, desc, Icon }, i) => (
            <div key={i} className="flex flex-col gap-3">
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
