// components-web/Avatar.tsx
import { FC } from "react";
import clsx from "clsx";

interface AvatarProps {
  src: string;
  alt?: string;
  size?: "sm" | "md" | "lg";
  className?: string;
}

export const Avatar: FC<AvatarProps> = ({
  src,
  alt = "",
  size = "md",
  className,
}) => {
  const sizes = {
    sm: "w-8 h-8",
    md: "w-12 h-12",
    lg: "w-16 h-16",
  };

  return (
    <img
      src={src}
      alt={alt}
      className={clsx("rounded-full object-cover", sizes[size], className)}
    />
  );
};
