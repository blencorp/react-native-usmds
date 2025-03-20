import { ComponentPropsWithoutRef, ElementRef, forwardRef, ReactNode } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { Pressable, PressableStateCallbackType } from 'react-native';
import { TextClassContext } from '../text';
import { cn } from '@/lib/utils';

const buttonVariants = cva('flex items-center justify-center rounded-[4px] font-sans text-center', {
  variants: {
    variant: {
      default: ['bg-primary hover:bg-primary-dark active:bg-primary-darker', 'text-white'],
      secondary: ['bg-secondary hover:bg-secondary-dark active:bg-secondary-darker', 'text-white'],
      'accent-cool': ['bg-accent-cool hover:bg-accent-cool-dark active:bg-accent-cool-darker', 'text-base-ink hover:text-base-ink active:text-white'],
      'accent-warm': ['bg-accent-warm hover:bg-accent-warm-dark active:bg-accent-warm-darker', 'text-base-ink hover:text-white active:text-white'],
      base: ['bg-gray-50 hover:bg-gray-60 active:bg-gray-80', 'text-white'],
      outline: [
        'border-2 bg-transparent',
        'border-primary text-primary',
        'hover:border-primary-dark hover:text-primary-dark',
        'active:border-primary-darker active:text-primary-darker'
      ],
      inverse: [
        'border-2 bg-transparent',
        'border-gray-10 text-gray-10',
        'hover:border-gray-5 hover:text-gray-5',
        'active:border-white active:text-white'
      ]
    },
    size: {
      default: 'h-[44px] px-[20px] py-[10px] min-w-[329px]',
      sm: 'h-[32px] px-[12px] py-[8px]',
      lg: 'h-[48px] px-[24px] py-[16px]',
      big: 'h-[60px] px-[24px] py-[16px] min-w-[329px]',
      icon: 'h-[44px] w-[44px] p-0'
    },
    focus: {
      true: 'outline-none ring-[4px] ring-blue-vivid-40'
    },
    iconPosition: {
      left: 'flex-row gap-2',
      right: 'flex-row gap-2',
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

const buttonTextVariants = cva('text-center font-[700] text-[16px] leading-[20px] my-auto', {
  variants: {
    variant: {
      default: 'text-white',
      secondary: 'text-white',
      'accent-cool': 'text-base-ink group-active:text-white',
      'accent-warm': 'text-base-ink group-hover:text-white group-active:text-white',
      base: 'text-white',
      outline: ['text-primary', 'group-hover:text-primary-dark', 'group-active:text-primary-darker'],
      inverse: ['text-gray-10', 'group-hover:text-gray-5', 'group-active:text-white']
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
        className={cn('group', props.disabled && 'opacity-50 pointer-events-none', buttonVariants({ variant, size, iconPosition, className }))}
        ref={ref}
        role='button'
        {...props}
      >
        {(state) => (
          <View className='flex-row items-center justify-center flex-1'>
            {startIcon}
            {typeof children === 'function' ? children(state) : children}
            {endIcon}
          </View>
        )}
      </Pressable>
    </TextClassContext.Provider>
  );
});

Button.displayName = 'Button';

export { Button, buttonVariants, buttonTextVariants };
export type { ButtonProps };
