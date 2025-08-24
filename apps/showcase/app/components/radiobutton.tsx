import { ScrollView, View } from 'react-native';
import { useState } from 'react';
import { RadioGroup, RadioButton } from '../../../storybook/components/RadioButton/RadioButton';
import { Text } from '../../../storybook/components/Text/Text';
import { Button } from '../../../storybook/components/Button/Button';

export default function RadioButtonScreen() {
  // Basic radio group
  const [basicValue, setBasicValue] = useState('option2');
  
  // Form examples
  const [preference, setPreference] = useState('email');
  const [frequency, setFrequency] = useState('weekly');
  const [priority, setPriority] = useState('medium');
  
  // Survey example
  const [satisfaction, setSatisfaction] = useState('');
  const [recommendation, setRecommendation] = useState('');
  
  // Settings example
  const [theme, setTheme] = useState('light');
  const [notifications, setNotifications] = useState('all');

  const resetForm = () => {
    setSatisfaction('');
    setRecommendation('');
  };

  return (
    <ScrollView className='flex-1 bg-background'>
      <View className='p-4 space-y-8 w-full mx-auto'>
        
        {/* Basic Radio Buttons */}
        <View>
          <Text className='text-lg font-bold mb-4'>Basic Radio Buttons</Text>
          <View className='bg-card rounded-lg p-4 border border-border space-y-4'>
            <View>
              <Text className='text-sm font-medium mb-3'>Default State</Text>
              <RadioGroup value={basicValue} onValueChange={setBasicValue}>
                <RadioButton value='option1' label='Option 1' />
                <RadioButton value='option2' label='Option 2 (Selected)' />
                <RadioButton value='option3' label='Option 3' />
              </RadioGroup>
            </View>
          </View>
        </View>

        {/* Radio Button States */}
        <View>
          <Text className='text-lg font-bold mb-4'>Radio Button States</Text>
          <View className='bg-card rounded-lg p-4 border border-border space-y-6'>
            <View>
              <Text className='text-sm font-medium mb-3'>Enabled States</Text>
              <RadioGroup value='selected' onValueChange={() => {}}>
                <RadioButton value='unselected' label='Unselected' />
                <RadioButton value='selected' label='Selected' />
              </RadioGroup>
            </View>
            <View>
              <Text className='text-sm font-medium mb-3'>Disabled States</Text>
              <RadioGroup value='disabled-selected' onValueChange={() => {}}>
                <RadioButton value='disabled-unselected' label='Disabled unselected' disabled />
                <RadioButton value='disabled-selected' label='Disabled selected' disabled />
              </RadioGroup>
            </View>
          </View>
        </View>

        {/* Form Examples */}
        <View>
          <Text className='text-lg font-bold mb-4'>Form Examples</Text>
          <View className='space-y-4'>
            <View className='bg-card rounded-lg p-4 border border-border'>
              <Text className='text-sm font-medium mb-3'>Contact Preference</Text>
              <RadioGroup value={preference} onValueChange={setPreference}>
                <RadioButton value='email' label='Email notifications' />
                <RadioButton value='sms' label='SMS notifications' />
                <RadioButton value='phone' label='Phone calls' />
                <RadioButton value='none' label='No contact' />
              </RadioGroup>
            </View>

            <View className='bg-card rounded-lg p-4 border border-border'>
              <Text className='text-sm font-medium mb-3'>Update Frequency</Text>
              <RadioGroup value={frequency} onValueChange={setFrequency}>
                <RadioButton value='daily' label='Daily updates' />
                <RadioButton value='weekly' label='Weekly digest' />
                <RadioButton value='monthly' label='Monthly summary' />
                <RadioButton value='never' label='Never' />
              </RadioGroup>
            </View>

            <View className='bg-card rounded-lg p-4 border border-border'>
              <Text className='text-sm font-medium mb-3'>Priority Level</Text>
              <RadioGroup value={priority} onValueChange={setPriority}>
                <RadioButton value='low' label='Low priority' />
                <RadioButton value='medium' label='Medium priority' />
                <RadioButton value='high' label='High priority' />
                <RadioButton value='urgent' label='Urgent' />
              </RadioGroup>
            </View>
          </View>
        </View>

        {/* Survey Example */}
        <View>
          <Text className='text-lg font-bold mb-4'>Survey Example</Text>
          <View className='bg-card rounded-lg p-4 border border-border space-y-6'>
            <View>
              <Text className='text-sm font-medium mb-2'>How satisfied are you with our service?</Text>
              <RadioGroup value={satisfaction} onValueChange={setSatisfaction}>
                <RadioButton value='very-satisfied' label='Very satisfied' />
                <RadioButton value='satisfied' label='Satisfied' />
                <RadioButton value='neutral' label='Neutral' />
                <RadioButton value='dissatisfied' label='Dissatisfied' />
                <RadioButton value='very-dissatisfied' label='Very dissatisfied' />
              </RadioGroup>
            </View>

            <View>
              <Text className='text-sm font-medium mb-2'>Would you recommend us to others?</Text>
              <RadioGroup value={recommendation} onValueChange={setRecommendation}>
                <RadioButton value='definitely' label='Definitely' />
                <RadioButton value='probably' label='Probably' />
                <RadioButton value='maybe' label='Maybe' />
                <RadioButton value='probably-not' label='Probably not' />
                <RadioButton value='definitely-not' label='Definitely not' />
              </RadioGroup>
            </View>

            <View className='flex-row gap-2 mt-4'>
              <Button variant='outline' onPress={resetForm}>
                <Text>Reset</Text>
              </Button>
              <Button 
                onPress={() => {}}
                disabled={!satisfaction || !recommendation}
              >
                <Text>Submit Survey</Text>
              </Button>
            </View>
          </View>
        </View>

        {/* Settings Example */}
        <View>
          <Text className='text-lg font-bold mb-4'>Settings Example</Text>
          <View className='space-y-4'>
            <View className='bg-card rounded-lg p-4 border border-border'>
              <Text className='text-sm font-medium mb-3'>Theme Preference</Text>
              <RadioGroup value={theme} onValueChange={setTheme}>
                <RadioButton value='light' label='Light theme' />
                <RadioButton value='dark' label='Dark theme' />
                <RadioButton value='system' label='Use system setting' />
              </RadioGroup>
            </View>

            <View className='bg-card rounded-lg p-4 border border-border'>
              <Text className='text-sm font-medium mb-3'>Notification Settings</Text>
              <RadioGroup value={notifications} onValueChange={setNotifications}>
                <RadioButton value='all' label='All notifications' />
                <RadioButton value='important' label='Important only' />
                <RadioButton value='mentions' label='Mentions and replies' />
                <RadioButton value='none' label='No notifications' />
              </RadioGroup>
            </View>
          </View>
        </View>

        {/* Long Labels */}
        <View>
          <Text className='text-lg font-bold mb-4'>Long Labels</Text>
          <View className='bg-card rounded-lg p-4 border border-border'>
            <RadioGroup value='' onValueChange={() => {}}>
              <RadioButton 
                value='short' 
                label='Short option' 
              />
              <RadioButton 
                value='medium' 
                label='This is a medium length option that spans multiple words' 
              />
              <RadioButton 
                value='long' 
                label='This is a very long option that demonstrates how the radio button component handles text that wraps to multiple lines and maintains proper alignment' 
              />
            </RadioGroup>
          </View>
        </View>

        {/* Interactive Example */}
        <View>
          <Text className='text-lg font-bold mb-4'>Interactive Example</Text>
          <View className='bg-card rounded-lg p-4 border border-border'>
            <Text className='text-sm font-medium mb-3'>Choose your plan:</Text>
            <RadioGroup value='' onValueChange={() => {}}>
              <RadioButton value='basic' label='Basic - Free forever' />
              <RadioButton value='pro' label='Pro - $9/month' />
              <RadioButton value='enterprise' label='Enterprise - Contact sales' />
            </RadioGroup>
            
            <View className='mt-4 p-3 bg-info-lighter rounded'>
              <Text className='text-xs text-info'>
                Selected plan details will appear here when you make a selection.
              </Text>
            </View>
          </View>
        </View>

        {/* Usage Guidelines */}
        <View>
          <Text className='text-lg font-bold mb-4'>Usage Guidelines</Text>
          <View className='bg-info-lighter rounded-lg p-4'>
            <Text className='text-sm font-medium mb-3'>When to use Radio Buttons:</Text>
            <View className='space-y-2'>
              <Text className='text-xs'>• When users must select exactly one option from a list</Text>
              <Text className='text-xs'>• For mutually exclusive choices (either/or scenarios)</Text>
              <Text className='text-xs'>• When all options should be visible at once</Text>
              <Text className='text-xs'>• For 2-7 options (use dropdown for more)</Text>
              <Text className='text-xs'>• When the default selection is recommended</Text>
            </View>
            <Text className='text-sm font-medium mt-3 mb-2'>Best Practices:</Text>
            <View className='space-y-1'>
              <Text className='text-xs'>• Always group related radio buttons</Text>
              <Text className='text-xs'>• Provide clear, descriptive labels</Text>
              <Text className='text-xs'>• Set a logical default selection when appropriate</Text>
              <Text className='text-xs'>• Use vertical layout for better readability</Text>
              <Text className='text-xs'>• Consider the order of options (most common first)</Text>
            </View>
          </View>
        </View>

      </View>
    </ScrollView>
  );
}