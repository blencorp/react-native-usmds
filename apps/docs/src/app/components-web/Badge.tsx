// components-web/Badge.tsx
import { FC } from "react";
import clsx from "clsx";

interface BadgeProps {
  label: string;
  color?: "green" | "red" | "blue";
  className?: string;
}

export const Badge: FC<BadgeProps> = ({ label, color = "blue", className }) => {
  const colorClasses = {
    green: "bg-green-100 text-green-800",
    red: "bg-red-100 text-red-800",
    blue: "bg-blue-100 text-blue-800",
  };

  return (
    <span
      className={clsx(
        "inline-block text-xs font-semibold px-2.5 py-0.5 rounded",
        colorClasses[color],
        className
      )}
    >
      {label}
    </span>
  );
};
