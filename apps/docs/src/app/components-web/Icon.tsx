import { FC } from "react";
import clsx from "clsx";

interface IconProps {
  name: string;
  size?: number;
  className?: string;
}

export const Icon: FC<IconProps> = ({ name, size = 20, className }) => (
  <i className={clsx(`icon-${name}`, className)} style={{ fontSize: size }} />
);