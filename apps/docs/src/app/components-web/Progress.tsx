import { FC } from "react";
import clsx from "clsx";

interface ProgressProps {
  value: number;
  max?: number;
  className?: string;
}

export const Progress: FC<ProgressProps> = ({ value, max = 100, className }) => (
  <div className={clsx("w-full bg-gray-200 rounded", className)}>
    <div
      className="bg-blue-500 h-2 rounded"
      style={{ width: `${(value / max) * 100}%` }}
    />
  </div>
);