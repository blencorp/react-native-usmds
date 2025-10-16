import Image from "next/image";
import SectionContent from "./section-content";

import uswds from "../../../images/logos/uswds.png";
import expo from "../../../images/logos/expo.png";
import reactNative from "../../../images/logos/react-native.png";
import tailwind from "../../../images/logos/tailwind.png";
import rnr from "../../../images/logos/react-native-reusables.png";
import shadcn from "../../../images/logos/shadcn-ui.png";

const actions = [
  {
    key: "uswds",
    src: uswds,
    alt: "United States Web Design System",
  },
  {
    key: "reactNative",
    src: reactNative,
    alt: "React Native",
  },
  {
    key: "tailwind",
    src: tailwind,
    alt: "Tailwind CSS",
  },
  {
    key: "expo",
    src: expo,
    alt: "Expo",
  },
  {
    key: "rnr",
    src: rnr,
    alt: "React Native Reusables",
  },
  {
    key: "shadcn/ui",
    src: shadcn,
    alt: "shadcn/ui",
  },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function OpenSourceStrip() {
  return (
    <SectionContent
      title="Modern open source & public standards"
      subtitle="Built with React Native, Tailwind / NativeWind, and aligned with the U.S. Web Design System (USWDS), USMDS brings consistency, compliance, and speed to federal, state, and local app development."
      titleClassName="text-black"
      style={{ backgroundColor: "var(--section-background-color-alt)" }}
    >
      <div className="divide-y divide-gray-200 overflow-hidden rounded-lg bg-gray-200 shadow-sm sm:grid sm:grid-cols-2 sm:divide-y-0">
        {actions.map((action, actionIdx) => (
          <div
            key={action.key}
            className={classNames(
              actionIdx === 0
                ? "rounded-tl-lg rounded-tr-lg sm:rounded-tr-none"
                : "",
              actionIdx === 1 ? "sm:rounded-tr-lg" : "",
              actionIdx === actions.length - 2 ? "sm:rounded-bl-lg" : "",
              actionIdx === actions.length - 1
                ? "rounded-br-lg rounded-bl-lg sm:rounded-bl-none"
                : "",
              "group relative border-gray-200 bg-white px-8 py-12 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600 sm:odd:not-nth-last-2:border-b sm:even:border-l sm:even:not-last:border-b mt-px"
            )}
          >
            <Image
              src={action.src}
              alt={action.alt}
              className="h-16 w-full object-contain"
            />
          </div>
        ))}
      </div>
    </SectionContent>
  );
}
