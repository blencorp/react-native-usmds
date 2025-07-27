import { FC, ReactNode } from "react";
import clsx from "clsx";

interface LinkProps {
  href: string;
  children: ReactNode;
  className?: string;
}

export const Link: FC<LinkProps> = ({ href, children, className }) => (
  <a href={href} className={clsx("text-blue-600 hover:underline", className)}>
    {children}
  </a>
);