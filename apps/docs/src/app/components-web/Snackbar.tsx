import { FC, ReactNode } from "react";
import clsx from "clsx";

interface SnackbarProps {
  message: ReactNode;
  type?: "info" | "error" | "success";
  className?: string;
}

export const Snackbar: FC<SnackbarProps> = ({ message, type = "info", className }) => {
  const types = {
    info: "bg-blue-600",
    success: "bg-green-600",
    error: "bg-red-600"
  };

  return (
    <div className={clsx("text-white px-4 py-2 rounded", types[type], className)}>
      {message}
    </div>
  );
};