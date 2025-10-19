import Image from "next/image";

import SectionContent from "./section-content";

import blen from "../../../images/logos/blen.png";

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
            <div className="text-black text-lg">{company.description}</div>
          )}
        </div>
      ))}

      <div className="text-neutral-500">
        <hr className="my-8 border-gray-200" />
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
        . Ad Hoc is a digital services company that emerged from the successful
        rescue of HealthCare.gov and helps federal government agencies deliver
        people-centric experiences that are efficient, accessible, reliable, and
        usable.{" "}
        <a
          href="https://www.adhoc.team"
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary underline hover:no-underline"
        >
          Learn more about Ad Hoc <span>&#8599;</span>
        </a>
      </div>
    </SectionContent>
  );
}
