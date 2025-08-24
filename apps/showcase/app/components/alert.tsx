import { ScrollView, View } from 'react-native';
import { Alert } from '../../../storybook/components/Alert/Alert';
import { Text } from '../../../storybook/components/Text/Text';

export default function AlertScreen() {
  return (
    <ScrollView className='flex-1 bg-background'>
      <View className='p-4 space-y-8 w-full max-w-[393px] mx-auto'>
        
        {/* Variant Examples */}
        <View>
          <Text className='text-lg font-bold mb-4'>Variants</Text>
          <View className='space-y-4'>
            {/* Info Alert */}
            <View>
              <Text className='text-sm text-muted-foreground mb-2'>Info</Text>
              <Alert
                variant='info'
                title='Informational'
                description={{
                  body: 'This is an informational alert message to provide context or helpful information.'
                }}
              />
            </View>

            {/* Error Alert */}
            <View>
              <Text className='text-sm text-muted-foreground mb-2'>Error</Text>
              <Alert
                variant='error'
                title='Error'
                description={{
                  body: 'This is an error alert message indicating something went wrong.'
                }}
              />
            </View>

            {/* Warning Alert */}
            <View>
              <Text className='text-sm text-muted-foreground mb-2'>Warning</Text>
              <Alert
                variant='warning'
                title='Warning'
                description={{
                  body: 'This is a warning alert message to caution users about potential issues.'
                }}
              />
            </View>

            {/* Success Alert */}
            <View>
              <Text className='text-sm text-muted-foreground mb-2'>Success</Text>
              <Alert
                variant='success'
                title='Success'
                description={{
                  body: 'This is a success alert message confirming a successful action.'
                }}
              />
            </View>

            {/* Emergency Alert */}
            <View>
              <Text className='text-sm text-muted-foreground mb-2'>Emergency</Text>
              <Alert
                variant='emergency'
                title='Emergency'
                description={{
                  body: 'This is an emergency alert requiring immediate attention.'
                }}
              />
            </View>
          </View>
        </View>

        {/* Alert Styles */}
        <View>
          <Text className='text-lg font-bold mb-4'>Styles</Text>
          <View className='space-y-4'>
            {/* Default Style */}
            <View>
              <Text className='text-sm text-muted-foreground mb-2'>Default</Text>
              <Alert
                variant='info'
                alertStyle='default'
                title='Default Alert'
                description={{
                  body: 'This is the default alert style with an icon and header.'
                }}
              />
            </View>

            {/* No Header Style */}
            <View>
              <Text className='text-sm text-muted-foreground mb-2'>No Header</Text>
              <Alert
                variant='info'
                alertStyle='no-header'
                description={{
                  body: 'This alert has no header, just the body content with an icon.'
                }}
              />
            </View>

            {/* List Style */}
            <View>
              <Text className='text-sm text-muted-foreground mb-2'>List</Text>
              <Alert
                variant='info'
                alertStyle='list'
                title='List Alert'
                description={{
                  messages: [
                    { text: 'First item in the list' },
                    { text: 'Second item with a ', link: 'link', suffix: ' included' },
                    { text: 'Third item in the list' }
                  ]
                }}
              />
            </View>

            {/* Slim Style */}
            <View>
              <Text className='text-sm text-muted-foreground mb-2'>Slim</Text>
              <Alert
                variant='info'
                alertStyle='slim'
                title='Slim Alert'
                description={{
                  body: 'This is a slim alert with reduced padding and smaller icon.'
                }}
              />
            </View>

            {/* No Icon Style */}
            <View>
              <Text className='text-sm text-muted-foreground mb-2'>No Icon</Text>
              <Alert
                variant='info'
                alertStyle='no-icon'
                title='No Icon Alert'
                description={{
                  body: 'This alert has no icon, just the text content.'
                }}
              />
            </View>
          </View>
        </View>

        {/* Complex Examples */}
        <View>
          <Text className='text-lg font-bold mb-4'>Complex Examples</Text>
          <View className='space-y-4'>
            {/* With Title and Link */}
            <View>
              <Text className='text-sm text-muted-foreground mb-2'>With Title and Link</Text>
              <Alert
                variant='warning'
                title='Action Required'
                description={{
                  title: 'Important: ',
                  body: 'Your session will expire in 5 minutes. Please ',
                  link: 'save your work'
                }}
              />
            </View>

            {/* Emergency with List */}
            <View>
              <Text className='text-sm text-muted-foreground mb-2'>Emergency List</Text>
              <Alert
                variant='emergency'
                alertStyle='list'
                title='System Alert'
                description={{
                  messages: [
                    { text: 'All services are currently unavailable' },
                    { text: 'Please check ', link: 'status page', suffix: ' for updates' },
                    { text: 'Contact support if issues persist' }
                  ]
                }}
              />
            </View>

            {/* Success without Icon */}
            <View>
              <Text className='text-sm text-muted-foreground mb-2'>Success without Icon</Text>
              <Alert
                variant='success'
                alertStyle='no-icon'
                title='Payment Successful'
                description={{
                  body: 'Your payment has been processed successfully. Transaction ID: #12345'
                }}
              />
            </View>
          </View>
        </View>

      </View>
    </ScrollView>
  );
}