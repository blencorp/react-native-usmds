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
    <footer className="bg-slate-800 text-white py-12 mt-6" role="contentinfo">
      <div className="max-w-screen-xl mx-auto px-4 md:px-6 lg:px-8">
        {/* Government Links */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-wrap justify-center gap-6 mb-8">
            {links.map((link) => (
              <Link key={link.name} href={link.href} passHref legacyBehavior>
                <Button
                  asChild
                  variant="link"
                  className="text-gray-300 hover:text-white underline-offset-4 focus-visible:outline-2 focus-visible:outline-white focus-visible:outline-offset-2"
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

          <div className="text-center text-sm text-gray-400">
            <p>
              © 2024 U.S. Mobile Design System. Built for the federal
              government.
            </p>
            <p className="mt-2">
              An official website of the United States government managed by the{" "}
              <a
                href="https://www.gsa.gov"
                className="text-gray-300 hover:text-white underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                General Services Administration
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
