import { View } from 'react-native';
import { cn } from '@/lib/utils';
import { ComponentPropsWithoutRef, forwardRef } from 'react';

interface ButtonGroupProps extends ComponentPropsWithoutRef<typeof View> {
  orientation?: 'horizontal' | 'vertical';
  gap?: number;
  className?: string;
}

const ButtonGroup = forwardRef<View, ButtonGroupProps>(({ className, orientation = 'vertical', gap = 8, style, ...props }, ref) => {
  return (
    <View
      ref={ref}
      className={cn('flex', orientation === 'vertical' ? 'flex-col' : 'flex-row', className)}
      style={[
        {
          gap,
          flexDirection: orientation === 'vertical' ? 'column' : 'row'
        },
        style
      ]}
      {...props}
    />
  );
});

ButtonGroup.displayName = 'ButtonGroup';

export { ButtonGroup };
