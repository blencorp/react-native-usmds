// components-web/Checkbox.tsx
import { FC } from "react";

interface CheckboxProps {
  checked?: boolean;
  onChange?: () => void;
  label?: string;
}

export const Checkbox: FC<CheckboxProps> = ({ checked, onChange, label }) => (
  <label className="flex items-center gap-2">
    <input type="checkbox" checked={checked} onChange={onChange} />
    {label}
  </label>
);
