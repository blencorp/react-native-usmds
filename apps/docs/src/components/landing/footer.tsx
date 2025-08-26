import Link from "next/link";
import { Button } from "@/components/ui/button";

const links = [
  {
    name: "Works",
    href: "https://www.blencorp.com/works",
    external: true,
  },
  {
    name: "Capabilities",
    href: "https://www.blencorp.com/capabilities",
    external: true,
  },
  {
    name: "Company",
    href: "https://www.blencorp.com/company",
    external: true,
  },
  {
    name: "Ideas",
    href: "https://www.blencorp.com/blog",
    external: true,
  },
  {
    name: "Careers",
    href: "https://www.blencorp.com/careers",
    external: true,
  },
  {
    name: "Connect",
    href: "https://www.blencorp.com/connect",
    external: true,
  },
];

export const Footer = () => {
  return (
    <footer className="bg-slate-800 dark:bg-[oklch(0.145_0_0)] text-white py-12" role="contentinfo">
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
              © 2025 BLEN, Inc. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
