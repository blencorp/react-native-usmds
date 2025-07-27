import { FC, ReactNode } from "react";
import clsx from "clsx";

interface DarkProps {
  children: ReactNode;
  enabled: boolean;
  className?: string;
}

export const Dark: FC<DarkProps> = ({ children, enabled, className }) => (
  <div className={clsx(enabled ? "bg-black text-white" : "bg-white text-black", className)}>
    {children}
  </div>
);