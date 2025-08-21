// components/ButtonLink.tsx
"use client";

import Link from "next/link";
import { FC, ReactNode } from "react";

interface DemoButtonProps {
  href: string;
  children?: ReactNode;
  marginTop?: string;    // e.g. "-mt-4" or "mt-2"
  marginBottom?: string; // e.g. "-mb-6" or "mb-0"
  className?: string;    // optional extra classes for the wrapper
}

const DemoButton: FC<DemoButtonProps> = ({
  href,
  children,
  marginTop = "-mt-8",
  marginBottom = "-mb-6",
  className = "",
}) => {
  return (
    <div className={`${marginTop} ${marginBottom} ${className}`}>
      <Link
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center justify-center whitespace-nowrap font-medium ring-offset-background cursor-pointer transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-secondary text-secondary-foreground hover:bg-secondary/80 h-6 rounded-md px-2 text-xs gap-1.5 no-underline"
      >
        <span>{children ?? "Demo"}</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="12"
          height="12"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-external-link"
          aria-hidden="true"
          style={{ margin: 0 }}
        >
          <path d="M15 3h6v6"></path>
          <path d="M10 14 21 3"></path>
          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
        </svg>
      </Link>
    </div>
  );
};

export  {DemoButton};
