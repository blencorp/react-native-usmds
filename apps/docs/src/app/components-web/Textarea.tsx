import { FC } from "react";
import clsx from "clsx";

interface TextareaProps {
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  placeholder?: string;
  className?: string;
}

export const Textarea: FC<TextareaProps> = ({ value, onChange, placeholder, className }) => (
  <textarea
    value={value}
    onChange={onChange}
    placeholder={placeholder}
    className={clsx("w-full border rounded p-2", className)}
  />
);