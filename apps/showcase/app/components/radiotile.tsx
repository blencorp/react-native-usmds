import { ScrollView, View } from 'react-native';
import { useState } from 'react';
import { RadioTileGroup, RadioTile } from '../../../storybook/components/RadioTile/RadioTile';
import { Text } from '../../../storybook/components/Text/Text';
import { Button } from '../../../storybook/components/Button/Button';

export default function RadioTileScreen() {
  // Basic radio tiles
  const [basicValue, setBasicValue] = useState('option2');
  
  // With descriptions
  const [descValue, setDescValue] = useState('plan-pro');
  
  // Settings examples
  const [privacy, setPrivacy] = useState('friends');
  const [backup, setBackup] = useState('cloud');
  const [security, setSecurity] = useState('standard');
  
  // Payment method example
  const [payment, setPayment] = useState('');
  
  // Shipping example
  const [shipping, setShipping] = useState('standard');

  const resetPayment = () => {
    setPayment('');
  };

  return (
    <ScrollView className='flex-1 bg-background'>
      <View className='p-4 space-y-8 w-full mx-auto'>
        
        {/* Basic Radio Tiles */}
        <View>
          <Text className='text-lg font-bold mb-4'>Basic Radio Tiles</Text>
          <View className='bg-card rounded-lg p-4 border border-border space-y-4'>
            <View>
              <Text className='text-sm font-medium mb-3'>Default State</Text>
              <RadioTileGroup value={basicValue} onValueChange={setBasicValue}>
                <RadioTile value='option1' label='Option 1' />
                <RadioTile value='option2' label='Option 2 (Selected)' />
                <RadioTile value='option3' label='Option 3' />
              </RadioTileGroup>
            </View>
          </View>
        </View>

        {/* Radio Tile States */}
        <View>
          <Text className='text-lg font-bold mb-4'>Radio Tile States</Text>
          <View className='bg-card rounded-lg p-4 border border-border space-y-6'>
            <View>
              <Text className='text-sm font-medium mb-3'>Basic States</Text>
              <RadioTileGroup value='selected' onValueChange={() => {}}>
                <RadioTile value='unselected' label='Unselected' />
                <RadioTile value='selected' label='Selected' />
                <RadioTile value='disabled-unchecked' label='Disabled' disabled />
              </RadioTileGroup>
            </View>
            
            <View>
              <Text className='text-sm font-medium mb-3'>With Descriptions</Text>
              <RadioTileGroup value='desc-selected' onValueChange={() => {}}>
                <RadioTile 
                  value='desc-unselected' 
                  label='Unselected with description' 
                  description='This option is currently not selected'
                />
                <RadioTile 
                  value='desc-selected' 
                  label='Selected with description' 
                  description='This option is currently selected and highlighted'
                />
                <RadioTile 
                  value='desc-disabled' 
                  label='Disabled with description' 
                  description='This option is disabled and cannot be selected'
                  disabled 
                />
              </RadioTileGroup>
            </View>
          </View>
        </View>

        {/* Pricing Plans */}
        <View>
          <Text className='text-lg font-bold mb-4'>Pricing Plans</Text>
          <View className='bg-card rounded-lg p-4 border border-border'>
            <Text className='text-sm font-medium mb-3'>Choose your plan</Text>
            <RadioTileGroup value={descValue} onValueChange={setDescValue}>
              <RadioTile 
                value='plan-free' 
                label='Free Plan' 
                description='Perfect for getting started. Includes basic features and 5GB storage.'
              />
              <RadioTile 
                value='plan-pro' 
                label='Pro Plan - $19/month' 
                description='Best for professionals. Unlimited storage, priority support, and advanced features.'
              />
              <RadioTile 
                value='plan-enterprise' 
                label='Enterprise Plan - Custom pricing' 
                description='For large organizations. Custom integrations, dedicated support, and SLA guarantees.'
              />
            </RadioTileGroup>
          </View>
        </View>

        {/* Settings Examples */}
        <View>
          <Text className='text-lg font-bold mb-4'>Settings Examples</Text>
          <View className='space-y-4'>
            <View className='bg-card rounded-lg p-4 border border-border'>
              <Text className='text-sm font-medium mb-3'>Privacy Settings</Text>
              <RadioTileGroup value={privacy} onValueChange={setPrivacy}>
                <RadioTile 
                  value='public' 
                  label='Public Profile' 
                  description='Your profile is visible to everyone on the platform'
                />
                <RadioTile 
                  value='friends' 
                  label='Friends Only' 
                  description='Only your friends can view your profile and activity'
                />
                <RadioTile 
                  value='private' 
                  label='Private Profile' 
                  description='Your profile is completely private and hidden from others'
                />
              </RadioTileGroup>
            </View>

            <View className='bg-card rounded-lg p-4 border border-border'>
              <Text className='text-sm font-medium mb-3'>Backup Options</Text>
              <RadioTileGroup value={backup} onValueChange={setBackup}>
                <RadioTile 
                  value='none' 
                  label='No Backup' 
                  description='Data is stored locally only. Not recommended for important files.'
                />
                <RadioTile 
                  value='cloud' 
                  label='Cloud Backup' 
                  description='Automatic backup to secure cloud storage with encryption'
                />
                <RadioTile 
                  value='local' 
                  label='Local Backup' 
                  description='Create backups on your local drive or external storage'
                />
              </RadioTileGroup>
            </View>

            <View className='bg-card rounded-lg p-4 border border-border'>
              <Text className='text-sm font-medium mb-3'>Security Level</Text>
              <RadioTileGroup value={security} onValueChange={setSecurity}>
                <RadioTile 
                  value='basic' 
                  label='Basic Security' 
                  description='Standard protection with password authentication'
                />
                <RadioTile 
                  value='standard' 
                  label='Standard Security' 
                  description='Enhanced security with two-factor authentication'
                />
                <RadioTile 
                  value='advanced' 
                  label='Advanced Security' 
                  description='Maximum protection with biometric and device verification'
                />
              </RadioTileGroup>
            </View>
          </View>
        </View>

        {/* Payment Method */}
        <View>
          <Text className='text-lg font-bold mb-4'>Payment Method</Text>
          <View className='bg-card rounded-lg p-4 border border-border'>
            <Text className='text-sm font-medium mb-3'>Select payment method</Text>
            <RadioTileGroup value={payment} onValueChange={setPayment}>
              <RadioTile 
                value='card' 
                label='Credit/Debit Card' 
                description='Pay securely with your credit or debit card. Visa, Mastercard accepted.'
              />
              <RadioTile 
                value='paypal' 
                label='PayPal' 
                description='Quick and secure payment through your PayPal account'
              />
              <RadioTile 
                value='bank' 
                label='Bank Transfer' 
                description='Direct bank transfer. May take 1-3 business days to process'
              />
              <RadioTile 
                value='crypto' 
                label='Cryptocurrency' 
                description='Pay with Bitcoin, Ethereum, or other supported cryptocurrencies'
              />
            </RadioTileGroup>
            
            <View className='flex-row gap-2 mt-4'>
              <Button variant='outline' onPress={resetPayment}>
                <Text>Reset</Text>
              </Button>
              <Button 
                onPress={() => {}}
                disabled={!payment}
              >
                <Text>Continue to Payment</Text>
              </Button>
            </View>
          </View>
        </View>

        {/* Shipping Options */}
        <View>
          <Text className='text-lg font-bold mb-4'>Shipping Options</Text>
          <View className='bg-card rounded-lg p-4 border border-border'>
            <Text className='text-sm font-medium mb-3'>Choose shipping method</Text>
            <RadioTileGroup value={shipping} onValueChange={setShipping}>
              <RadioTile 
                value='standard' 
                label='Standard Shipping - Free' 
                description='5-7 business days delivery. Free on orders over $50.'
              />
              <RadioTile 
                value='express' 
                label='Express Shipping - $9.99' 
                description='2-3 business days delivery. Trackable with email notifications.'
              />
              <RadioTile 
                value='overnight' 
                label='Overnight Delivery - $24.99' 
                description='Next business day delivery by 6 PM. Order before 2 PM cutoff.'
              />
              <RadioTile 
                value='pickup' 
                label='Store Pickup - Free' 
                description='Ready for pickup within 2 hours at our local store location'
                disabled
              />
            </RadioTileGroup>
            
            <View className='mt-4 p-3 bg-info-lighter rounded'>
              <Text className='text-xs text-info'>
                Estimated delivery: {
                  shipping === 'standard' ? 'February 1-3, 2024' :
                  shipping === 'express' ? 'January 29-30, 2024' :
                  shipping === 'overnight' ? 'January 26, 2024' :
                  'Store pickup not available'
                }
              </Text>
            </View>
          </View>
        </View>

        {/* Comparison Layout */}
        <View>
          <Text className='text-lg font-bold mb-4'>Feature Comparison</Text>
          <View className='bg-card rounded-lg p-4 border border-border'>
            <Text className='text-sm font-medium mb-3'>Choose your preferred option</Text>
            <RadioTileGroup value='' onValueChange={() => {}}>
              <RadioTile 
                value='basic' 
                label='Basic Package' 
                description='✓ Core features ✓ Email support ✓ 1 user ✗ Advanced analytics'
              />
              <RadioTile 
                value='premium' 
                label='Premium Package' 
                description='✓ All basic features ✓ Priority support ✓ 5 users ✓ Advanced analytics'
              />
              <RadioTile 
                value='ultimate' 
                label='Ultimate Package' 
                description='✓ All premium features ✓ 24/7 phone support ✓ Unlimited users ✓ Custom integrations'
              />
            </RadioTileGroup>
          </View>
        </View>

        {/* Usage Guidelines */}
        <View>
          <Text className='text-lg font-bold mb-4'>Usage Guidelines</Text>
          <View className='bg-info-lighter rounded-lg p-4'>
            <Text className='text-sm font-medium mb-3'>When to use Radio Tiles:</Text>
            <View className='space-y-2'>
              <Text className='text-xs'>• When options need more explanation than simple labels</Text>
              <Text className='text-xs'>• For selection between detailed alternatives</Text>
              <Text className='text-xs'>• When visual prominence helps decision making</Text>
              <Text className='text-xs'>• For complex forms like pricing plans or configurations</Text>
              <Text className='text-xs'>• When additional context improves user understanding</Text>
            </View>
            <Text className='text-sm font-medium mt-3 mb-2'>Best Practices:</Text>
            <View className='space-y-1'>
              <Text className='text-xs'>• Use descriptions to clarify option implications</Text>
              <Text className='text-xs'>• Keep descriptions concise but informative</Text>
              <Text className='text-xs'>• Maintain consistent tile sizes for visual balance</Text>
              <Text className='text-xs'>• Consider the cognitive load of multiple detailed options</Text>
              <Text className='text-xs'>• Use for 2-5 options (more may overwhelm users)</Text>
            </View>
          </View>
        </View>

      </View>
    </ScrollView>
  );
}