// components-web/Button.tsx
import { FC, ReactNode } from "react";
import clsx from "clsx";

interface ButtonProps {
  children: ReactNode;
  onClick?: () => void;
  variant?: "default" | "outline";
  className?: string;
}

export const Button: FC<ButtonProps> = ({
  children,
  onClick,
  variant = "default",
  className,
}) => {
  const base = "px-4 py-2 rounded-md font-medium transition";
  const variants = {
    default: "bg-blue-600 text-white hover:bg-blue-700",
    outline: "border border-blue-600 text-blue-600 hover:bg-blue-50",
  };

  return (
    <button onClick={onClick} className={clsx(base, variants[variant], className)}>
      {children}
    </button>
  );
};
