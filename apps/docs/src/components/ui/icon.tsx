"use client";

import * as React from "react";
import { LucideIcon, Check, X, Info } from "lucide-react";

interface IconProps {
  name: "check" | "close" | "info";
  size?: number;
  className?: string;
}

const icons: Record<string, LucideIcon> = {
  check: Check,
  close: X,
  info: Info,
};

export function Icon({ name, size = 24, className }: IconProps) {
  const Component = icons[name];
  if (!Component) return null;

  return <Component size={size} className={`text-foreground ${className || ""}`} />;
}
