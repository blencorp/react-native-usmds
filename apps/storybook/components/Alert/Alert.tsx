import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react';
import { View, Text } from 'react-native';
import { cva, type VariantProps } from 'class-variance-authority';
import { Icon } from '../Icon/Icon';
import { cn } from '@/lib/utils';

const alertVariants = cva('flex flex-row items-start p-4 w-[329px]', {
  variants: {
    variant: {
      info: 'bg-info-lighter',
      error: 'bg-error-lighter',
      warning: 'bg-warning-lighter',
      success: 'bg-success-lighter',
      emergency: 'bg-emergency'
    },
    alertStyle: {
      default: 'gap-[15px]',
      'no-header': 'gap-[15px]',
      list: 'gap-[15px]',
      slim: 'gap-3',
      'no-icon': 'gap-[10px]'
    }
  },
  defaultVariants: {
    variant: 'info',
    alertStyle: 'default'
  }
});

const alertTextVariants = cva('font-sans text-[22px] leading-[28px] font-bold text-base-ink mb-2', {
  variants: {
    variant: {
      info: 'text-base-ink',
      error: 'text-base-ink',
      warning: 'text-base-ink',
      success: 'text-base-ink',
      emergency: 'text-primary-foreground'
    },
    alertStyle: {
      default: '',
      'no-header': '',
      list: '',
      slim: '',
      'no-icon': ''
    }
  }
});

interface AlertProps extends ComponentPropsWithoutRef<typeof View>, VariantProps<typeof alertVariants> {
  title?: string;
  description: {
    title?: string;
    body?: string;
    link?: string;
    messages?: Array<{
      text: string;
      link?: string;
      suffix?: string;
    }>;
  };
  showIcon?: boolean;
  className?: string;
  variant?: 'info' | 'error' | 'warning' | 'success' | 'emergency';
  alertStyle?: 'default' | 'no-header' | 'list' | 'slim' | 'no-icon';
}

const Alert = forwardRef<ElementRef<typeof View>, AlertProps>(
  ({ className, variant, alertStyle, title, description, showIcon = true, style, ...props }, ref) => {
    const isNoIcon = alertStyle === 'no-icon';
    const shouldShowIcon = showIcon && !isNoIcon;

    const renderDescription = () => {
      if (alertStyle === 'list' && description.messages) {
        return (
          <View className='space-y-4'>
            {description.messages.map((message, index) => (
              <View key={index} className='flex flex-row items-start'>
                <Text className={cn('text-base leading-[24px] mr-2', variant === 'emergency' ? 'text-primary-foreground' : 'text-base-ink')}>•</Text>
                <Text className={cn('text-base leading-[24px] flex-1', variant === 'emergency' ? 'text-primary-foreground' : 'text-base-ink')}>
                  {message.text}
                  {message.link && <Text className={cn('underline', variant === 'emergency' ? 'text-primary-foreground' : 'text-primary')}>{message.link}</Text>}
                  {message.suffix}
                </Text>
              </View>
            ))}
          </View>
        );
      }

      return (
        <Text className={cn('text-base leading-5', variant === 'emergency' ? 'text-primary-foreground' : 'text-base-ink')}>
          {description.title && <Text className='font-bold'>{description.title} </Text>}
          {description.body}
          {description.link && <Text className={cn('underline', variant === 'emergency' ? 'text-primary-foreground' : 'text-primary')}>{description.link}</Text>}
        </Text>
      );
    };

    return (
      <View
        ref={ref}
        testID='alert'
        accessibilityRole='alert'
        style={style}
        className={cn(alertVariants({ variant, alertStyle }), className)}
        {...props}
      >
        {shouldShowIcon && (
          <View
            className={cn(
              'flex-shrink-0 rounded-full flex items-center justify-center',
              alertStyle === 'slim' ? 'w-6 h-6' : 'w-8 h-8',
              variant === 'emergency' ? 'bg-transparent' : 'bg-base-ink'
            )}
          >
            <Icon
              name='info'
              className={cn(variant === 'emergency' ? 'text-emergency fill-primary-foreground' : 'text-primary-foreground fill-base-ink')}
              size={alertStyle === 'slim' ? 24 : 32}
            />
          </View>
        )}

        <View className={cn('flex flex-col', alertStyle === 'no-icon' ? 'w-[297px]' : 'w-[250px]')}>
          {title && <Text className={alertTextVariants({ alertStyle, variant })}>{title}</Text>}
          {renderDescription()}
        </View>
      </View>
    );
  }
);

Alert.displayName = 'Alert';

export { Alert, type AlertProps };
