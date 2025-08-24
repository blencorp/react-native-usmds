import { ScrollView, View } from 'react-native';
import { Badge } from '../../../storybook/components/Badge/Badge';
import { Text } from '../../../storybook/components/Text/Text';

export default function BadgeScreen() {
  return (
    <ScrollView className='flex-1 bg-background'>
      <View className='p-4 space-y-8 w-full max-w-[393px] mx-auto'>
        
        {/* Badge Variants */}
        <View>
          <Text className='text-lg font-bold mb-4'>Badge Variants</Text>
          <View className='space-y-4'>
            {/* Default */}
            <View>
              <Text className='text-sm text-muted-foreground mb-2'>Default</Text>
              <View className='flex-row flex-wrap gap-2'>
                <Badge label='Default' variant='default' />
                <Badge label='New' variant='default' />
                <Badge label='Badge' variant='default' />
              </View>
            </View>

            {/* Success */}
            <View>
              <Text className='text-sm text-muted-foreground mb-2'>Success</Text>
              <View className='flex-row flex-wrap gap-2'>
                <Badge label='Success' variant='success' />
                <Badge label='Complete' variant='success' />
                <Badge label='Done' variant='success' />
              </View>
            </View>

            {/* Warning */}
            <View>
              <Text className='text-sm text-muted-foreground mb-2'>Warning</Text>
              <View className='flex-row flex-wrap gap-2'>
                <Badge label='Warning' variant='warning' />
                <Badge label='Pending' variant='warning' />
                <Badge label='Review' variant='warning' />
              </View>
            </View>

            {/* Info */}
            <View>
              <Text className='text-sm text-muted-foreground mb-2'>Info</Text>
              <View className='flex-row flex-wrap gap-2'>
                <Badge label='Info' variant='info' />
                <Badge label='Note' variant='info' />
                <Badge label='Update' variant='info' />
              </View>
            </View>

            {/* Destructive */}
            <View>
              <Text className='text-sm text-muted-foreground mb-2'>Destructive</Text>
              <View className='flex-row flex-wrap gap-2'>
                <Badge label='Destructive' variant='destructive' />
                <Badge label='Error' variant='destructive' />
                <Badge label='Failed' variant='destructive' />
              </View>
            </View>
          </View>
        </View>

        {/* Badge with Numbers */}
        <View>
          <Text className='text-lg font-bold mb-4'>With Numbers</Text>
          <View className='flex-row flex-wrap gap-2'>
            <Badge label='1' variant='default' />
            <Badge label='12' variant='success' />
            <Badge label='99+' variant='warning' />
            <Badge label='100' variant='info' />
            <Badge label='999' variant='destructive' />
          </View>
        </View>

        {/* Status Badges */}
        <View>
          <Text className='text-lg font-bold mb-4'>Status Badges</Text>
          <View className='space-y-3'>
            <View className='flex-row flex-wrap gap-2'>
              <Badge label='Active' variant='success' />
              <Badge label='Inactive' variant='default' />
              <Badge label='Disabled' variant='destructive' />
            </View>
            <View className='flex-row flex-wrap gap-2'>
              <Badge label='Online' variant='success' />
              <Badge label='Away' variant='warning' />
              <Badge label='Offline' variant='destructive' />
            </View>
            <View className='flex-row flex-wrap gap-2'>
              <Badge label='Published' variant='success' />
              <Badge label='Draft' variant='warning' />
              <Badge label='Archived' variant='info' />
            </View>
          </View>
        </View>

        {/* Size Examples */}
        <View>
          <Text className='text-lg font-bold mb-4'>Different Contexts</Text>
          <View className='space-y-4'>
            {/* In a list item */}
            <View className='bg-card p-4 rounded-lg border border-border'>
              <View className='flex-row justify-between items-center'>
                <Text className='text-base font-medium'>Item Name</Text>
                <Badge label='New' variant='default' />
              </View>
            </View>

            {/* Multiple badges */}
            <View className='bg-card p-4 rounded-lg border border-border'>
              <Text className='text-base font-medium mb-2'>Product Details</Text>
              <View className='flex-row flex-wrap gap-2'>
                <Badge label='In Stock' variant='success' />
                <Badge label='Featured' variant='warning' />
                <Badge label='Sale' variant='destructive' />
              </View>
            </View>

            {/* With text */}
            <View className='bg-card p-4 rounded-lg border border-border'>
              <View className='flex-row items-center gap-2'>
                <Text className='text-base'>Status:</Text>
                <Badge label='Approved' variant='success' />
              </View>
            </View>
          </View>
        </View>

        {/* Category/Tag Examples */}
        <View>
          <Text className='text-lg font-bold mb-4'>Tags & Categories</Text>
          <View className='space-y-3'>
            {/* Technology tags */}
            <View>
              <Text className='text-sm text-muted-foreground mb-2'>Technologies</Text>
              <View className='flex-row flex-wrap gap-2'>
                <Badge label='React Native' variant='info' />
                <Badge label='TypeScript' variant='info' />
                <Badge label='Expo' variant='info' />
                <Badge label='NativeWind' variant='info' />
              </View>
            </View>

            {/* Priority tags */}
            <View>
              <Text className='text-sm text-muted-foreground mb-2'>Priority</Text>
              <View className='flex-row flex-wrap gap-2'>
                <Badge label='High' variant='destructive' />
                <Badge label='Medium' variant='warning' />
                <Badge label='Low' variant='success' />
              </View>
            </View>

            {/* Department tags */}
            <View>
              <Text className='text-sm text-muted-foreground mb-2'>Departments</Text>
              <View className='flex-row flex-wrap gap-2'>
                <Badge label='Engineering' variant='default' />
                <Badge label='Design' variant='default' />
                <Badge label='Marketing' variant='default' />
                <Badge label='Sales' variant='default' />
              </View>
            </View>
          </View>
        </View>

        {/* Notification Badges */}
        <View>
          <Text className='text-lg font-bold mb-4'>Notification Badges</Text>
          <View className='flex-row gap-4'>
            {/* Icon with badge simulation */}
            <View className='relative'>
              <View className='h-10 w-10 bg-muted rounded-lg' />
              <View className='absolute -top-1 -right-1'>
                <Badge label='3' variant='destructive' />
              </View>
            </View>
            
            <View className='relative'>
              <View className='h-10 w-10 bg-muted rounded-lg' />
              <View className='absolute -top-1 -right-1'>
                <Badge label='12' variant='warning' />
              </View>
            </View>

            <View className='relative'>
              <View className='h-10 w-10 bg-muted rounded-lg' />
              <View className='absolute -top-1 -right-1'>
                <Badge label='99+' variant='success' />
              </View>
            </View>
          </View>
        </View>

        {/* All Variants Showcase */}
        <View>
          <Text className='text-lg font-bold mb-4'>All Variants</Text>
          <View className='bg-muted/20 p-4 rounded-lg'>
            <View className='flex-row flex-wrap gap-2'>
              <Badge label='Default' variant='default' />
              <Badge label='Success' variant='success' />
              <Badge label='Warning' variant='warning' />
              <Badge label='Info' variant='info' />
              <Badge label='Destructive' variant='destructive' />
            </View>
          </View>
        </View>

      </View>
    </ScrollView>
  );
}