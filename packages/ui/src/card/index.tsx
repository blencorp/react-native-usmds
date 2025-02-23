import { ComponentPropsWithoutRef, forwardRef } from 'react';
import { View, Image } from 'react-native';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';
import { Button } from '../button';
import { Text } from '../text';

const cardVariants = cva(
  'flex flex-col justify-between items-start bg-white border border-base-lighter rounded-[4px] w-[329px] min-h-[471px] mx-auto',
  {
    variants: {
      variant: {
        default: '',
        'media-first': '',
        inset: ''
      }
    },
    defaultVariants: {
      variant: 'default'
    }
  }
);

interface CardProps extends ComponentPropsWithoutRef<typeof View>, VariantProps<typeof cardVariants> {
  title: string;
  description: string;
  buttonText: string;
  mediaUrl?: string;
  showMedia?: boolean;
  className?: string;
}

const Card = forwardRef<View, CardProps>(({ title, description, buttonText, mediaUrl, showMedia = false, variant, className, ...props }, ref) => {
  const isMediaFirst = variant === 'media-first';
  const isInset = variant === 'inset';

  return (
    <View ref={ref} className={cn(cardVariants({ variant }), className)} {...props}>
      <View className='flex flex-col flex-1'>
        {showMedia && isMediaFirst && mediaUrl && (
          <View className='flex text-center items-center justify-center w-full'>
            <Image
              source={{ uri: mediaUrl }}
              style={{
                width: 327,
                height: 188,
                borderTopLeftRadius: 4,
                borderTopRightRadius: 4
              }}
              resizeMode='cover'
            />
          </View>
        )}

        <View className='px-6 pt-6 pb-2'>
          <Text className='font-merriweather font-bold text-[22px] leading-7 text-base-ink'>{title}</Text>
        </View>

        {showMedia && isInset && mediaUrl && (
          <View className='px-6'>
            <Image
              source={{ uri: mediaUrl }}
              style={{
                width: '100%',
                height: 162,
                borderRadius: 0
              }}
              resizeMode='cover'
            />
          </View>
        )}

        <View className='px-6 py-2'>
          <Text className='text-base leading-[162%] text-base-ink'>{description}</Text>
        </View>
      </View>

      <View className='px-6 pb-6 w-full'>
        <Button variant='default' size='sm'>
          <Text>{buttonText}</Text>
        </Button>
      </View>
    </View>
  );
});

Card.displayName = 'Card';

export { Card };
