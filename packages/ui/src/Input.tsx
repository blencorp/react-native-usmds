import { ComponentPropsWithoutRef, ElementRef, forwardRef } from "react";
import { TextInput } from "react-native";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../lib/utils";

const inputVariants = cva(
  "flex-1 rounded-md bg-transparent text-foreground",
  {
    variants: {
      variant: {
        default: "border-2 border-usa-gray focus:border-usa-blue",
        error: "border-2 border-usa-red",
        success: "border-2 border-green-500",
      },
      size: {
        default: "h-10 px-3 py-2",
        sm: "h-8 px-2",
        lg: "h-12 px-4",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

type InputProps = ComponentPropsWithoutRef<typeof TextInput> &
  VariantProps<typeof inputVariants>;

const Input = forwardRef<ElementRef<typeof TextInput>, InputProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <TextInput
        className={cn(inputVariants({ variant, size, className }))}
        ref={ref}
        placeholderTextColor="#71767A"
        {...props}
      />
    );
  }
);

Input.displayName = "Input";

export { Input, inputVariants };
export type { InputProps }; 