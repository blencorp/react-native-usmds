import { ComponentPropsWithoutRef, ElementRef, forwardRef, ReactNode } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { Pressable, PressableStateCallbackType } from 'react-native';
import { TextClassContext } from '../text';
import { cn } from '@/lib/utils';

const buttonVariants = cva('flex items-center justify-center rounded-[4px] font-sans text-center', {
  variants: {
    variant: {
      default: 'bg-primary hover:bg-primary-hover active:bg-primary-active text-white',
      secondary: 'bg-secondary hover:bg-secondary-hover active:bg-secondary-active text-white',
      'accent-cool': [
        'bg-accent-cool hover:bg-accent-cool-hover active:bg-accent-cool-active',
        'text-base-800 hover:text-base-800 active:text-white'
      ],
      'accent-warm': ['bg-accent-warm hover:bg-accent-warm-hover active:bg-accent-warm-active', 'text-base-800 hover:text-white active:text-white'],
      base: 'bg-base hover:bg-base-hover active:bg-base-active text-white',
      outline: [
        'border-2 bg-transparent',
        'border-primary hover:border-primary-hover active:border-primary-active',
        'text-primary hover:text-primary-hover active:text-primary-active'
      ],
      inverse: [
        'border-2 bg-transparent',
        'border-inverse-border hover:border-inverse-border-hover active:border-inverse-border-active',
        'text-inverse-border hover:text-inverse-border-hover active:text-inverse-border-active'
      ]
    },
    size: {
      default: 'h-[44px] px-[20px] py-[12px] min-w-[329px]',
      sm: 'h-[32px] px-[12px] py-[8px]',
      lg: 'h-[48px] px-[24px] py-[16px]',
      big: 'h-[60px] px-[24px] py-[16px] min-w-[329px]',
      icon: 'h-[44px] w-[44px] p-0'
    },
    focus: {
      true: 'outline-none ring-4 ring-focus-ring'
    },
    iconPosition: {
      left: 'flex-row gap-2',
      right: 'flex-row-reverse gap-2',
      none: ''
    }
  },
  defaultVariants: {
    variant: 'default',
    size: 'default',
    focus: false,
    iconPosition: 'none'
  }
});

const buttonTextVariants = cva('text-center font-[700] text-[16px] leading-[20px]', {
  variants: {
    variant: {
      default: 'text-white',
      secondary: 'text-white',
      'accent-cool': 'text-base-800 group-active:text-white',
      'accent-warm': 'text-base-800 group-hover:text-white group-active:text-white',
      base: 'text-white',
      outline: 'text-primary group-hover:text-primary-hover group-active:text-primary-active',
      inverse: 'text-inverse-border group-hover:text-inverse-border-hover group-active:text-inverse-border-active'
    },
    size: {
      default: 'text-[16px] leading-[20px]',
      sm: 'text-[14px] leading-[18px]',
      lg: 'text-[18px] leading-[22px]',
      big: 'text-[20px] leading-[24px]',
      icon: 'text-[16px] leading-[20px]'
    }
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
