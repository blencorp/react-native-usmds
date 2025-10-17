import { cn } from '@/registry/usa/lib/utils';
import { Text } from '@/registry/usa/components/ui/text';
import * as AvatarPrimitive from '@rn-primitives/avatar';

function Avatar({
  className,
  ...props
}: AvatarPrimitive.RootProps & React.RefAttributes<AvatarPrimitive.RootRef>) {
  return (
    <AvatarPrimitive.Root
      className={cn('relative flex size-8 shrink-0 overflow-hidden rounded-full', className)}
      {...props}
    />
  );
}

function AvatarImage({
  className,
  ...props
}: AvatarPrimitive.ImageProps & React.RefAttributes<AvatarPrimitive.ImageRef>) {
  return <AvatarPrimitive.Image className={cn('aspect-square size-full', className)} {...props} />;
}

function AvatarFallback({
  className,
  children,
  ...props
}: AvatarPrimitive.FallbackProps & React.RefAttributes<AvatarPrimitive.FallbackRef>) {
  return (
    <AvatarPrimitive.Fallback
      className={cn(
        'bg-muted flex size-full flex-row items-center justify-center rounded-full',
        className
      )}
      {...props}
    >
      {children ?? (
        <Text className="text-xs font-semibold uppercase tracking-wider text-foreground">
          US
        </Text>
      )}
    </AvatarPrimitive.Fallback>
  );
}

export { Avatar, AvatarFallback, AvatarImage };
