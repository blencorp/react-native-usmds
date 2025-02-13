import { ComponentPropsWithoutRef, ElementRef, forwardRef, ReactNode } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { Pressable, PressableStateCallbackType } from 'react-native';
import { TextClassContext } from '../Text';
import { cn } from '../../lib/utils';

const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2 rounded-[4px] [&_svg]:size-5 [&_svg]:shrink-0 web:transition-colors web:focus-visible:outline-none web:focus-visible:ring-2 web:focus-visible:ring-focus-ring web:focus-visible:ring-offset-2',
  {
    variants: {
      variant: {
        // Default/Primary
        default:
          'bg-primary dark:bg-primary web:hover:bg-primary-hover dark:web:hover:bg-primary-hover active:bg-primary-active dark:active:bg-primary-active',

        // Secondary
        secondary:
          'bg-secondary dark:bg-secondary web:hover:bg-secondary-hover dark:web:hover:bg-secondary-hover active:bg-secondary-active dark:active:bg-secondary-active',

        // Accent Cool
        'accent-cool':
          'bg-accent-cool dark:bg-accent-cool web:hover:bg-accent-cool-hover dark:web:hover:bg-accent-cool-hover active:bg-accent-cool-active dark:active:bg-accent-cool-active',

        // Accent Warm
        'accent-warm':
          'bg-accent-warm dark:bg-accent-warm web:hover:bg-accent-warm-hover dark:web:hover:bg-accent-warm-hover active:bg-accent-warm-active dark:active:bg-accent-warm-active',

        // Base
        base: 'bg-base dark:bg-base web:hover:bg-base-hover dark:web:hover:bg-base-hover active:bg-base-active dark:active:bg-base-active',

        // Outline
        outline:
          'border-2 border-primary dark:border-primary bg-transparent web:hover:border-primary-hover dark:web:hover:border-primary-hover active:border-primary-active dark:active:border-primary-active',

        // Inverse
        inverse:
          'border-2 border-inverse-border dark:border-inverse-border bg-transparent web:hover:border-inverse-border-hover dark:web:hover:border-inverse-border-hover active:border-inverse-border-active dark:active:border-inverse-border-active'
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

// Add buttonTextVariants
const buttonTextVariants = cva('text-center font-[700] text-[16px] leading-[20px]', {
  variants: {
    variant: {
      default: 'text-white dark:text-base-800',
      secondary: 'text-white dark:text-base-800',
      'accent-cool': 'text-foreground dark:text-white active:text-white',
      'accent-warm': 'text-foreground dark:text-white hover:text-white active:text-white',
      base: 'text-white dark:text-base-800',
      outline: 'text-primary dark:text-primary hover:text-primary-hover active:text-primary-active',
      inverse: 'text-inverse-border dark:text-inverse-border hover:text-inverse-border-hover active:text-inverse-border-active'
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
export type { ButtonProps };
