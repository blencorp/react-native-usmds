import { FC } from "react";

interface RadioButtonProps {
  name: string;
  value: string;
  label: string;
  checked?: boolean;
  onChange?: () => void;
}

export const RadioButton: FC<RadioButtonProps> = ({ name, value, label, checked, onChange }) => (
  <label className="flex items-center gap-2">
    <input type="radio" name={name} value={value} checked={checked} onChange={onChange} />
    {label}
  </label>
);