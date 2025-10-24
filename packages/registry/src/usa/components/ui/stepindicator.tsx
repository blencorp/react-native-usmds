import { ComponentPropsWithoutRef, forwardRef } from "react";
import { View, Text } from "react-native";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/registry/usa/lib/utils";

const stepIndicatorVariants = cva(
  "flex flex-col items-center justify-center mx-auto",
  {
    variants: {
      size: {
        default: "w-[329px] h-[68px]",
        small: "w-[329px] h-[50px]",
      },
    },
    defaultVariants: {
      size: "default",
    },
  },
);

const segmentVariants = cva("flex flex-row items-center gap-1", {
  variants: {
    state: {
      default: "bg-muted",
      active: "bg-primary",
      complete: "bg-secondary",
    },
    size: {
      default: "h-12",
      small: "h-8",
    },
  },
  defaultVariants: {
    state: "default",
    size: "default",
  },
});

interface StepIndicatorProps
  extends ComponentPropsWithoutRef<typeof View>,
    VariantProps<typeof stepIndicatorVariants> {
  steps: number;
  currentStep: number;
  title: string;
  labels?: string[];
}

const StepIndicator = forwardRef<View, StepIndicatorProps>(
  ({ steps, currentStep, title, labels, size, className, ...props }, ref) => {
    return (
      <View
        ref={ref}
        className={cn(stepIndicatorVariants({ size }), className)}
        {...props}
      >
        {/* Segments container */}
        <View className="flex flex-row items-center justify-center gap-1 mb-4 w-full">
          {Array.from({ length: steps }).map((_, index) => {
            const state =
              index < currentStep - 1
                ? "complete"
                : index === currentStep - 1
                  ? "active"
                  : "default";

            return (
              <View
                key={index}
                className={cn(
                  segmentVariants({ state, size }),
                  "flex-1 h-3",
                  index === steps - 1 && "flex-none",
                )}
              />
            );
          })}
        </View>

        {/* Heading */}
        <View className="flex flex-row items-center gap-2 w-full">
          <View
            className={cn(
              "rounded-full flex items-center justify-center",
              size === "default" ? "w-10 h-10" : "w-6 h-6",
              "bg-primary",
            )}
          >
            <Text className="text-primary-foreground font-normal">
              {currentStep}
            </Text>
          </View>
          <Text className="text-primary font-normal">of {steps}</Text>
          <Text className="text-foreground font-bold text-[22px] leading-7">
            {title}
          </Text>
        </View>
      </View>
    );
  },
);

StepIndicator.displayName = "StepIndicator";

export { StepIndicator };
