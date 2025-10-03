import { ComponentPropsWithoutRef, ElementRef, forwardRef, ReactNode } from 'react';
import { View, Text, Pressable } from 'react-native';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../../lib/utils';
import Svg, { Path, Defs, Pattern, Image, Use } from 'react-native-svg';

const bannerVariants = cva('flex flex-row items-center', {
  variants: {
    variant: {
      'standard-app': 'bg-muted p-4 gap-5 h-[88px] w-full max-w-[393px]',
      welcome: 'p-0 gap-4 h-[40px] w-[329px]'
    }
  },
  defaultVariants: {
    variant: 'standard-app'
  }
});

const bannerTextVariants = cva('whitespace-nowrap', {
  variants: {
    variant: {
      'standard-app': 'text-foreground text-[12px] leading-[14px]',
      welcome: 'text-foreground text-[22px] leading-[28px] font-bold w-[273px]'
    }
  },
  defaultVariants: {
    variant: 'standard-app'
  }
});

type BannerProps = ComponentPropsWithoutRef<typeof View> &
  VariantProps<typeof bannerVariants> & {
    className?: string;
    title?: string;
    link?: string;
    trailingIcon?: ReactNode;
  };

const FlagIcon = ({ size = 31 }) => (
  <View style={{ width: size, height: (size * 22) / 31 }}>
    <Svg width={size} height={(size * 22) / 31} viewBox='0 0 31 22' fill='none'>
      <Path d='M0 0.69342V21.4307H30.1634V0.69342H0Z' fill='url(#pattern0)' />
      <Defs>
        <Pattern id='pattern0' patternContentUnits='objectBoundingBox' width={1} height={1}>
          <Use href='#image0' transform='scale(0.0625 0.0909091)' />
        </Pattern>
        <Image
          id='image0'
          width={16}
          height={11}
          href='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAALCAMAAABBPP0LAAAAG1BMVEUdM7EeNLIeM7HgQCDaPh/bPh/bPx/////bPyBEby41AAAAUElEQVQI123MNw4CABDEwD3jC/9/MQ1BQrgeOSkIqYe2o2FZtthXgQLgbHVMZdlsfUQFQnHtjP1+8BUhBDKOqtmfot6ojqPzR7TjdU+f6vkED+IDPhTBcMAAAAAASUVORK5CYII='
        />
      </Defs>
    </Svg>
  </View>
);

const Banner = forwardRef<ElementRef<typeof View>, BannerProps>(({ className, variant, title, link, trailingIcon, ...props }, ref) => {
  const isStandardApp = variant === 'standard-app';

  return (
    <View ref={ref} testID='banner' accessibilityRole='header' className={cn(bannerVariants({ variant, className }))} {...props}>
      {isStandardApp && (
        <>
          <FlagIcon />
          <View className='h-14 w-[1px] bg-border flex-shrink-0' />
        </>
      )}

      <View className={cn('flex flex-col', isStandardApp ? 'gap-3 flex-1' : 'gap-0')}>
        <Text className={bannerTextVariants({ variant })} numberOfLines={1}>
          {isStandardApp ? (
            <>
              <Text className='font-bold'>An official app</Text>
              <Text className='font-normal'> of the United States government</Text>
            </>
          ) : (
            title
          )}
        </Text>
        {isStandardApp && link && (
          <Pressable accessibilityRole='link' accessibilityLabel={link}>
            <Text className='text-primary text-[12px] leading-[14px] font-semibold underline whitespace-nowrap' numberOfLines={1}>
              {link}
            </Text>
          </Pressable>
        )}
      </View>

      {trailingIcon && (
        <View className='flex flex-row justify-center items-center w-[40px] h-[40px] p-2'>
          <View className='w-6 h-6'>{trailingIcon}</View>
        </View>
      )}
    </View>
  );
});

Banner.displayName = 'Banner';

export { Banner, type BannerProps };
