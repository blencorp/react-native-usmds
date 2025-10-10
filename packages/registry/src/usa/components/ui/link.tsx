import { ComponentPropsWithoutRef, forwardRef, useState } from 'react';
import { Text, Pressable, View, Platform } from 'react-native';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/registry/usa/lib/utils';
import { Icon } from '@/registry/usa/components/ui/icon';
import { ExternalLink } from 'lucide-react-native';

const linkVariants = cva(cn('text-base leading-[162%] underline', Platform.select({ web: 'cursor-pointer' })), {
  variants: {
    variant: {
      default: 'text-primary',
      visited: 'text-secondary',
      'dark-background': 'text-primary'
    },
    external: {
      true: 'flex-row items-center gap-0.5',
      false: ''
    },
    focus: {
      true: cn('outline-none rounded', Platform.select({ web: 'ring-4 ring-ring' })),
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
      accessibilityRole='link'
      {...props}
    >
      {({ pressed }) => (
        <View className={cn(linkVariants({ variant, external, focus: pressed || isPressed || focus }))}>
          <Text className={linkVariants({ variant, external, focus: pressed || isPressed || focus })}>{label}</Text>
          {external && (
            <Icon
              as={ExternalLink}
              size={14}
              className={cn(visited ? 'text-secondary' : 'text-primary')}
            />
          )}
        </View>
      )}
    </Pressable>
  );
});

Link.displayName = 'Link';

export { Link };
