// components-web/Input.tsx
import { FC } from "react";

interface InputProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  className?: string;
}

export const Input: FC<InputProps> = ({ value, onChange, placeholder, className }) => {
  return (
    <input
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className={`border px-3 py-2 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500 ${className}`}
    />
  );
};
