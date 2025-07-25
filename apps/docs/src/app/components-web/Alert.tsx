"use client";
import { FC } from "react";
import clsx from "clsx";

type AlertStyle = "default" | "no-header" | "list" | "slim" | "no-icon";
type Variant = "info" | "error" | "warning" | "success" | "emergency";

interface Message {
  text: string;
  link?: string;
  suffix?: string;
}

interface AlertProps {
  title?: string;
  description: {
    title?: string;
    body?: string;
    link?: string;
    messages?: Message[];
  };
  showIcon?: boolean;
  className?: string;
  variant?: Variant;
  alertStyle?: AlertStyle;
}

const variantClasses: Record<Variant, string> = {
  info: "bg-blue-100 text-blue-800",
  error: "bg-red-100 text-red-800",
  warning: "bg-yellow-100 text-yellow-800",
  success: "bg-green-100 text-green-800",
  emergency: "bg-black text-white",
};

const iconEmoji: Record<Variant, string> = {
  info: "ℹ️",
  error: "❌",
  warning: "⚠️",
  success: "✅",
  emergency: "🚨",
};

export const Alert: FC<AlertProps> = ({
  title,
  description,
  showIcon = true,
  className,
  variant = "info",
  alertStyle = "default",
}) => {
  const shouldShowIcon = showIcon && alertStyle !== "no-icon";

  const renderDescription = () => {
    if (alertStyle === "list" && description.messages) {
      return (
        <ul className="space-y-2 ml-4 list-disc">
          {description.messages.map((msg, i) => (
            <li key={i}>
              {msg.text}{" "}
              {msg.link && (
                <a className="underline" href={msg.link}>
                  {msg.link}
                </a>
              )}
              {msg.suffix}
            </li>
          ))}
        </ul>
      );
    }

    return (
      <p className="text-sm leading-5">
        {description.title && <strong>{description.title} </strong>}
        {description.body}{" "}
        {description.link && (
          <a className="underline" href={description.link}>
            {description.link}
          </a>
        )}
      </p>
    );
  };

  return (
    <div
      className={clsx(
        "p-4 rounded-md w-[329px] flex gap-4",
        variantClasses[variant],
        className
      )}
    >
      {shouldShowIcon && (
        <div className="text-xl" aria-hidden>
          {iconEmoji[variant]}
        </div>
      )}

      <div className={alertStyle === "no-icon" ? "w-[297px]" : "w-[250px]"}>
        {title && alertStyle !== "no-header" && (
          <p className="font-bold text-base mb-1">{title}</p>
        )}
        {renderDescription()}
      </div>
    </div>
  );
};
