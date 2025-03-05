import { ComponentPropsWithoutRef, forwardRef, useState } from 'react';
import { Text, Pressable, View } from 'react-native';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../../lib/utils';
import { Icon } from '../Icon/Icon';

const linkVariants = cva('font-source-sans-pro text-base leading-[162%] underline', {
  variants: {
    variant: {
      default: 'text-primary',
      visited: 'text-violet-vivid-70',
      'dark-background': 'text-primary-light'
    },
    external: {
      true: 'flex-row items-center gap-0.5',
      false: ''
    },
    focus: {
      true: 'outline-none ring-4 ring-focus-ring rounded',
      false: ''
    }
  },
  defaultVariants: {
    variant: 'default',
    external: false,
    focus: false
  }
});

interface LinkProps extends ComponentPropsWithoutRef<typeof Pressable>, VariantProps<typeof linkVariants> {
  href: string;
  label: string;
  className?: string;
  visited?: boolean;
  variant?: 'default' | 'visited' | 'dark-background';
  external?: boolean;
  focus?: boolean;
}

const Link = forwardRef<View, LinkProps>(({ href, label, className, external, visited, focus, ...props }, ref) => {
  const [isPressed, setIsPressed] = useState(false);
  const variant = visited ? 'visited' : props.variant;

  return (
    <Pressable
      ref={ref}
      onPressIn={() => setIsPressed(true)}
      onPressOut={() => setIsPressed(false)}
      className={cn(linkVariants({ variant, external, focus }), className)}
      {...props}
    >
      {({ pressed }) => (
        <View className={cn(linkVariants({ variant, external, focus: pressed || isPressed || focus }))}>
          <Text className={linkVariants({ variant, external, focus: pressed || isPressed || focus })}>{label}</Text>
          {external && (
            <Icon
              name='launch'
              size={10}
              className={cn(variant === 'dark-background' ? 'text-primary-light' : visited ? 'text-violet-vivid-70' : 'text-primary')}
            />
          )}
        </View>
      )}
    </Pressable>
  );
});

Link.displayName = 'Link';

export { Link };
