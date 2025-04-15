import { type VariantProps, cva } from 'class-variance-authority';
import { View } from 'react-native';
import { Text } from '../text';
import { cn } from '@/lib/utils';

const badgeVariants = cva('flex-row items-center justify-center rounded-full px-2.5 py-1 border', {
  variants: {
    variant: {
      default: 'bg-primary-lighter border-primary-light',
      success: 'bg-success-lighter border-success-light',
      warning: 'bg-warning-lighter border-warning-light',
      info: 'bg-info-lighter border-info-light',
      destructive: 'bg-destructive border-destructive'
    }
  },
  defaultVariants: {
    variant: 'default'
  }
});

const badgeTextVariants = cva('text-xs font-medium', {
  variants: {
    variant: {
      default: 'text-primary-foreground',
      success: 'text-success-dark',
      warning: 'text-warning-dark',
      info: 'text-info-dark',
      destructive: 'text-destructive-foreground'
    }
  },
  defaultVariants: {
    variant: 'default'
  }
});

interface BadgeProps extends VariantProps<typeof badgeVariants> {
  label: string;
  className?: string;
}

export function Badge({ label, variant, className }: BadgeProps) {
  return (
    <View className={cn(badgeVariants({ variant, className }))}>
      <Text className={badgeTextVariants({ variant })}>{label}</Text>
    </View>
  );
}
