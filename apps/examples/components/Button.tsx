import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react';
import { Pressable } from 'react-native';
import { cva, type VariantProps } from 'class-variance-authority';
import { TextClassContext } from './Text';
import { cn } from '@/lib/utils';

const buttonVariants = cva(
  'group flex items-center justify-center rounded-md web:ring-offset-background web:transition-colors web:focus-visible:outline-none web:focus-visible:ring-1 web:focus-visible:ring-ring web:focus-visible:ring-offset-0',
  {
    variants: {
      variant: {
        default: 'bg-primary-500 web:hover:opacity-90 active:opacity-90',
        secondary: 'bg-secondary-500 web:hover:opacity-90 active:opacity-90',
        destructive: 'bg-error-DEFAULT web:hover:opacity-90 active:opacity-90',
        outline: 'border border-base-500 bg-background web:hover:bg-accent web:hover:text-accent-foreground active:bg-accent',
        ghost: 'web:hover:bg-accent web:hover:text-accent-foreground active:bg-accent',
        link: 'web:underline-offset-4 web:hover:underline web:focus:underline'
      },
      size: {
        default: 'h-10 px-4 py-2 native:h-12 native:px-5 native:py-3',
        sm: 'h-9 rounded-md px-3',
        lg: 'h-11 rounded-md px-8 native:h-14',
        icon: 'h-10 w-10'
      }
    },
    defaultVariants: {
      variant: 'default',
      size: 'default'
    }
  }
);

const buttonTextVariants = cva('web:whitespace-nowrap text-sm native:text-base font-medium text-foreground web:transition-colors', {
  variants: {
    variant: {
      default: 'text-primary-foreground',
      secondary: 'text-secondary-foreground group-active:text-secondary-foreground',
      destructive: 'text-destructive-foreground',
      outline: 'group-active:text-accent-foreground',
      ghost: 'group-active:text-accent-foreground',
      link: 'text-primary group-active:underline'
    },
    size: {
      default: '',
      sm: '',
      lg: 'native:text-lg',
      icon: ''
    }
  },
  defaultVariants: {
    variant: 'default',
    size: 'default'
  }
});

type ButtonProps = ComponentPropsWithoutRef<typeof Pressable> &
  VariantProps<typeof buttonVariants>;

const Button = forwardRef<ElementRef<typeof Pressable>, ButtonProps>(
  ({ className, variant, size, children, ...props }, ref) => {
    return (
      <TextClassContext.Provider
        value={buttonTextVariants({
          variant,
          size,
          className: 'web:pointer-events-none'
        })}
      >
        <Pressable
          ref={ref}
          role="button"
          accessibilityRole="button"
          className={cn(
            props.disabled && 'opacity-50 web:pointer-events-none',
            buttonVariants({ variant, size, className })
          )}
          {...props}
        >
          {children}
        </Pressable>
      </TextClassContext.Provider>
    );
  }
);

Button.displayName = 'Button';

export { Button, buttonTextVariants, buttonVariants };
export type { ButtonProps };
