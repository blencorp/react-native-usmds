import { FC } from "react";

interface ToggleProps {
  checked: boolean;
  onChange: () => void;
}

export const Toggle: FC<ToggleProps> = ({ checked, onChange }) => (
  <label className="flex items-center cursor-pointer gap-2">
    <input type="checkbox" checked={checked} onChange={onChange} className="hidden" />
    <span className={
      "inline-block w-10 h-6 rounded-full transition " +
      (checked ? "bg-blue-500" : "bg-gray-300")
    }>
      <span className={
        "inline-block w-4 h-4 rounded-full bg-white transform transition " +
        (checked ? "translate-x-5" : "translate-x-1")
      } />
    </span>
  </label>
);