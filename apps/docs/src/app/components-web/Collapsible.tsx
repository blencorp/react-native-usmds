import { FC, ReactNode, useState } from "react";
import clsx from "clsx";

interface CollapsibleProps {
  title: string;
  children: ReactNode;
  className?: string;
}

export const Collapsible: FC<CollapsibleProps> = ({ title, children, className }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className={clsx("border rounded", className)}>
      <button
        className="w-full text-left px-4 py-2 bg-gray-100"
        onClick={() => setOpen(!open)}
      >
        {title}
      </button>
      {open && <div className="px-4 py-2">{children}</div>}
    </div>
  );
};