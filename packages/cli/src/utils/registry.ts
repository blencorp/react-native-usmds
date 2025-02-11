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

  Button: `import { ComponentPropsWithoutRef, ElementRef, forwardRef, ReactNode } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { Pressable, PressableStateCallbackType } from 'react-native';
import { TextClassContext } from './Text';
import { cn } from '@/lib/utils';

const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2 rounded-[4px] [&_svg]:size-5 [&_svg]:shrink-0 web:transition-colors web:focus-visible:outline-none web:focus-visible:ring-2 web:focus-visible:ring-primary web:focus-visible:ring-offset-2',
  {
    variants: {
      variant: {
        default: 'bg-primary dark:bg-primary web:hover:bg-primary-hover dark:web:hover:bg-primary-hover active:bg-primary-active dark:active:bg-primary-active',
        secondary: 'bg-secondary dark:bg-secondary web:hover:bg-secondary-hover dark:web:hover:bg-secondary-hover active:bg-secondary-active dark:active:bg-secondary-active',
        'accent-cool': 'bg-accent-cool dark:bg-accent-cool web:hover:bg-accent-cool-hover dark:web:hover:bg-accent-cool-hover active:bg-accent-cool-active dark:active:bg-accent-cool-active',
        'accent-warm': 'bg-accent-warm dark:bg-accent-warm web:hover:bg-accent-warm-hover dark:web:hover:bg-accent-warm-hover active:bg-accent-warm-active dark:active:bg-accent-warm-active',
        base: 'bg-base-500 dark:bg-base-400 web:hover:bg-base-600 dark:web:hover:bg-base-500 active:bg-base-700 dark:active:bg-base-600',
        outline: 'border-2 border-primary dark:border-primary bg-transparent web:hover:border-primary-hover dark:web:hover:border-primary-hover active:border-primary-active dark:active:border-primary-active',
        inverse: 'border-2 border-base-100 dark:border-base-800 bg-transparent web:hover:border-base-50 dark:web:hover:border-base-700 active:border-white dark:active:border-black'
      },
      size: {
        default: 'h-[44px] px-[20px] py-[12px] min-w-[329px]',
        sm: 'h-[32px] px-[12px] py-[8px]',
        lg: 'h-[48px] px-[24px] py-[16px]',
        big: 'h-[60px] px-[24px] py-[16px] min-w-[329px]',
        icon: 'h-[44px] w-[44px] p-0'
      },
      iconPosition: {
        left: 'flex-row',
        right: 'flex-row-reverse',
        none: 'flex-row'
      }
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
      iconPosition: 'none'
    }
  }
);

const buttonTextVariants = cva('text-center font-[700] text-[16px] leading-[20px]', {
  variants: {
    variant: {
      default: 'text-white dark:text-base-800',
      secondary: 'text-white dark:text-base-800',
      'accent-cool': 'text-base-800 dark:text-white active:text-white',
      'accent-warm': 'text-base-800 dark:text-white hover:text-white active:text-white',
      base: 'text-white dark:text-base-800',
      outline: 'text-primary dark:text-primary',
      inverse: 'text-base-100 dark:text-base-800'
    },
    size: {
      default: '',
      sm: 'text-[14px] leading-[18px]',
      lg: 'text-[18px] leading-[22px]',
      big: 'text-[22px] leading-[28px]',
      icon: ''
    }
  },
  defaultVariants: {
    variant: 'default',
    size: 'default'
  }
});

type ButtonProps = ComponentPropsWithoutRef<typeof Pressable> &
  VariantProps<typeof buttonVariants> & {
    className?: string;
    startIcon?: React.ReactNode;
    endIcon?: React.ReactNode;
    children: ReactNode | ((state: PressableStateCallbackType) => ReactNode);
  };

const Button = forwardRef<ElementRef<typeof Pressable>, ButtonProps>(({ className, variant, size, children, startIcon, endIcon, ...props }, ref) => {
  const iconPosition = startIcon ? 'left' : endIcon ? 'right' : 'none';

  return (
    <TextClassContext.Provider
      value={buttonTextVariants({
        variant,
        size,
        className: 'web:pointer-events-none'
      })}
    >
      <Pressable
        className={cn(props.disabled && 'opacity-50 pointer-events-none', buttonVariants({ variant, size, iconPosition, className }))}
        ref={ref}
        role='button'
        {...props}
      >
        {(state) => (
          <>
            {startIcon}
            {typeof children === 'function' ? children(state) : children}
            {endIcon}
          </>
        )}
      </Pressable>
    </TextClassContext.Provider>
  );
});

Button.displayName = 'Button';

export { Button, buttonVariants, buttonTextVariants };
export type { ButtonProps };`,

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
