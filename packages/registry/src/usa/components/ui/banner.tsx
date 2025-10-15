import { ComponentPropsWithoutRef, ElementRef, forwardRef, ReactNode, useState } from 'react';
import { View, Text, Pressable } from 'react-native';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/registry/usa/lib/utils';
import Svg from 'react-native-svg';
import * as CollapsiblePrimitive from '@rn-primitives/collapsible';
import { ChevronDown, ChevronUp } from 'lucide-react-native';

const bannerVariants = cva('flex flex-row items-center w-full', {
  variants: {
    variant: {
      'standard-app': 'bg-muted p-4 gap-5 min-h-[88px]',
      welcome: 'p-0 gap-4 h-[40px]'
    }
  },
  defaultVariants: {
    variant: 'standard-app'
  }
});

const bannerTextVariants = cva('', {
  variants: {
    variant: {
      'standard-app': 'text-foreground text-[12px] leading-[14px]',
      welcome: 'text-foreground text-[22px] leading-[28px] font-bold'
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
    domain?: 'gov' | 'mil';
    language?: 'en' | 'es';
  };

const FlagIcon = ({ size = 31 }) => {
  const aspectRatio = 16 / 11; // Standard US flag aspect ratio
  const height = size / aspectRatio;

  return (
    <View style={{ width: size, height }}>
      <Svg width={size} height={height} viewBox='0 0 16 11' fill='none'>
        <image
          width={16}
          height={11}
          href='https://storage.googleapis.com/usmds-registry/assets/banner/us_flag_small.png'
        />
      </Svg>
    </View>
  );
};

const LockIcon = ({ size = 24 }) => (
  <Svg width={size} height={size} viewBox='0 0 24 24' fill='none'>
    <image
      width={24}
      height={24}
      href='https://storage.googleapis.com/usmds-registry/assets/banner/lock.svg'
    />
  </Svg>
);

const BuildingIcon = ({ size = 24 }) => (
  <Svg width={size} height={size} viewBox='0 0 24 24' fill='none'>
    <image
      width={24}
      height={24}
      href='https://storage.googleapis.com/usmds-registry/assets/banner/white_house.svg'
    />
  </Svg>
);

const getBannerContent = (domain: 'gov' | 'mil' = 'gov', language: 'en' | 'es' = 'en') => {
  const content = {
    gov: {
      en: {
        header: 'An official website of the United States government',
        button: "Here's how you know",
        section1Title: 'Official websites use .gov',
        section1Body: 'A .gov website belongs to an official government organization in the United States.',
        section2Title: 'Secure .gov websites use HTTPS',
        section2Body: 'A lock ( 🔒 ) or https:// means you\'ve safely connected to the .gov website. Share sensitive information only on official, secure websites.',
      },
      es: {
        header: 'Un sitio oficial del Gobierno de Estados Unidos',
        button: 'Así es como usted puede verificarlo',
        section1Title: 'Los sitios web oficiales usan .gov',
        section1Body: 'Un sitio web .gov pertenece a una organización oficial del Gobierno de Estados Unidos.',
        section2Title: 'Los sitios web seguros .gov usan HTTPS',
        section2Body: 'Un candado ( 🔒 ) o https:// significa que usted se conectó de forma segura a un sitio web .gov Comparta información sensible sólo en sitios web oficiales y seguros.',
      },
    },
    mil: {
      en: {
        header: 'An official website of the United States government',
        button: "Here's how you know",
        section1Title: 'Official websites use .mil',
        section1Body: 'A .mil website belongs to an official U.S. Department of Defense organization.',
        section2Title: 'Secure .mil websites use HTTPS',
        section2Body: 'A lock ( 🔒 ) or https:// means you\'ve safely connected to the .mil website. Share sensitive information only on official, secure websites.',
      },
      es: {
        header: 'Un sitio oficial del Gobierno de Estados Unidos',
        button: 'Así es como usted puede verificarlo',
        section1Title: 'Los sitios web oficiales usan .mil',
        section1Body: 'Un sitio web .mil pertenece a una organización oficial del Departamento de Defensa de EE. UU.',
        section2Title: 'Los sitios web seguros .mil usan HTTPS',
        section2Body: 'Un candado ( 🔒 ) o https:// significa que usted se conectó de forma segura a un sitio web .mil Comparta información sensible sólo en sitios web oficiales y seguros.',
      },
    },
  };

  return content[domain][language];
};

const Banner = forwardRef<ElementRef<typeof View>, BannerProps>(({ className, variant, title, link, trailingIcon, domain = 'gov', language = 'en', ...props }, ref) => {
  const isStandardApp = variant === 'standard-app';
  const [isExpanded, setIsExpanded] = useState(false);

  // USWDS primary color - same in light and dark mode per design system
  const primaryColor = '#005EA2';
  const bannerContent = getBannerContent(domain, language);

  return (
    <View ref={ref} testID='banner' accessibilityRole='header' className={cn('w-full', className)} {...props}>
      <View className={cn(bannerVariants({ variant }))}>
        {isStandardApp && (
          <>
            <FlagIcon />
            <View className='h-14 w-[1px] bg-border flex-shrink-0' />
          </>
        )}

        <View className={cn('flex flex-col', isStandardApp ? 'gap-3 flex-1' : 'gap-0')} pointerEvents='box-none'>
          <Text className={bannerTextVariants({ variant })}>
            {isStandardApp ? (
              bannerContent.header
            ) : (
              title
            )}
          </Text>
          {isStandardApp && (
            <Pressable
              accessibilityRole='button'
              accessibilityLabel={bannerContent.button}
              onPress={() => setIsExpanded(!isExpanded)}
              className='flex flex-row items-center gap-1.5 self-start'
            >
              <Text className='text-primary text-[12px] leading-[14px] font-semibold underline'>
                {bannerContent.button}
              </Text>
              {isExpanded ? (
                <ChevronUp size={14} color={primaryColor} />
              ) : (
                <ChevronDown size={14} color={primaryColor} />
              )}
            </Pressable>
          )}
        </View>

        {trailingIcon && (
          <View className='flex flex-row justify-center items-center w-[40px] h-[40px] p-2'>
            <View className='w-6 h-6'>{trailingIcon}</View>
          </View>
        )}
      </View>

      {isStandardApp && (
        <CollapsiblePrimitive.Root open={isExpanded}>
          <CollapsiblePrimitive.Content className='bg-muted/50 border-t border-border w-full'>
            <View className='p-4 flex-row gap-6'>
              {/* Official government website section */}
              <View className='flex-1 flex-row gap-3'>
                <View className='pt-0.5'>
                  <BuildingIcon size={32} />
                </View>
                <View className='flex-1 flex-col gap-1'>
                  <Text className='text-foreground text-[12px] leading-[16px] font-bold'>
                    {bannerContent.section1Title}
                  </Text>
                  <Text className='text-foreground/80 text-[12px] leading-[16px]'>
                    {bannerContent.section1Body}
                  </Text>
                </View>
              </View>

              {/* HTTPS secure section */}
              <View className='flex-1 flex-row gap-3'>
                <View className='pt-0.5'>
                  <LockIcon size={32} />
                </View>
                <View className='flex-1 flex-col gap-1'>
                  <Text className='text-foreground text-[12px] leading-[16px] font-bold'>
                    {bannerContent.section2Title}
                  </Text>
                  <Text className='text-foreground/80 text-[12px] leading-[16px]'>
                    {bannerContent.section2Body}
                  </Text>
                </View>
              </View>
            </View>
          </CollapsiblePrimitive.Content>
        </CollapsiblePrimitive.Root>
      )}
    </View>
  );
});

Banner.displayName = 'Banner';

export { Banner, type BannerProps };
