import { ComponentPropsWithoutRef, forwardRef } from 'react';
import { View, Text } from 'react-native';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const tagVariants = cva('flex flex-row justify-center items-center bg-base rounded-[2px]', {
  variants: {
    size: {
      default: 'px-2 py-0.5 h-[18px]',
      big: 'px-2 py-1 h-[24px]'
    }
  },
  defaultVariants: {
    size: 'default'
  }
});

const tagTextVariants = cva('text-background font-normal text-center', {
  variants: {
    size: {
      default: 'text-[14px] leading-[14px]',
      big: 'text-[16px] leading-[16px]'
    }
  },
  defaultVariants: {
    size: 'default'
  }
});

interface TagProps extends ComponentPropsWithoutRef<typeof View>, VariantProps<typeof tagVariants> {
  label: string;
  className?: string;
  size?: 'default' | 'big';
}

const Tag = forwardRef<View, TagProps>(({ label, size, className, ...props }, ref) => {
  return (
    <View ref={ref} style={{ minWidth: 43 }} className={cn(tagVariants({ size }), className)} {...props}>
      <Text className={tagTextVariants({ size })}>{label}</Text>
    </View>
  );
});

Tag.displayName = 'Tag';

export { Tag };
