import { ScrollView, View } from 'react-native';
import { Card } from '../../../storybook/components/Card/Card';
import { Text } from '../../../storybook/components/Text/Text';

export default function CardScreen() {
  return (
    <ScrollView className='flex-1 bg-background'>
      <View className='p-4 space-y-8 w-full mx-auto'>
        
        {/* Card Variants */}
        <View>
          <Text className='text-lg font-bold mb-4'>Card Variants</Text>
          
          {/* Default Card */}
          <View className='mb-6'>
            <Text className='text-sm text-muted-foreground mb-2'>Default (No Media)</Text>
            <Card
              title='Default Card'
              description='This is a standard card without any media. It contains a title, description text, and a call-to-action button at the bottom.'
              buttonText='Learn More'
              variant='default'
              showMedia={false}
            />
          </View>

          {/* Media First Card */}
          <View className='mb-6'>
            <Text className='text-sm text-muted-foreground mb-2'>Media First</Text>
            <Card
              title='Media First Card'
              description='This card displays the media at the top, followed by the title, description, and button. Great for showcasing visual content.'
              buttonText='View Details'
              variant='media-first'
              showMedia={true}
              mediaUrl='https://picsum.photos/329/188'
            />
          </View>

          {/* Inset Media Card */}
          <View className='mb-6'>
            <Text className='text-sm text-muted-foreground mb-2'>Inset Media</Text>
            <Card
              title='Inset Media Card'
              description='This card has the media placed between the title and description, creating a different visual hierarchy.'
              buttonText='Explore'
              variant='inset'
              showMedia={true}
              mediaUrl='https://picsum.photos/329/162'
            />
          </View>
        </View>

        {/* Content Examples */}
        <View>
          <Text className='text-lg font-bold mb-4'>Content Examples</Text>
          
          {/* Short Content */}
          <View className='mb-6'>
            <Text className='text-sm text-muted-foreground mb-2'>Short Content</Text>
            <Card
              title='Quick Update'
              description='Brief description with minimal text.'
              buttonText='Read More'
              variant='default'
              showMedia={false}
            />
          </View>

          {/* Long Content */}
          <View className='mb-6'>
            <Text className='text-sm text-muted-foreground mb-2'>Long Content</Text>
            <Card
              title='Comprehensive Overview'
              description='This card demonstrates how longer content is handled. The description can span multiple lines and the card will adjust its height accordingly. This is useful for providing detailed information while maintaining a consistent visual structure.'
              buttonText='Continue Reading'
              variant='default'
              showMedia={false}
            />
          </View>

          {/* Rich Media */}
          <View className='mb-6'>
            <Text className='text-sm text-muted-foreground mb-2'>Rich Media Content</Text>
            <Card
              title='Featured Article'
              description='Combining beautiful imagery with compelling content creates an engaging user experience that draws attention and encourages interaction.'
              buttonText='Read Article'
              variant='media-first'
              showMedia={true}
              mediaUrl='https://picsum.photos/329/188'
            />
          </View>
        </View>

        {/* Use Cases */}
        <View>
          <Text className='text-lg font-bold mb-4'>Common Use Cases</Text>
          
          {/* News Article */}
          <View className='mb-6'>
            <Text className='text-sm text-muted-foreground mb-2'>News Article</Text>
            <Card
              title='Breaking News: Technology Update'
              description='Major tech companies announce new initiatives focused on sustainable development and environmental protection through innovative solutions.'
              buttonText='Read Full Story'
              variant='media-first'
              showMedia={true}
              mediaUrl='https://picsum.photos/329/188'
            />
          </View>

          {/* Product Card */}
          <View className='mb-6'>
            <Text className='text-sm text-muted-foreground mb-2'>Product Showcase</Text>
            <Card
              title='Premium Wireless Headphones'
              description='Experience superior sound quality with active noise cancellation, 30-hour battery life, and premium comfort for all-day wear.'
              buttonText='Shop Now'
              variant='media-first'
              showMedia={true}
              mediaUrl='https://picsum.photos/329/188'
            />
          </View>

          {/* Service Card */}
          <View className='mb-6'>
            <Text className='text-sm text-muted-foreground mb-2'>Service Offering</Text>
            <Card
              title='Professional Consulting'
              description='Our expert team provides tailored solutions to help your business grow. Get personalized strategies and dedicated support.'
              buttonText='Get Started'
              variant='default'
              showMedia={false}
            />
          </View>

          {/* Event Card */}
          <View className='mb-6'>
            <Text className='text-sm text-muted-foreground mb-2'>Event Announcement</Text>
            <Card
              title='Annual Tech Conference 2024'
              description='Join industry leaders for three days of inspiring talks, workshops, and networking opportunities. Early bird tickets available now.'
              buttonText='Register Today'
              variant='inset'
              showMedia={true}
              mediaUrl='https://picsum.photos/329/162'
            />
          </View>

          {/* Course Card */}
          <View className='mb-6'>
            <Text className='text-sm text-muted-foreground mb-2'>Online Course</Text>
            <Card
              title='Master React Native Development'
              description='Learn to build professional mobile applications with React Native. Includes 50+ hours of content, projects, and certification.'
              buttonText='Enroll Now'
              variant='media-first'
              showMedia={true}
              mediaUrl='https://picsum.photos/329/188'
            />
          </View>
        </View>

        {/* Grid Layout Example */}
        <View>
          <Text className='text-lg font-bold mb-4'>Grid Layout</Text>
          <Text className='text-sm text-muted-foreground mb-4'>Cards work great in grid layouts for showcasing multiple items</Text>
          
          <View className='space-y-4'>
            <Card
              title='First Item'
              description='Quick overview of the first item in our collection. Perfect for grid layouts.'
              buttonText='View'
              variant='default'
              showMedia={false}
            />
            <Card
              title='Second Item'
              description='Another item showcasing how cards maintain consistency across different content.'
              buttonText='View'
              variant='default'
              showMedia={false}
            />
            <Card
              title='Third Item'
              description='Final item demonstrating the versatility of card components in various layouts.'
              buttonText='View'
              variant='default'
              showMedia={false}
            />
          </View>
        </View>

        {/* Interactive States */}
        <View>
          <Text className='text-lg font-bold mb-4'>Interactive Examples</Text>
          
          {/* Call to Action */}
          <View className='mb-6'>
            <Text className='text-sm text-muted-foreground mb-2'>Strong Call to Action</Text>
            <Card
              title='Limited Time Offer!'
              description="Don't miss out on this exclusive opportunity. Available for a limited time only. Act now to secure your spot."
              buttonText='Claim Offer'
              variant='default'
              showMedia={false}
            />
          </View>

          {/* Informational */}
          <View className='mb-6'>
            <Text className='text-sm text-muted-foreground mb-2'>Informational</Text>
            <Card
              title='Did You Know?'
              description='Cards are one of the most versatile UI components. They can contain various types of content and actions related to a single subject.'
              buttonText='Learn More'
              variant='inset'
              showMedia={true}
              mediaUrl='https://picsum.photos/329/162'
            />
          </View>
        </View>

      </View>
    </ScrollView>
  );
}