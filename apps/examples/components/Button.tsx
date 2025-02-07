import { ComponentPropsWithoutRef, ElementRef, forwardRef, createContext, useContext } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { Pressable } from 'react-native';
import { cn } from '../lib/utils';

// Create TextClassContext
export const TextClassContext = createContext<string | undefined>(undefined);

const buttonVariants = cva(
  'group flex items-center justify-center rounded-md web:ring-offset-background web:transition-colors web:focus-visible:outline-none web:focus-visible:ring-2 web:focus-visible:ring-ring web:focus-visible:ring-offset-2',
  {
    variants: {
      variant: {
        default: 'bg-primary-500 web:hover:bg-primary-600 active:bg-primary-700',
        secondary: 'bg-secondary-500 web:hover:bg-secondary-600 active:bg-secondary-700',
        outline: 'border-2 border-primary-500 bg-transparent web:hover:bg-primary-50 active:bg-primary-100',
        destructive: 'bg-error-DEFAULT web:hover:bg-error-dark active:opacity-90',
        ghost: 'hover:bg-base-100 active:bg-base-200',
        link: 'web:underline-offset-4 web:hover:underline web:focus:underline p-0 height-auto'
      },
      size: {
        default: 'h-10 px-4 py-2 native:h-12 native:px-5 native:py-3',
        sm: 'h-9 px-3 py-1 text-sm',
        lg: 'h-12 px-6 py-3 text-lg',
        icon: 'h-10 w-10'
      }
    },
    defaultVariants: {
      variant: 'default',
      size: 'default'
    }
  }
);

// Add buttonTextVariants
const buttonTextVariants = cva('web:whitespace-nowrap text-sm native:text-base font-medium web:transition-colors', {
  variants: {
    variant: {
      default: 'text-white',
      secondary: 'text-white',
      destructive: 'text-white',
      outline: 'text-primary-500',
      ghost: 'text-primary-500',
      link: 'text-primary-500'
    },
    size: {
      default: '',
      sm: 'text-sm',
      lg: 'text-base native:text-lg',
      icon: ''
    }
  },
  defaultVariants: {
    variant: 'default',
    size: 'default'
  }
});

type ButtonProps = ComponentPropsWithoutRef<typeof Pressable> & VariantProps<typeof buttonVariants>;

const Button = forwardRef<ElementRef<typeof Pressable>, ButtonProps>(({ className, variant, size, children, ...props }, ref) => {
  return (
    <TextClassContext.Provider
      value={buttonTextVariants({
        variant,
        size,
        className: 'web:pointer-events-none'
      })}
    >
      <Pressable
        className={cn(props.disabled && 'opacity-50 pointer-events-none', buttonVariants({ variant, size, className }))}
        ref={ref}
        role='button'
        {...props}
      >
        {children}
      </Pressable>
    </TextClassContext.Provider>
  );
});

Button.displayName = 'Button';

export { Button, buttonVariants, buttonTextVariants };
export type { ButtonProps };
