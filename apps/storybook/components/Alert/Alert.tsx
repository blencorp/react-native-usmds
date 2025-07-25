import { ComponentPropsWithoutRef, ElementRef, forwardRef } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { Icon } from "../Icon/Icon";
import { cn } from "../../lib/utils";

const alertVariants = cva("flex flex-row items-start p-4 w-[329px]", {
  variants: {
    variant: {
      info: "bg-info-lighter",
      error: "bg-error-lighter",
      warning: "bg-warning-lighter",
      success: "bg-success-lighter",
      emergency: "bg-emergency",
    },
    alertStyle: {
      default: "gap-[15px]",
      "no-header": "gap-[15px]",
      list: "gap-[15px]",
      slim: "gap-3",
      "no-icon": "gap-[10px]",
    },
  },
  defaultVariants: {
    variant: "info",
    alertStyle: "default",
  },
});

const alertTextVariants = cva(
  "font-sans text-[22px] leading-[28px] font-bold text-base-ink mb-2",
  {
    variants: {
      variant: {
        info: "text-base-ink",
        error: "text-base-ink",
        warning: "text-base-ink",
        success: "text-base-ink",
        emergency: "text-primary-foreground",
      },
    },
  }
);

interface AlertProps
  extends ComponentPropsWithoutRef<"div">,
    VariantProps<typeof alertVariants> {
  title?: string;
  description: {
    title?: string;
    body?: string;
    link?: string;
    messages?: Array<{
      text: string;
      link?: string;
      suffix?: string;
    }>;
  };
  showIcon?: boolean;
  className?: string;
  variant?: "info" | "error" | "warning" | "success" | "emergency";
  alertStyle?: "default" | "no-header" | "list" | "slim" | "no-icon";
}

const Alert = forwardRef<ElementRef<"div">, AlertProps>(
  (
    {
      className,
      variant,
      alertStyle,
      title,
      description,
      showIcon = true,
      style,
      ...props
    },
    ref
  ) => {
    const isNoIcon = alertStyle === "no-icon";
    const shouldShowIcon = showIcon && !isNoIcon;

    const renderDescription = () => {
      if (alertStyle === "list" && description.messages) {
        return (
          <div className="space-y-4">
            {description.messages.map((message, index) => (
              <div key={index} className="flex flex-row items-start">
                <span
                  className={cn(
                    "text-base leading-[24px] mr-2",
                    variant === "emergency"
                      ? "text-primary-foreground"
                      : "text-base-ink"
                  )}
                >
                  •
                </span>
                <p
                  className={cn(
                    "text-base leading-[24px] flex-1",
                    variant === "emergency"
                      ? "text-primary-foreground"
                      : "text-base-ink"
                  )}
                >
                  {message.text}{" "}
                  {message.link && (
                    <a
                      href={message.link}
                      className={cn(
                        "underline",
                        variant === "emergency"
                          ? "text-primary-foreground"
                          : "text-primary"
                      )}
                    >
                      {message.link}
                    </a>
                  )}
                  {message.suffix}
                </p>
              </div>
            ))}
          </div>
        );
      }

      return (
        <p
          className={cn(
            "text-base leading-5",
            variant === "emergency"
              ? "text-primary-foreground"
              : "text-base-ink"
          )}
        >
          {description.title && <strong>{description.title} </strong>}
          {description.body}{" "}
          {description.link && (
            <a
              href={description.link}
              className={cn(
                "underline",
                variant === "emergency"
                  ? "text-primary-foreground"
                  : "text-primary"
              )}
            >
              {description.link}
            </a>
          )}
        </p>
      );
    };

    return (
      <div
        ref={ref}
        role="alert"
        style={style}
        className={cn(alertVariants({ variant, alertStyle }), className)}
        {...props}
      >
        {shouldShowIcon && (
          <div
            className={cn(
              "flex-shrink-0 rounded-full flex items-center justify-center",
              alertStyle === "slim" ? "w-6 h-6" : "w-8 h-8",
              variant === "emergency" ? "bg-transparent" : "bg-base-ink"
            )}
          >
            <Icon
              name="info"
              className={cn(
                variant === "emergency"
                  ? "text-emergency fill-primary-foreground"
                  : "text-primary-foreground fill-base-ink"
              )}
              size={alertStyle === "slim" ? 24 : 32}
            />
          </div>
        )}

        <div
          className={cn(
            "flex flex-col",
            alertStyle === "no-icon" ? "w-[297px]" : "w-[250px]"
          )}
        >
          {title && (
            <p className={alertTextVariants({ variant })}>
              {title}
            </p>
          )}
          {renderDescription()}
        </div>
      </div>
    );
  }
);

Alert.displayName = "Alert";

export { Alert, type AlertProps };
