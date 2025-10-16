import SectionContent from "./section-content";

export default function HowItWorks() {
  const bullets = [
    "Accessibility First",
    "Accessibility First",
    "Accessibility First",
    "Accessibility First",
  ];

  return (
    <SectionContent
      title="How it works"
      subtitle="Built on a Simple, Scalable Architecture"
      sectionClassName="bg-black"
      titleClassName="text-white"

    >
      <div className="text-neutral-600">
        {bullets.map((b, i) => (
          <div key={i} className="mt-4">
            <div className="text-white font-bold">{b}</div>
            <p className="text-white/80">
              WCAG 2.1 AA and Section 508 compliant — works with TalkBack,
              VoiceOver, and keyboard navigation.
            </p>
          </div>
        ))}
      </div>
    </SectionContent>
  );
}
