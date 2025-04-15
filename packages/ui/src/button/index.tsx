import { ComponentPropsWithoutRef, ElementRef, ReactNode, forwardRef } from 'react';
import { Pressable, PressableStateCallbackType, View } from 'react-native';
import { type VariantProps, cva } from 'class-variance-authority';
import { TextClassContext } from '../text';
import { cn } from '@/lib/utils';

const buttonVariants = cva('flex items-center justify-center rounded-lg font-sans text-center', {
  variants: {
    variant: {
      default: ['bg-primary', 'active:bg-primary/90', 'disabled:bg-primary/50'],
      destructive: ['bg-destructive', 'active:bg-destructive/90', 'disabled:bg-destructive/50'],
      outline: ['border bg-background', 'border-input', 'active:bg-accent', 'disabled:bg-background/50 disabled:border-muted'],
      secondary: ['bg-secondary', 'active:bg-secondary/80', 'disabled:bg-secondary/50'],
      ghost: ['active:bg-accent', 'disabled:bg-transparent'],
      link: ['text-primary underline-offset-4 hover:underline', 'active:underline', 'disabled:text-primary/50']
    },
    size: {
      default: 'h-[44px] px-[20px] py-[10px]',
      sm: 'h-[36px] px-[12px] py-[8px] text-sm',
      lg: 'h-[48px] px-[24px] py-[16px]',
      big: 'h-[60px] px-[24px] py-[16px] min-w-[329px]',
      icon: 'h-[44px] w-[44px] p-0'
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
    iconPosition: 'none'
  }
});

const buttonTextVariants = cva('text-center', {
  variants: {
    variant: {
      default: 'text-primary-foreground disabled:text-primary-foreground/70',
      destructive: 'text-destructive-foreground disabled:text-destructive-foreground/70',
      outline: 'text-foreground disabled:text-muted-foreground',
      secondary: 'text-secondary-foreground disabled:text-secondary-foreground/70',
      ghost: 'text-foreground disabled:text-muted-foreground',
      link: 'text-primary underline disabled:text-primary/50'
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
        className={cn('group', buttonVariants({ variant, size, iconPosition, className }))}
        ref={ref}
        role='button'
        android_ripple={{
          color: 'rgba(0, 0, 0, 0.2)',
          borderless: false,
          foreground: true
        }}
        style={({ pressed }) => [
          {
            opacity: props.disabled ? 0.5 : pressed ? 0.8 : 1,
            transform: [{ scale: pressed && !props.disabled ? 0.98 : 1 }]
          }
        ]}
        {...props}
      >
        {(state) => (
          <View className='flex-row items-center justify-center flex-1' style={{ opacity: state.pressed && !props.disabled ? 0.8 : 1 }}>
            {startIcon && <View className='mr-2'>{startIcon}</View>}
            {typeof children === 'function' ? children(state) : children}
            {endIcon && <View className='ml-2'>{endIcon}</View>}
          </View>
        )}
      </Pressable>
    </TextClassContext.Provider>
  );
});

Button.displayName = 'Button';

export { Button, buttonTextVariants, buttonVariants };
export type { ButtonProps };
