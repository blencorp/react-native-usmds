import { FC } from "react";
import clsx from "clsx";

interface TextInputProps {
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  className?: string;
}

export const TextInput: FC<TextInputProps> = ({ value, onChange, placeholder, className }) => (
  <input
    type="text"
    value={value}
    onChange={onChange}
    placeholder={placeholder}
    className={clsx("w-full border rounded p-2", className)}
  />
);