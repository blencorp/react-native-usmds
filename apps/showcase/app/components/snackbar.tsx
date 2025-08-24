import { ScrollView, View } from 'react-native';
import { useState, useEffect } from 'react';
import { Snackbar } from '../../../storybook/components/Snackbar/Snackbar';
import { Text } from '../../../storybook/components/Text/Text';
import { Button } from '../../../storybook/components/Button/Button';

export default function SnackbarScreen() {
  // Snackbar visibility states
  const [successOneLine, setSuccessOneLine] = useState(false);
  const [errorOneLine, setErrorOneLine] = useState(false);
  const [successTwoLines, setSuccessTwoLines] = useState(false);
  const [errorTwoLines, setErrorTwoLines] = useState(false);
  
  // Auto-dismiss functionality
  const [autoSnackbar, setAutoSnackbar] = useState(false);
  const [actionSnackbar, setActionSnackbar] = useState(false);
  
  // Form submission example
  const [formMessage, setFormMessage] = useState('');
  const [formSnackbar, setFormSnackbar] = useState(false);
  
  // Queue system example
  const [queuedSnackbars, setQueuedSnackbars] = useState<Array<{id: number, message: string, variant: 'success' | 'error'}>>([]);
  const [currentSnackbar, setCurrentSnackbar] = useState<{id: number, message: string, variant: 'success' | 'error'} | null>(null);

  // Auto-dismiss after 3 seconds
  useEffect(() => {
    if (autoSnackbar) {
      const timer = setTimeout(() => {
        setAutoSnackbar(false);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [autoSnackbar]);

  // Queue system logic
  useEffect(() => {
    if (!currentSnackbar && queuedSnackbars.length > 0) {
      const next = queuedSnackbars[0];
      setCurrentSnackbar(next);
      setQueuedSnackbars(prev => prev.slice(1));
      
      // Auto-dismiss after 4 seconds
      const timer = setTimeout(() => {
        setCurrentSnackbar(null);
      }, 4000);
      return () => clearTimeout(timer);
    }
  }, [currentSnackbar, queuedSnackbars]);

  const showSnackbar = (type: 'success' | 'error', message: string) => {
    const id = Date.now();
    setQueuedSnackbars(prev => [...prev, { id, message, variant: type }]);
  };

  const handleFormSubmit = () => {
    if (formMessage.trim()) {
      setFormSnackbar(true);
      setFormMessage('');
      setTimeout(() => setFormSnackbar(false), 3000);
    }
  };

  const handleUndo = () => {
    setActionSnackbar(false);
    // Undo logic would go here
  };

  return (
    <View className='flex-1'>
      <ScrollView className='flex-1 bg-background'>
        <View className='p-4 space-y-8 w-full mx-auto'>
        
        {/* Basic Snackbars */}
        <View>
          <Text className='text-lg font-bold mb-4'>Basic Snackbars</Text>
          <View className='bg-card rounded-lg p-4 border border-border space-y-4'>
            <View>
              <Text className='text-sm font-medium mb-3'>One Line Variants</Text>
              <View className='space-y-3'>
                <Button onPress={() => setSuccessOneLine(true)}>
                  <Text>Show Success Snackbar</Text>
                </Button>
                <Button 
                  variant='destructive' 
                  onPress={() => setErrorOneLine(true)}
                >
                  <Text>Show Error Snackbar</Text>
                </Button>
              </View>
            </View>
            
            <View>
              <Text className='text-sm font-medium mb-3'>Two Line Variants</Text>
              <View className='space-y-3'>
                <Button 
                  variant='outline'
                  onPress={() => setSuccessTwoLines(true)}
                >
                  <Text>Show Long Success Message</Text>
                </Button>
                <Button 
                  variant='outline'
                  onPress={() => setErrorTwoLines(true)}
                >
                  <Text>Show Long Error Message</Text>
                </Button>
              </View>
            </View>
          </View>
        </View>

        {/* Auto-dismiss Example */}
        <View>
          <Text className='text-lg font-bold mb-4'>Auto-dismiss Example</Text>
          <View className='bg-card rounded-lg p-4 border border-border'>
            <Text className='text-sm font-medium mb-3'>Automatically disappears after 3 seconds</Text>
            <Button onPress={() => setAutoSnackbar(true)}>
              <Text>Show Auto-dismiss Snackbar</Text>
            </Button>
          </View>
        </View>

        {/* Action Snackbar */}
        <View>
          <Text className='text-lg font-bold mb-4'>Action Snackbar</Text>
          <View className='bg-card rounded-lg p-4 border border-border'>
            <Text className='text-sm font-medium mb-3'>Snackbar with action button</Text>
            <Button onPress={() => setActionSnackbar(true)}>
              <Text>Delete Item (with Undo)</Text>
            </Button>
          </View>
        </View>

        {/* Form Example */}
        <View>
          <Text className='text-lg font-bold mb-4'>Form Feedback Example</Text>
          <View className='bg-card rounded-lg p-4 border border-border space-y-4'>
            <View>
              <Text className='text-sm font-medium mb-2'>Enter a message</Text>
              <View className='border border-border rounded p-2'>
                <Text className='text-sm text-muted-foreground'>
                  {formMessage || 'Type your message here...'}
                </Text>
              </View>
            </View>
            <View className='flex-row gap-2'>
              <Button 
                variant='outline'
                onPress={() => setFormMessage('Hello world!')}
              >
                <Text>Fill Example</Text>
              </Button>
              <Button 
                onPress={handleFormSubmit}
                disabled={!formMessage.trim()}
              >
                <Text>Submit</Text>
              </Button>
            </View>
          </View>
        </View>

        {/* Queue System */}
        <View>
          <Text className='text-lg font-bold mb-4'>Queue System Example</Text>
          <View className='bg-card rounded-lg p-4 border border-border space-y-4'>
            <Text className='text-sm text-muted-foreground mb-3'>
              Multiple snackbars will queue and show one at a time
            </Text>
            <View className='flex-row flex-wrap gap-2'>
              <Button 
                size='sm'
                onPress={() => showSnackbar('success', 'File saved successfully')}
              >
                <Text>Save File</Text>
              </Button>
              <Button 
                size='sm'
                onPress={() => showSnackbar('success', 'Message sent')}
              >
                <Text>Send Message</Text>
              </Button>
              <Button 
                size='sm'
                variant='destructive'
                onPress={() => showSnackbar('error', 'Connection failed')}
              >
                <Text>Fail Connection</Text>
              </Button>
              <Button 
                size='sm'
                onPress={() => showSnackbar('success', 'Data synced')}
              >
                <Text>Sync Data</Text>
              </Button>
            </View>
            
            <View className='p-3 bg-muted rounded'>
              <Text className='text-xs text-muted-foreground'>
                Queue: {queuedSnackbars.length} pending
                {currentSnackbar && ` | Current: ${currentSnackbar.message}`}
              </Text>
            </View>
          </View>
        </View>

        {/* Real-world Examples */}
        <View>
          <Text className='text-lg font-bold mb-4'>Real-world Examples</Text>
          <View className='space-y-4'>
            <View className='bg-card rounded-lg p-4 border border-border'>
              <Text className='text-sm font-medium mb-3'>File Operations</Text>
              <View className='flex-row flex-wrap gap-2'>
                <Button 
                  size='sm'
                  onPress={() => showSnackbar('success', 'Document.pdf uploaded successfully')}
                >
                  <Text>Upload File</Text>
                </Button>
                <Button 
                  size='sm'
                  variant='destructive'
                  onPress={() => showSnackbar('error', 'Failed to delete file. Please try again.')}
                >
                  <Text>Delete File</Text>
                </Button>
              </View>
            </View>

            <View className='bg-card rounded-lg p-4 border border-border'>
              <Text className='text-sm font-medium mb-3'>Network Operations</Text>
              <View className='flex-row flex-wrap gap-2'>
                <Button 
                  size='sm'
                  onPress={() => showSnackbar('success', 'Settings saved')}
                >
                  <Text>Save Settings</Text>
                </Button>
                <Button 
                  size='sm'
                  variant='destructive'
                  onPress={() => showSnackbar('error', 'Network error. Check your connection and try again.')}
                >
                  <Text>Network Error</Text>
                </Button>
              </View>
            </View>

            <View className='bg-card rounded-lg p-4 border border-border'>
              <Text className='text-sm font-medium mb-3'>User Actions</Text>
              <View className='flex-row flex-wrap gap-2'>
                <Button 
                  size='sm'
                  onPress={() => showSnackbar('success', 'Profile updated successfully')}
                >
                  <Text>Update Profile</Text>
                </Button>
                <Button 
                  size='sm'
                  onPress={() => showSnackbar('success', 'Password changed')}
                >
                  <Text>Change Password</Text>
                </Button>
              </View>
            </View>
          </View>
        </View>

        {/* Different Message Types */}
        <View>
          <Text className='text-lg font-bold mb-4'>Message Types</Text>
          <View className='bg-card rounded-lg p-4 border border-border space-y-3'>
            <Text className='text-sm font-medium mb-3'>Common Use Cases</Text>
            <View className='grid grid-cols-1 gap-2'>
              <Button 
                size='sm'
                onPress={() => showSnackbar('success', 'Item added to cart')}
              >
                <Text>Add to Cart</Text>
              </Button>
              <Button 
                size='sm'
                onPress={() => showSnackbar('success', 'Bookmark saved')}
              >
                <Text>Save Bookmark</Text>
              </Button>
              <Button 
                size='sm'
                variant='destructive'
                onPress={() => showSnackbar('error', 'Payment failed. Please check your card details.')}
              >
                <Text>Payment Error</Text>
              </Button>
              <Button 
                size='sm'
                variant='destructive'
                onPress={() => showSnackbar('error', 'Session expired. Please log in again.')}
              >
                <Text>Session Error</Text>
              </Button>
            </View>
          </View>
        </View>

        {/* Usage Guidelines */}
        <View>
          <Text className='text-lg font-bold mb-4'>Usage Guidelines</Text>
          <View className='bg-info-lighter rounded-lg p-4'>
            <Text className='text-sm font-medium mb-3'>When to use Snackbars:</Text>
            <View className='space-y-2'>
              <Text className='text-xs'>• Provide brief feedback about an operation</Text>
              <Text className='text-xs'>• Show non-critical information that doesn't interrupt workflow</Text>
              <Text className='text-xs'>• Confirm user actions (saves, deletions, updates)</Text>
              <Text className='text-xs'>• Display temporary status messages</Text>
              <Text className='text-xs'>• Offer simple actions like "Undo"</Text>
            </View>
            <Text className='text-sm font-medium mt-3 mb-2'>Best Practices:</Text>
            <View className='space-y-1'>
              <Text className='text-xs'>• Keep messages concise and actionable</Text>
              <Text className='text-xs'>• Auto-dismiss after 4-6 seconds</Text>
              <Text className='text-xs'>• Use action buttons sparingly (one per snackbar)</Text>
              <Text className='text-xs'>• Queue multiple snackbars instead of stacking</Text>
              <Text className='text-xs'>• Use appropriate variants (success/error)</Text>
              <Text className='text-xs'>• Position at bottom of screen for mobile</Text>
            </View>
          </View>
        </View>

        </View>
      </ScrollView>

      {/* Fixed Snackbars - Outside ScrollView */}
      <View className='absolute bottom-4 left-4 right-4 items-center'>
        <Snackbar
          isVisible={successOneLine}
          layout='one-line'
          variant='success'
          message='Operation successful'
          onDismiss={() => setSuccessOneLine(false)}
        />
        
        <Snackbar
          isVisible={errorOneLine}
          layout='one-line'
          variant='error'
          message='Operation failed'
          onDismiss={() => setErrorOneLine(false)}
        />
        
        <Snackbar
          isVisible={successTwoLines}
          layout='two-lines'
          variant='success'
          message='Your changes have been saved successfully and will be synced across all your devices'
          onDismiss={() => setSuccessTwoLines(false)}
        />
        
        <Snackbar
          isVisible={errorTwoLines}
          layout='two-lines'
          variant='error'
          message='Failed to save changes due to network connectivity issues. Please check your connection and try again'
          onDismiss={() => setErrorTwoLines(false)}
        />
        
        <Snackbar
          isVisible={autoSnackbar}
          layout='one-line'
          variant='success'
          message='Auto-dismiss in 3 seconds'
        />
        
        <Snackbar
          isVisible={actionSnackbar}
          layout='one-line'
          variant='success'
          message='Item deleted'
          actionLabel='Undo'
          onAction={handleUndo}
          onDismiss={() => setActionSnackbar(false)}
        />
        
        <Snackbar
          isVisible={formSnackbar}
          layout='one-line'
          variant='success'
          message='Message submitted successfully'
          onDismiss={() => setFormSnackbar(false)}
        />
        
        {currentSnackbar && (
          <Snackbar
            isVisible={true}
            layout='one-line'
            variant={currentSnackbar.variant}
            message={currentSnackbar.message}
            onDismiss={() => setCurrentSnackbar(null)}
          />
        )}
      </View>
    </View>
  );
}