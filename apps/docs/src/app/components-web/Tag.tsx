import { FC, ReactNode } from "react";
import clsx from "clsx";

interface TagProps {
  children: ReactNode;
  color?: "default" | "success" | "danger";
  className?: string;
}

export const Tag: FC<TagProps> = ({ children, color = "default", className }) => {
  const colors = {
    default: "bg-gray-200 text-gray-800",
    success: "bg-green-200 text-green-800",
    danger: "bg-red-200 text-red-800"
  };

  return (
    <span className={clsx("px-2 py-1 rounded text-sm", colors[color], className)}>
      {children}
    </span>
  );
};