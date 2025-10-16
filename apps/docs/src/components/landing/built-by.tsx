import Image from "next/image";

import SectionContent from "./section-content";

import blen from "../../../images/logos/blen.png";
import adHoc from "../../../images/logos/adhoc.png";

const companies = [
  {
    name: "BLEN",
    image: blen,
    description:
      "BLEN is a digital services company that provides Emerging Technology (ML/AI, RPA), Digital Modernization (Legacy to Cloud) and Human-Centered Web/Mobile Design and Development. We are also an SBA Certified SDVOSB, 8(a) and HUBZone small business.",
  },
];

export default function BuiltBy() {
  return (
    <SectionContent
      title="Built by digital services experts"
      titleClassName="text-black"
    >
      {companies.map((company, index) => (
        <div key={index} className="mb-8">
          <Image
            src={company.image}
            alt={company.name}
            height={40}
            className="mb-2"
          />

          <p className="text-neutral-600">{company.description}</p>
        </div>
      ))}
    </SectionContent>
  );
}
