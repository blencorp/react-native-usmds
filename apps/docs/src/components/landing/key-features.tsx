import { Accessibility, Layers, Palette, Code2, Wrench, Rocket } from "lucide-react"

export default function KeyFeatures() {
  const data = [
    {
      title: "Accessibility First",
      desc:
        "WCAG 2.1 AA and Section 508 compliant — works with TalkBack, VoiceOver, and keyboard navigation.",
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
      title: "Open-Source & Extensible",
      desc: "MIT-licensed, transparent codebase for teams to contribute and extend.",
      Icon: Code2,
    },
    {
      title: "Developer-Ready",
      desc: "TypeScript-based, lightweight, and compatible with modern React Native projects.",
      Icon: Wrench,
    },
    {
      title: "Developer-Ready",
      desc: "TypeScript-based, lightweight, and compatible with modern React Native projects.",
      Icon: Rocket,
    },
  ]

  return (
    <section className="bg-[#eaf3ff]">
      <div className="mx-auto max-w-6xl px-4 py-14">
        <h2>Key Features</h2>
        <p className="mt-1 max-w-2xl text-neutral-700">
          Everything you need to ship mobile apps that meet Federal standards.
        </p>
        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
          {data.map(({ title, desc, Icon }, i) => (
            <div key={i} className="flex gap-3 p-4">
              <div className="mt-1 flex h-8 w-8 items-center justify-center rounded-md bg-blue-50 text-blue-700">
                <Icon className="h-8 w-8" />
              </div>
              <div>
                <h3>{title}</h3>
                <p className="mt-1 leading-6 text-neutral-600">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}


