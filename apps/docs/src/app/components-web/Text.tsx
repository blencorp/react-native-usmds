import { FC, ReactNode } from "react";
import clsx from "clsx";

interface TextProps {
  children: ReactNode;
  className?: string;
}

export const Text: FC<TextProps> = ({ children, className }) => (
  <p className={clsx("text-base text-gray-800", className)}>{children}</p>
);