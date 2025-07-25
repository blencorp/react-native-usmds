// components-web/Card.tsx
import { FC, ReactNode } from "react";
import clsx from "clsx";

interface CardProps {
  children: ReactNode;
  className?: string;
}

export const Card: FC<CardProps> = ({ children, className }) => {
  return (
    <div
      className={clsx(
        "rounded-lg border bg-white p-6 shadow-md",
        className
      )}
    >
      {children}
    </div>
  );
};
