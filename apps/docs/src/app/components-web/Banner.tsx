// components-web/Banner.tsx
import { FC, ReactNode } from "react";
import clsx from "clsx";

interface BannerProps {
  children: ReactNode;
  type?: "info" | "warning" | "success" | "error";
  className?: string;
}

export const Banner: FC<BannerProps> = ({
  children,
  type = "info",
  className,
}) => {
  const types = {
    info: "bg-blue-100 text-blue-800",
    warning: "bg-yellow-100 text-yellow-800",
    success: "bg-green-100 text-green-800",
    error: "bg-red-100 text-red-800",
  };

  return (
    <div className={clsx("p-4 rounded", types[type], className)}>
      {children}
    </div>
  );
};
