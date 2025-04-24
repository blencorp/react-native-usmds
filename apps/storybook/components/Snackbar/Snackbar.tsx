import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react';
import { View, Text, Pressable } from 'react-native';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';
import { Icon } from '../Icon/Icon';

const snackbarVariants = cva('flex w-[329px] bg-base-darkest rounded-[4px] p-3', {
  variants: {
    layout: {
      'one-line': 'flex-row items-center h-[48px] justify-between',
      'two-lines': 'min-h-[70px]'
    }
  },
  defaultVariants: {
    layout: 'one-line'
  }
});

type SnackbarProps = ComponentPropsWithoutRef<typeof View> &
  VariantProps<typeof snackbarVariants> & {
    className?: string;
    message: string;
    variant?: 'success' | 'error';
    onAction?: () => void;
    onDismiss?: () => void;
    actionLabel?: string;
  };

const Snackbar = forwardRef<ElementRef<typeof View>, SnackbarProps & { isVisible: boolean }>(
  ({ className, layout, message, variant = 'success', onAction, onDismiss, actionLabel = 'Action', isVisible }, ref) => {
    if (!isVisible) return null;

    const iconName = variant === 'success' ? 'check' : 'error_outline';

    if (layout === 'two-lines') {
      return (
        <View ref={ref} testID='snackbar-container' className={cn(snackbarVariants({ layout }), className)}>
          <View className='flex flex-row gap-2 mb-3'>
            <View className='flex items-center justify-center h-6'>
              <Icon name={iconName} size={24} className='bg-background text-base-darkest rounded-full' />
            </View>
            <Text className='text-base-lightest text-base leading-6 flex-1 flex-wrap'>{message}</Text>
          </View>

          <View className='flex flex-row justify-end items-center gap-6'>
            {onAction && (
              <Pressable onPress={onAction}>
                <Text className='text-base-lightest text-[15px] leading-[19px] font-bold'>{actionLabel}</Text>
              </Pressable>
            )}
            {onDismiss && (
              <Pressable onPress={onDismiss}>
                <Text className='text-base-lightest text-[15px] leading-[19px] font-bold'>Dismiss</Text>
              </Pressable>
            )}
          </View>
        </View>
      );
    }

    return (
      <View ref={ref} testID='snackbar-container' className={cn(snackbarVariants({ layout }), className)}>
        <View className='flex flex-row items-center gap-2 flex-shrink min-w-0 max-w-[171px]'>
          <View className='flex items-center justify-center h-6 flex-shrink-0'>
            <Icon name={iconName} size={24} className='bg-background text-base-darkest rounded-full' />
          </View>
          <Text numberOfLines={1} className='text-base-lightest text-base leading-6 flex-shrink'>
            {message}
          </Text>
        </View>

        <View className='flex flex-row items-center gap-6 flex-shrink-0'>
          {onAction && (
            <Pressable onPress={onAction}>
              <Text className='text-base-lightest text-[15px] leading-[19px] font-bold'>{actionLabel}</Text>
            </Pressable>
          )}
          {onDismiss && (
            <Pressable onPress={onDismiss}>
              <Text className='text-base-lightest text-[15px] leading-[19px] font-bold'>Dismiss</Text>
            </Pressable>
          )}
        </View>
      </View>
    );
  }
);

Snackbar.displayName = 'Snackbar';

export { Snackbar, type SnackbarProps };
