import { ComponentPropsWithoutRef, forwardRef, useState } from 'react';
import { Text, Pressable, View } from 'react-native';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';
import { ExternalLink } from 'lucide-react-native';

const linkVariants = cva('font-source-sans-pro text-base leading-[162%] underline', {
  variants: {
    variant: {
      default: 'text-primary',
      visited: 'text-[#54278F]', // violet-vivid-70v
      'dark-background': 'text-[#73B3E7]' // primary-light
    },
    external: {
      true: 'flex-row items-center gap-0.5',
      false: ''
    },
    focus: {
      true: 'outline-none ring-4 ring-[#2491FF] rounded',
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
          {external && <ExternalLink size={10} color={variant === 'dark-background' ? '#73B3E7' : visited ? '#54278F' : '#005EA2'} />}
        </View>
      )}
    </Pressable>
  );
});

Link.displayName = 'Link';

export { Link };
