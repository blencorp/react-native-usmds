import type { ReactNode } from "react";
import SectionContent from "./section-content";

type Step = {
  title: string;
  description: ReactNode;
};

const steps: Step[] = [
  {
    title: "1. Initialize USMDS",
    description: (
      <>
        Run <code className="font-mono text-sm text-white/90">npx usmds init</code> to scaffold React Native
        USMDS. The CLI sets up configuration, installs dependencies, and applies the default USWDS theme.
      </>
    ),
  },
  {
    title: "2. Import Global Styles",
    description: (
      <>
        Add <code className="font-mono text-sm text-white/90">import &quot;./global.css&quot;</code> to your app entry file (e.g.{" "}
        <code className="font-mono text-sm text-white/90">App.tsx</code> or <code className="font-mono text-sm text-white/90">_layout.tsx</code>) so design tokens
        and base styles are loaded everywhere.
      </>
    ),
  },
  {
    title: "3. Add the Portal Host",
    description: (
      <>
        Include <code className="font-mono text-sm text-white/90">&lt;PortalHost /&gt;</code> at the root of your layout to enable overlays like dialogs,{" "}
        popovers, tooltips, and dropdowns.
      </>
    ),
  },
  {
    title: "4. Configure Tailwind & Utilities",
    description: (
      <>
        Update <code className="font-mono text-sm text-white/90">tailwind.config.js</code> with the NativeWind presets and helper utilities (such as{" "}
        <code className="font-mono text-sm text-white/90">lib/utils.ts</code>) for consistent styling and class merging.
      </>
    ),
  },
  {
    title: "5. Add & Customize Components",
    description: (
      <>
        Generate UI with the CLI, for example,{" "}
        <code className="font-mono text-sm text-white/90">npx usmds add button alert card</code>&mdash;then tune colors, typography, and variants in{" "}
        <code className="font-mono text-sm text-white/90">global.css</code> to match your brand.
      </>
    ),
  },
];

export default function GetStarted() {
  return (
    <SectionContent
      title="Get started"
      subtitle="Follow these five steps to launch USMDS in your project"
      sectionClassName="bg-black"
      titleClassName="text-white"
      subtitleClassName="text-white/50"
    >
      {steps.map((step, index) => (
        <div key={index} className="mb-8 last:mb-0">
          <h3 className="text-white font-bold">{step.title}</h3>
          <p className="text-white/80 mt-3 leading-relaxed">{step.description}</p>
        </div>
      ))}
    </SectionContent>
  );
}
