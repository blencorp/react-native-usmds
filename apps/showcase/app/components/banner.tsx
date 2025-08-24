import { ScrollView, View } from 'react-native';
import { Banner } from '../../../storybook/components/Banner/Banner';
import { Text } from '../../../storybook/components/Text/Text';
import { Bell, Menu, Home, Settings, User, ChevronRight } from 'lucide-react-native';

export default function BannerScreen() {
  return (
    <ScrollView className='flex-1 bg-background'>
      <View className='p-4 space-y-8 w-full mx-auto'>
        
        {/* Standard App Banner */}
        <View>
          <View className='p-4'>
            <Text className='text-lg font-bold mb-4'>Standard App Banner</Text>
            <Text className='text-sm text-muted-foreground mb-4'>Official government app banner with flag and link</Text>
          </View>
          <Banner 
            variant='standard-app' 
            title='An official app of the United States government' 
            link="Here's how you know" 
          />
        </View>

        {/* Welcome Banners */}
        <View>
          <View className='p-4'>
            <Text className='text-lg font-bold mb-4'>Welcome Banners</Text>
            <Text className='text-sm text-muted-foreground mb-4'>Personalized greeting banners with icons</Text>
          </View>
          <View className='space-y-4'>
            {/* Morning */}
            <View className='px-4'>
              <Banner 
                variant='welcome' 
                title='Good morning, Sarah' 
                trailingIcon={<Bell color='#1B1B1B' size={24} />} 
              />
            </View>

            {/* Afternoon */}
            <View className='px-4'>
              <Banner 
                variant='welcome' 
                title='Good afternoon, Daniel' 
                trailingIcon={<Bell color='#1B1B1B' size={24} />} 
              />
            </View>

            {/* Evening */}
            <View className='px-4'>
              <Banner 
                variant='welcome' 
                title='Good evening, Alex' 
                trailingIcon={<Bell color='#1B1B1B' size={24} />} 
              />
            </View>
          </View>
        </View>

        {/* Welcome with Different Icons */}
        <View>
          <View className='p-4'>
            <Text className='text-lg font-bold mb-4'>Welcome with Different Icons</Text>
            <Text className='text-sm text-muted-foreground mb-4'>Various icon options for welcome banners</Text>
          </View>
          <View className='space-y-4'>
            {/* Menu Icon */}
            <View className='px-4'>
              <Banner 
                variant='welcome' 
                title='Welcome back, John' 
                trailingIcon={<Menu color='#1B1B1B' size={24} />} 
              />
            </View>

            {/* Home Icon */}
            <View className='px-4'>
              <Banner 
                variant='welcome' 
                title='Welcome home, Emily' 
                trailingIcon={<Home color='#1B1B1B' size={24} />} 
              />
            </View>

            {/* Settings Icon */}
            <View className='px-4'>
              <Banner 
                variant='welcome' 
                title='Welcome, Administrator' 
                trailingIcon={<Settings color='#1B1B1B' size={24} />} 
              />
            </View>

            {/* User Icon */}
            <View className='px-4'>
              <Banner 
                variant='welcome' 
                title='Hello, Guest User' 
                trailingIcon={<User color='#1B1B1B' size={24} />} 
              />
            </View>

            {/* Arrow Icon */}
            <View className='px-4'>
              <Banner 
                variant='welcome' 
                title='Continue where you left off' 
                trailingIcon={<ChevronRight color='#1B1B1B' size={24} />} 
              />
            </View>
          </View>
        </View>

        {/* Standard App Without Link */}
        <View>
          <View className='p-4'>
            <Text className='text-lg font-bold mb-4'>Standard App Without Link</Text>
            <Text className='text-sm text-muted-foreground mb-4'>Government banner without the "Here's how you know" link</Text>
          </View>
          <Banner 
            variant='standard-app' 
            title='An official app of the United States government' 
          />
        </View>

        {/* Welcome Without Icon */}
        <View>
          <View className='p-4'>
            <Text className='text-lg font-bold mb-4'>Welcome Without Icon</Text>
            <Text className='text-sm text-muted-foreground mb-4'>Simple welcome message without trailing icon</Text>
          </View>
          <View className='px-4'>
            <Banner 
              variant='welcome' 
              title='Welcome to USMDS' 
            />
          </View>
        </View>

        {/* Use Cases */}
        <View>
          <View className='p-4'>
            <Text className='text-lg font-bold mb-4'>Common Use Cases</Text>
          </View>
          
          {/* Government App Header */}
          <View className='mb-6'>
            <View className='px-4 mb-2'>
              <Text className='text-sm text-muted-foreground'>Government App Header</Text>
            </View>
            <View className='bg-white'>
              <Banner 
                variant='standard-app' 
                title='An official app of the United States government' 
                link="Here's how you know" 
              />
              <View className='border-t border-gray-200 p-4'>
                <Text className='text-lg font-semibold'>Department of Example</Text>
                <Text className='text-sm text-gray-600'>Your trusted government service</Text>
              </View>
            </View>
          </View>

          {/* Dashboard Welcome */}
          <View className='mb-6'>
            <View className='px-4 mb-2'>
              <Text className='text-sm text-muted-foreground'>Dashboard Welcome</Text>
            </View>
            <View className='bg-card mx-4 rounded-lg overflow-hidden'>
              <Banner 
                variant='welcome' 
                title='Good morning, Sarah' 
                trailingIcon={<Bell color='#1B1B1B' size={24} />} 
              />
              <View className='p-4 border-t border-border'>
                <Text className='text-base'>You have 3 new notifications</Text>
              </View>
            </View>
          </View>
        </View>

        {/* All Variants Summary */}
        <View className='pb-8'>
          <View className='p-4'>
            <Text className='text-lg font-bold mb-4'>All Variants</Text>
            <Text className='text-sm text-muted-foreground mb-4'>Quick reference of all banner variants</Text>
          </View>
          <View className='space-y-4'>
            <Banner 
              variant='standard-app' 
              title='An official app of the United States government' 
              link="Here's how you know" 
            />
            <View className='px-4'>
              <Banner 
                variant='welcome' 
                title='Welcome, User' 
                trailingIcon={<Bell color='#1B1B1B' size={24} />} 
              />
            </View>
          </View>
        </View>

      </View>
    </ScrollView>
  );
}