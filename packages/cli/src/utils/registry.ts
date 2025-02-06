export const ALL_COMPONENTS = ['Button', 'Input', 'Checkbox', 'Text', 'Card', 'Label', 'Alert', 'Badge'];

interface ComponentMetadata {
  name: string;
  dependencies?: string[];
}

export const COMPONENT_METADATA: Record<string, ComponentMetadata> = {
  Button: {
    name: 'Button',
    dependencies: ['class-variance-authority', 'tailwind-merge', 'clsx']
  },
  Input: {
    name: 'Input',
    dependencies: ['class-variance-authority', 'tailwind-merge', 'clsx']
  },
  Checkbox: {
    name: 'Checkbox',
    dependencies: ['tailwind-merge', 'clsx']
  }
  // Add more components as we build them
};

export const COMPONENT_TEMPLATES: Record<string, string> = {
  Text: `import { forwardRef, createContext, useContext } from "react";
import * as Slot from "@rn-primitives/slot";
import { SlottableTextProps, TextRef } from "@rn-primitives/types";
import { Text as RNText } from "react-native";
import { cn } from "@/lib/utils";

const TextClassContext = createContext<string | undefined>(undefined);

const Text = forwardRef<TextRef, SlottableTextProps>(
  ({ className, asChild = false, ...props }, ref) => {
    const textClass = useContext(TextClassContext);
    const Component = asChild ? Slot.Text : RNText;
    return (
      <Component
        className={cn(
          "text-base text-foreground web:select-text",
          textClass,
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Text.displayName = "Text";

export { Text, TextClassContext };`,

  Button: `import { ComponentPropsWithoutRef, ElementRef, forwardRef } from "react";
  import { Pressable, PressableProps } from "react-native";
  import { cva, type VariantProps } from "class-variance-authority";
  import { TextClassContext } from "./Text";
  import { cn } from "@/lib/utils";

  const buttonVariants = cva(
    "group flex items-center justify-center rounded-md web:ring-offset-background web:transition-colors web:focus-visible:outline-none web:focus-visible:ring-1 web:focus-visible:ring-ring web:focus-visible:ring-offset-0",
    {
      variants: {
        variant: {
          default: "bg-primary-500 web:hover:opacity-90 active:opacity-90",
          secondary: "bg-secondary-500 web:hover:opacity-90 active:opacity-90",
          destructive: "bg-error-DEFAULT web:hover:opacity-90 active:opacity-90",
          outline: "border border-base-500 bg-background web:hover:bg-accent web:hover:text-accent-foreground active:bg-accent",
          ghost: "web:hover:bg-accent web:hover:text-accent-foreground active:bg-accent",
          link: "web:underline-offset-4 web:hover:underline web:focus:underline",
        },
        size: {
          default: "h-10 px-4 py-2 native:h-12 native:px-5 native:py-3",
          sm: "h-9 rounded-md px-3",
          lg: "h-11 rounded-md px-8 native:h-14",
          icon: "h-10 w-10",
        },
      },
      defaultVariants: {
        variant: "default",
        size: "default",
      },
    }
  );

  const buttonTextVariants = cva(
    "web:whitespace-nowrap text-sm native:text-base font-medium text-foreground web:transition-colors",
    {
      variants: {
        variant: {
          default: "text-primary-foreground",
          secondary: "text-secondary-foreground group-active:text-secondary-foreground",
          destructive: "text-destructive-foreground",
          outline: "group-active:text-accent-foreground",
          ghost: "group-active:text-accent-foreground",
          link: "text-primary group-active:underline",
        },
        size: {
          default: "",
          sm: "",
          lg: "native:text-lg",
          icon: "",
        },
      },
      defaultVariants: {
        variant: "default",
        size: "default",
      },
    }
  );

  type ButtonVariants = VariantProps<typeof buttonVariants>;

  interface ButtonProps extends 
    Omit<PressableProps, 'children'>,
    ButtonVariants {
      className?: string;
      children: React.ReactNode;
      disabled?: boolean;
      asChild?: boolean;
  }

  const Button = forwardRef<ElementRef<typeof Pressable>, ButtonProps>(
    ({ 
      className, 
      variant, 
      size, 
      children, 
      disabled = false,
      asChild = false,
      ...props 
    }, ref) => {
      return (
        <TextClassContext.Provider
          value={buttonTextVariants({
            variant,
            size,
            className: "web:pointer-events-none",
          })}
        >
          <Pressable
            ref={ref}
            role="button"
            aria-disabled={disabled}
            accessibilityRole="button"
            accessibilityState={{ disabled }}
            className={cn(
              disabled && "opacity-50 web:pointer-events-none",
              buttonVariants({ variant, size, className })
            )}
            disabled={disabled}
            {...props}
          >
            {children}
          </Pressable>
        </TextClassContext.Provider>
      );
    }
  );

  Button.displayName = "Button";

  export { Button, buttonTextVariants, buttonVariants };
  export type { ButtonProps, ButtonVariants };`,

  Input: `import React from 'react';
import { TextInput, type TextInputProps } from 'react-native';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../utils';

const inputVariants = cva(
  'flex-1 h-10 px-3 py-2 rounded-md border-2 border-usa-gray bg-white',
  {
    variants: {
      state: {
        default: 'border-usa-gray',
        error: 'border-usa-red',
        success: 'border-green-500',
      },
    },
    defaultVariants: {
      state: 'default',
    },
  }
);

export interface InputProps
  extends TextInputProps,
    VariantProps<typeof inputVariants> {
  className?: string;
}

export function Input({ state, className, ...props }: InputProps) {
  return (
    <TextInput
      className={cn(inputVariants({ state }), className)}
      placeholderTextColor="#71767A"
      {...props}
    />
  );
}`,

  Checkbox: `import React from 'react';
import { Pressable, View } from 'react-native';
import { cn } from '../utils';

export interface CheckboxProps {
  checked?: boolean;
  onValueChange?: (checked: boolean) => void;
  className?: string;
}

export function Checkbox({
  checked = false,
  onValueChange,
  className,
}: CheckboxProps) {
  return (
    <Pressable
      onPress={() => onValueChange?.(!checked)}
      className={cn(
        'h-6 w-6 rounded border-2 items-center justify-center',
        checked ? 'bg-usa-blue border-usa-blue' : 'border-usa-gray bg-white',
        className
      )}
    >
      {checked && (
        <View className="h-3 w-3 rounded-sm bg-white" />
      )}
    </Pressable>
  );
}`

  // Add more templates
};

export async function getComponentTemplate(name: string): Promise<string> {
  const template = COMPONENT_TEMPLATES[name];
  if (!template) {
    throw new Error(`Template not found for component: ${name}`);
  }
  return template;
}
