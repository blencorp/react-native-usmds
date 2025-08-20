import { ScrollView, View } from 'react-native';
import { Text } from '../../../storybook/components/Text/Text';

export default function TextScreen() {
  return (
    <ScrollView className='flex-1 bg-background'>
      <View className='p-4 space-y-8 w-full max-w-[393px] mx-auto'>
        
        {/* Color Variants */}
        <View>
          <Text className='text-lg font-bold mb-4'>Color Variants</Text>
          <View className='space-y-3 bg-muted/20 p-4 rounded-lg'>
            <View className='flex-row justify-between items-center'>
              <Text className='text-base-ink'>Base Ink</Text>
              <Text className='text-xs text-muted-foreground'>text-base-ink</Text>
            </View>
            <View className='flex-row justify-between items-center'>
              <Text className='text-primary'>Primary</Text>
              <Text className='text-xs text-muted-foreground'>text-primary</Text>
            </View>
            <View className='flex-row justify-between items-center'>
              <Text className='text-secondary'>Secondary</Text>
              <Text className='text-xs text-muted-foreground'>text-secondary</Text>
            </View>
            <View className='flex-row justify-between items-center'>
              <Text className='text-error'>Error</Text>
              <Text className='text-xs text-muted-foreground'>text-error</Text>
            </View>
            <View className='flex-row justify-between items-center'>
              <Text className='text-success'>Success</Text>
              <Text className='text-xs text-muted-foreground'>text-success</Text>
            </View>
            <View className='flex-row justify-between items-center'>
              <Text className='text-warning'>Warning</Text>
              <Text className='text-xs text-muted-foreground'>text-warning</Text>
            </View>
          </View>
        </View>

        {/* Typography Scale */}
        <View>
          <Text className='text-lg font-bold mb-4'>Typography Scale</Text>
          
          {/* Display Sizes */}
          <View className='space-y-4 mb-6'>
            <Text className='text-sm text-muted-foreground uppercase tracking-wider mb-2'>Display</Text>
            <View className='space-y-3'>
              <View>
                <Text className='text-[40px] leading-[48px] font-bold'>Display Large</Text>
                <Text className='text-xs text-muted-foreground'>40px / 48px</Text>
              </View>
              <View>
                <Text className='text-[36px] leading-[44px] font-bold'>Display Medium</Text>
                <Text className='text-xs text-muted-foreground'>36px / 44px</Text>
              </View>
              <View>
                <Text className='text-[32px] leading-[40px] font-bold'>Display Small</Text>
                <Text className='text-xs text-muted-foreground'>32px / 40px</Text>
              </View>
            </View>
          </View>

          {/* Heading Sizes */}
          <View className='space-y-4 mb-6'>
            <Text className='text-sm text-muted-foreground uppercase tracking-wider mb-2'>Headings</Text>
            <View className='space-y-3'>
              <View>
                <Text className='text-[22px] leading-[28px]'>Heading Large</Text>
                <Text className='text-xs text-muted-foreground'>22px / 28px</Text>
              </View>
              <View>
                <Text className='text-[20px] leading-[24px]'>Heading Medium</Text>
                <Text className='text-xs text-muted-foreground'>20px / 24px</Text>
              </View>
              <View>
                <Text className='text-[18px] leading-[22px]'>Heading Small</Text>
                <Text className='text-xs text-muted-foreground'>18px / 22px</Text>
              </View>
            </View>
          </View>

          {/* Body Sizes */}
          <View className='space-y-4'>
            <Text className='text-sm text-muted-foreground uppercase tracking-wider mb-2'>Body</Text>
            <View className='space-y-3'>
              <View>
                <Text className='text-[16px] leading-[20px]'>Body Large - Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>
                <Text className='text-xs text-muted-foreground'>16px / 20px</Text>
              </View>
              <View>
                <Text className='text-[14px] leading-[18px]'>Body Medium - Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>
                <Text className='text-xs text-muted-foreground'>14px / 18px</Text>
              </View>
              <View>
                <Text className='text-[12px] leading-[16px]'>Body Small - Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>
                <Text className='text-xs text-muted-foreground'>12px / 16px</Text>
              </View>
            </View>
          </View>
        </View>

        {/* Font Weights */}
        <View>
          <Text className='text-lg font-bold mb-4'>Font Weights</Text>
          <View className='space-y-3 bg-muted/20 p-4 rounded-lg'>
            <View className='flex-row justify-between items-center'>
              <Text className='font-normal text-lg'>Normal</Text>
              <Text className='text-xs text-muted-foreground'>400</Text>
            </View>
            <View className='flex-row justify-between items-center'>
              <Text className='font-medium text-lg'>Medium</Text>
              <Text className='text-xs text-muted-foreground'>500</Text>
            </View>
            <View className='flex-row justify-between items-center'>
              <Text className='font-semibold text-lg'>Semibold</Text>
              <Text className='text-xs text-muted-foreground'>600</Text>
            </View>
            <View className='flex-row justify-between items-center'>
              <Text className='font-bold text-lg'>Bold</Text>
              <Text className='text-xs text-muted-foreground'>700</Text>
            </View>
          </View>
        </View>

        {/* Sample Paragraph */}
        <View>
          <Text className='text-lg font-bold mb-4'>Sample Paragraph</Text>
          <View className='bg-muted/20 p-4 rounded-lg'>
            <Text className='text-lg font-semibold mb-2'>The Quick Brown Fox</Text>
            <Text className='text-base leading-relaxed text-foreground/80'>
              The quick brown fox jumps over the lazy dog. This pangram sentence contains every letter of the alphabet at least once, making it useful for testing typefaces and demonstrating typography.
            </Text>
            <Text className='text-sm text-muted-foreground mt-3'>
              This sample demonstrates how different text styles work together in a typical content block.
            </Text>
          </View>
        </View>

      </View>
    </ScrollView>
  );
}
