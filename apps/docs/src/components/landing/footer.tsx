import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const links = [
  {
    name: "Privacy Policy",
    href: "https://www.gsa.gov/website-information/website-policies#privacy",
    external: true,
  },
  {
    name: "Accessibility Statement",
    href: "https://www.gsa.gov/website-information/accessibility-statement",
    external: true,
  },
  {
    name: "FOIA Requests",
    href: "https://www.gsa.gov/reference/freedom-of-information-act-foia",
    external: true,
  },
  {
    name: "No Fear Act Data",
    href: "https://www.gsa.gov/reference/civil-rights-programs/the-no-fear-act",
    external: true,
  },
  {
    name: "Office of the Inspector General",
    href: "https://www.gsaig.gov/",
    external: true,
  },
  {
    name: "USA.gov",
    href: "https://www.usa.gov",
    external: true,
  },
];

export const Footer = () => {
  return (
    <footer className="bg-gray-800 dark:bg-black border-t border-t-gray-300 dark:border-t-gray-800 py-6 mt-6">
      <div className="container mx-auto px-4 text-center text-sm text-gray-300">
        <div className="flex flex-wrap justify-center gap-4 mb-4">
          {links.map((link) => (
            <Link key={link.name} href={link.href} passHref legacyBehavior>
              <Button
                asChild
                variant="link"
                className="text-gray-300 hover:text-white underline-offset-4"
              >
                <a
                  target={link.external ? "_blank" : "_self"}
                  rel={link.external ? "noopener noreferrer" : undefined}
                >
                  {link.name}
                </a>
              </Button>
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
