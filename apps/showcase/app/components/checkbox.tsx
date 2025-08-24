import { ScrollView, View } from 'react-native';
import { useState } from 'react';
import { Checkbox } from '../../../storybook/components/Checkbox/Checkbox';
import { Text } from '../../../storybook/components/Text/Text';

export default function CheckboxScreen() {
  // Individual checkbox states
  const [basicChecked, setBasicChecked] = useState(false);
  const [checkedExample, setCheckedExample] = useState(true);
  
  // Multiple checkbox states for lists
  const [terms, setTerms] = useState(false);
  const [newsletter, setNewsletter] = useState(false);
  const [updates, setUpdates] = useState(true);
  
  // Form example states
  const [option1, setOption1] = useState(false);
  const [option2, setOption2] = useState(true);
  const [option3, setOption3] = useState(false);
  const [option4, setOption4] = useState(false);
  
  // Settings states
  const [notifications, setNotifications] = useState(true);
  const [emailAlerts, setEmailAlerts] = useState(true);
  const [pushAlerts, setPushAlerts] = useState(false);
  const [smsAlerts, setSmsAlerts] = useState(false);
  
  // Todo list states
  const [todo1, setTodo1] = useState(true);
  const [todo2, setTodo2] = useState(true);
  const [todo3, setTodo3] = useState(false);
  const [todo4, setTodo4] = useState(false);
  const [todo5, setTodo5] = useState(false);
  
  // Long label states
  const [longLabel1, setLongLabel1] = useState(false);
  const [longLabel2, setLongLabel2] = useState(false);
  
  // Grouped selection states - Technology
  const [mobileDev, setMobileDev] = useState(false);
  const [webDev, setWebDev] = useState(true);
  const [machineLearning, setMachineLearning] = useState(false);
  
  // Grouped selection states - Design
  const [uiDesign, setUiDesign] = useState(true);
  const [uxResearch, setUxResearch] = useState(false);
  const [graphicDesign, setGraphicDesign] = useState(false);

  return (
    <ScrollView className='flex-1 bg-background'>
      <View className='p-4 space-y-8 w-full mx-auto'>
        
        {/* Basic States */}
        <View>
          <Text className='text-lg font-bold mb-4'>Checkbox States</Text>
          <View className='space-y-3'>
            <View className='items-center'>
              <Checkbox 
                label='Unchecked checkbox' 
                checked={basicChecked} 
                onCheckedChange={setBasicChecked} 
              />
            </View>
            <View className='items-center'>
              <Checkbox 
                label='Checked checkbox' 
                checked={checkedExample} 
                onCheckedChange={setCheckedExample} 
              />
            </View>
            <View className='items-center'>
              <Checkbox 
                label='Disabled unchecked' 
                checked={false} 
                disabled 
                onCheckedChange={() => {}} 
              />
            </View>
            <View className='items-center'>
              <Checkbox 
                label='Disabled checked' 
                checked={true} 
                disabled 
                onCheckedChange={() => {}} 
              />
            </View>
          </View>
        </View>

        {/* Interactive Example */}
        <View>
          <Text className='text-lg font-bold mb-4'>Interactive Example</Text>
          <View className='bg-card rounded-lg p-4'>
            <Text className='text-sm text-muted-foreground mb-4'>
              Click the checkboxes to toggle their state
            </Text>
            <View className='space-y-3'>
              <View className='items-center'>
                <Checkbox 
                  label='I agree to the terms and conditions' 
                  checked={terms} 
                  onCheckedChange={setTerms} 
                />
              </View>
              <View className='items-center'>
                <Checkbox 
                  label='Subscribe to newsletter' 
                  checked={newsletter} 
                  onCheckedChange={setNewsletter} 
                />
              </View>
              <View className='items-center'>
                <Checkbox 
                  label='Receive product updates' 
                  checked={updates} 
                  onCheckedChange={setUpdates} 
                />
              </View>
            </View>
            <View className='mt-4 p-3 bg-muted/20 rounded'>
              <Text className='text-sm font-medium mb-1'>Current Selection:</Text>
              <Text className='text-xs text-muted-foreground'>
                Terms: {terms ? 'Accepted ✓' : 'Not accepted ✗'}
              </Text>
              <Text className='text-xs text-muted-foreground'>
                Newsletter: {newsletter ? 'Subscribed ✓' : 'Not subscribed ✗'}
              </Text>
              <Text className='text-xs text-muted-foreground'>
                Updates: {updates ? 'Enabled ✓' : 'Disabled ✗'}
              </Text>
            </View>
          </View>
        </View>

        {/* Form Example */}
        <View>
          <Text className='text-lg font-bold mb-4'>Form Selection</Text>
          <View className='bg-card rounded-lg p-4'>
            <Text className='text-base font-medium mb-3'>Select your preferences:</Text>
            <View className='space-y-3'>
              <View className='items-center'>
                <Checkbox 
                  label='Option 1 - Basic plan' 
                  checked={option1} 
                  onCheckedChange={setOption1} 
                />
              </View>
              <View className='items-center'>
                <Checkbox 
                  label='Option 2 - Premium features' 
                  checked={option2} 
                  onCheckedChange={setOption2} 
                />
              </View>
              <View className='items-center'>
                <Checkbox 
                  label='Option 3 - Extended support' 
                  checked={option3} 
                  onCheckedChange={setOption3} 
                />
              </View>
              <View className='items-center'>
                <Checkbox 
                  label='Option 4 - Priority access' 
                  checked={option4} 
                  onCheckedChange={setOption4} 
                />
              </View>
            </View>
          </View>
        </View>

        {/* Settings Example */}
        <View>
          <Text className='text-lg font-bold mb-4'>Settings</Text>
          <View className='bg-card rounded-lg p-4'>
            <Text className='text-base font-medium mb-3'>Notification Preferences</Text>
            <View className='space-y-3'>
              <View className='items-center'>
                <Checkbox 
                  label='Enable all notifications' 
                  checked={notifications} 
                  onCheckedChange={setNotifications} 
                />
              </View>
              <View className='pl-6 space-y-3'>
                <View className='items-center'>
                  <Checkbox 
                    label='Email alerts' 
                    checked={emailAlerts} 
                    onCheckedChange={setEmailAlerts}
                    disabled={!notifications}
                  />
                </View>
                <View className='items-center'>
                  <Checkbox 
                    label='Push notifications' 
                    checked={pushAlerts} 
                    onCheckedChange={setPushAlerts}
                    disabled={!notifications}
                  />
                </View>
                <View className='items-center'>
                  <Checkbox 
                    label='SMS alerts' 
                    checked={smsAlerts} 
                    onCheckedChange={setSmsAlerts}
                    disabled={!notifications}
                  />
                </View>
              </View>
            </View>
          </View>
        </View>

        {/* Todo List Example */}
        <View>
          <Text className='text-lg font-bold mb-4'>Task List</Text>
          <View className='bg-card rounded-lg p-4'>
            <Text className='text-base font-medium mb-3'>Today's Tasks</Text>
            <View className='space-y-3'>
              <View className='items-center'>
                <Checkbox 
                  label='Complete project documentation' 
                  checked={todo1} 
                  onCheckedChange={setTodo1} 
                />
              </View>
              <View className='items-center'>
                <Checkbox 
                  label='Review pull requests' 
                  checked={todo2} 
                  onCheckedChange={setTodo2} 
                />
              </View>
              <View className='items-center'>
                <Checkbox 
                  label='Update team on progress' 
                  checked={todo3} 
                  onCheckedChange={setTodo3} 
                />
              </View>
              <View className='items-center'>
                <Checkbox 
                  label="Prepare for tomorrow's meeting" 
                  checked={todo4} 
                  onCheckedChange={setTodo4} 
                />
              </View>
              <View className='items-center'>
                <Checkbox 
                  label='Test new features' 
                  checked={todo5} 
                  onCheckedChange={setTodo5} 
                />
              </View>
            </View>
            <View className='mt-4 p-2 bg-muted/20 rounded'>
              <Text className='text-sm'>
                {[todo1, todo2, todo3, todo4, todo5].filter(Boolean).length} of 5 tasks completed
              </Text>
            </View>
          </View>
        </View>

        {/* Long Labels */}
        <View>
          <Text className='text-lg font-bold mb-4'>Long Label Examples</Text>
          <View className='space-y-6'>
            <View className='items-center mb-4'>
              <Checkbox 
                label='This is a checkbox with a very long label that demonstrates how the text wraps when it exceeds the available width' 
                checked={longLabel1} 
                onCheckedChange={setLongLabel1} 
              />
            </View>
            <View className='items-center'>
              <Checkbox 
                label='By checking this box, I acknowledge that I have read, understood, and agree to be bound by all terms and conditions' 
                checked={longLabel2} 
                onCheckedChange={setLongLabel2} 
              />
            </View>
          </View>
        </View>

        {/* Grouped Checkboxes */}
        <View>
          <Text className='text-lg font-bold mb-4'>Grouped Selection</Text>
          <View className='bg-card rounded-lg p-4'>
            <Text className='text-base font-medium mb-3'>Select Categories</Text>
            <View className='space-y-4'>
              <View>
                <Text className='text-sm text-muted-foreground mb-2'>Technology</Text>
                <View className='space-y-2'>
                  <View className='items-center'>
                    <Checkbox label='Mobile Development' checked={mobileDev} onCheckedChange={setMobileDev} />
                  </View>
                  <View className='items-center'>
                    <Checkbox label='Web Development' checked={webDev} onCheckedChange={setWebDev} />
                  </View>
                  <View className='items-center'>
                    <Checkbox label='Machine Learning' checked={machineLearning} onCheckedChange={setMachineLearning} />
                  </View>
                </View>
              </View>
              
              <View>
                <Text className='text-sm text-muted-foreground mb-2'>Design</Text>
                <View className='space-y-2'>
                  <View className='items-center'>
                    <Checkbox label='UI Design' checked={uiDesign} onCheckedChange={setUiDesign} />
                  </View>
                  <View className='items-center'>
                    <Checkbox label='UX Research' checked={uxResearch} onCheckedChange={setUxResearch} />
                  </View>
                  <View className='items-center'>
                    <Checkbox label='Graphic Design' checked={graphicDesign} onCheckedChange={setGraphicDesign} />
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>

        {/* Accessibility Example */}
        <View>
          <Text className='text-lg font-bold mb-4'>Accessibility Features</Text>
          <View className='bg-info-lighter rounded-lg p-4'>
            <Text className='text-sm font-medium mb-3'>All checkboxes include:</Text>
            <View className='space-y-2'>
              <Text className='text-xs'>• Proper accessibility roles</Text>
              <Text className='text-xs'>• Keyboard navigation support</Text>
              <Text className='text-xs'>• Clear disabled states</Text>
              <Text className='text-xs'>• Touch target of at least 44x44 points</Text>
              <Text className='text-xs'>• Visual feedback on interaction</Text>
            </View>
          </View>
        </View>

      </View>
    </ScrollView>
  );
}