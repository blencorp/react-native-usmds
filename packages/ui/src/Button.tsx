import { ComponentPropsWithoutRef, ElementRef, forwardRef, createContext, useContext } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { Pressable } from 'react-native';
import { TextClassContext } from './Text';

import { cn } from '../lib/utils';

const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2 rounded-[4px] [&_svg]:size-5 [&_svg]:shrink-0 web:transition-colors web:focus-visible:outline-none web:focus-visible:ring-2 web:focus-visible:ring-[#2491FF] web:focus-visible:ring-offset-2',
  {
    variants: {
      variant: {
        // Default/Primary
        default: 'bg-[#005EA2] dark:bg-[#73B3E7] web:hover:bg-[#1A4480] dark:web:hover:bg-[#4F97D1] active:bg-[#162E51] dark:active:bg-[#2378C3]',

        // Secondary
        secondary: 'bg-[#D83933] dark:bg-[#E9695D] web:hover:bg-[#B50909] dark:web:hover:bg-[#E34732] active:bg-[#8B0A03] dark:active:bg-[#B21D12]',

        // Accent Cool
        'accent-cool':
          'bg-[#00BDE3] dark:bg-[#28A0CB] web:hover:bg-[#28A0CB] dark:web:hover:bg-[#07648D] active:bg-[#07648D] dark:active:bg-[#044E6C]',

        // Accent Warm
        'accent-warm':
          'bg-[#FA9441] dark:bg-[#C05600] web:hover:bg-[#C05600] dark:web:hover:bg-[#775540] active:bg-[#775540] dark:active:bg-[#3D2925]',

        // Base
        base: 'bg-[#757575] dark:bg-[#A9AEB1] web:hover:bg-[#5C5C5C] dark:web:hover:bg-[#71767A] active:bg-[#2E2E2E] dark:active:bg-[#565C65]',

        // Outline
        outline:
          'border-2 border-[#005EA2] dark:border-[#73B3E7] bg-transparent web:hover:border-[#1A4480] dark:web:hover:border-[#4F97D1] web:hover:text-[#1A4480] dark:web:hover:text-[#4F97D1] active:border-[#162E51] dark:active:border-[#2378C3] active:text-[#162E51] dark:active:text-[#2378C3]',

        // Inverse
        inverse:
          'border-2 border-[#E6E6E6] dark:border-[#1B1B1B] bg-transparent web:hover:border-[#F0F0F0] dark:web:hover:border-[#2E2E2E] web:hover:text-[#F0F0F0] dark:web:hover:text-[#2E2E2E] active:border-white dark:active:border-black active:text-white dark:active:text-black'
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
        none: 'flex-row' // default to horizontal layout
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
      default: 'text-white dark:text-[#1B1B1B]',
      secondary: 'text-white dark:text-[#1B1B1B]',
      'accent-cool': 'text-[#1B1B1B] dark:text-white active:text-white',
      'accent-warm': 'text-[#1B1B1B] dark:text-white hover:text-white active:text-white',
      base: 'text-white dark:text-[#1B1B1B]',
      outline: 'text-[#005EA2] dark:text-[#73B3E7]',
      inverse: 'text-[#E6E6E6] dark:text-[#1B1B1B]'
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
        {startIcon}
        {children}
        {endIcon}
      </Pressable>
    </TextClassContext.Provider>
  );
});

Button.displayName = 'Button';

export { Button, buttonVariants, buttonTextVariants };
export type { ButtonProps };
