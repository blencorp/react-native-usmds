import Image from "next/image";

import SectionContent from "./section-content";

import blen from "../../../images/logos/blen.webp";
import adhoc from "../../../images/logos/adhoc.webp";

const companies = [
  {
    name: "BLEN",
    image: blen,
    description: (
      <>
        BLEN is a digital services company that provides Emerging Technology
        (ML/AI, RPA), Digital Modernization (Legacy to Cloud) and Human-Centered
        Web/Mobile Design and Development. BLEN is an SBA Certified
        Service-Disabled Veteran-Owned Small Business (SDVOSB), 8(a) and
        HUBZone.{" "}
        <a
          href="https://www.blencorp.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary underline hover:no-underline"
        >
          Learn more about BLEN <span>&#8599;</span>
        </a>
      </>
    ),
  },
];

export default function BuiltBy() {
  return (
    <SectionContent
      title="Built by digital services experts"
      subtitle="Created and maintained by teams with deep government technology experience"
      titleClassName="text-black"
    >
      {companies.map((company, index) => (
        <div key={index} className="mb-8">
          {company.image && company.name && (
            <Image
              src={company.image}
              alt={company.name}
              height={40}
              className="mb-4"
            />
          )}

          {company.description && (
            <div className="text-neutral-950 text-lg">
              {company.description}
            </div>
          )}
        </div>
      ))}

      <div className="flex flex-col gap-4">
        <div className="text-neutral-500">
          <hr className="mt-0 my-8 border-gray-200" />
          <Image src={adhoc} alt="Ad Hoc" height={20} className="mb-4" />
          The project was inspired by Ad Hoc's{" "}
          <a
            href="https://adhoc.team/2024/08/13/us-mobile-design-system/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary underline hover:no-underline"
          >
            blog post about the need for a US Mobile Design System{" "}
            <span>&#8599;</span>
          </a>
          . and and its{" "}
          <a
            href="https://adhoc.team/2024/08/13/us-mobile-design-system/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary underline hover:no-underline"
          >
            associated Figma Community Library <span>&#8599;</span>
          </a>
          .
        </div>
        <div className="text-neutral-500">
          Ad Hoc is a digital services company focused on building what’s next
          in digital government. Ad Hoc delivers people-centric experiences that
          are efficient, accessible, and usable. Learn more about{" "}
          <a
            href="https://www.adhoc.team"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary underline hover:no-underline"
          >
            Ad Hoc <span>&#8599;</span>
          </a>
        </div>
      </div>
    </SectionContent>
  );
}
