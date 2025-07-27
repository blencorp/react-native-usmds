import { FC } from "react";
import clsx from "clsx";

interface StepIndicatorProps {
  steps: string[];
  current: number;
  className?: string;
}

export const StepIndicator: FC<StepIndicatorProps> = ({ steps, current, className }) => (
  <div className={clsx("flex gap-2", className)}>
    {steps.map((step, idx) => (
      <div key={idx} className={clsx("px-2 py-1 rounded", {
        "bg-blue-600 text-white": idx === current,
        "bg-gray-200": idx !== current
      })}>
        {step}
      </div>
    ))}
  </div>
);