import { ScrollView, View } from 'react-native';
import { useState } from 'react';
import { CheckboxTile } from '../../../storybook/components/CheckboxTile/CheckboxTile';
import { Text } from '../../../storybook/components/Text/Text';

export default function CheckboxTileScreen() {
  // Basic states
  const [basic1, setBasic1] = useState(false);
  const [basic2, setBasic2] = useState(true);
  
  // With descriptions
  const [desc1, setDesc1] = useState(false);
  const [desc2, setDesc2] = useState(true);
  const [desc3, setDesc3] = useState(false);
  
  // Feature selection
  const [feature1, setFeature1] = useState(true);
  const [feature2, setFeature2] = useState(false);
  const [feature3, setFeature3] = useState(false);
  const [feature4, setFeature4] = useState(true);
  
  // Plan selection
  const [basicPlan, setBasicPlan] = useState(false);
  const [proPlan, setProPlan] = useState(true);
  const [enterprisePlan, setEnterprisePlan] = useState(false);
  
  // Preferences
  const [pref1, setPref1] = useState(true);
  const [pref2, setPref2] = useState(false);
  const [pref3, setPref3] = useState(true);
  const [pref4, setPref4] = useState(false);
  
  // Services
  const [service1, setService1] = useState(false);
  const [service2, setService2] = useState(true);
  const [service3, setService3] = useState(false);
  const [service4, setService4] = useState(false);

  return (
    <ScrollView className='flex-1 bg-background'>
      <View className='p-4 space-y-8 w-full mx-auto'>
        
        {/* Basic States */}
        <View>
          <Text className='text-lg font-bold mb-4'>CheckboxTile States</Text>
          <View className='space-y-3'>
            <View className='items-center'>
              <CheckboxTile 
                label='Unchecked tile' 
                checked={basic1} 
                onCheckedChange={setBasic1} 
              />
            </View>
            <View className='items-center'>
              <CheckboxTile 
                label='Checked tile' 
                checked={basic2} 
                onCheckedChange={setBasic2} 
              />
            </View>
            <View className='items-center'>
              <CheckboxTile 
                label='Disabled unchecked tile' 
                checked={false} 
                disabled 
                onCheckedChange={() => {}} 
              />
            </View>
            <View className='items-center'>
              <CheckboxTile 
                label='Disabled checked tile' 
                checked={true} 
                disabled 
                onCheckedChange={() => {}} 
              />
            </View>
          </View>
        </View>

        {/* With Descriptions */}
        <View>
          <Text className='text-lg font-bold mb-4'>With Descriptions</Text>
          <View className='space-y-3'>
            <View className='items-center'>
              <CheckboxTile 
                label='Option with description' 
                description='This is additional text that provides more context about this option.'
                checked={desc1} 
                onCheckedChange={setDesc1} 
              />
            </View>
            <View className='items-center'>
              <CheckboxTile 
                label='Selected option with description' 
                description='This option is currently selected. The tile shows a highlighted state.'
                checked={desc2} 
                onCheckedChange={setDesc2} 
              />
            </View>
            <View className='items-center'>
              <CheckboxTile 
                label='Another option' 
                description='You can select multiple tiles at the same time if needed for your use case.'
                checked={desc3} 
                onCheckedChange={setDesc3} 
              />
            </View>
            <View className='items-center'>
              <CheckboxTile 
                label='Disabled option' 
                description='This option is currently unavailable and cannot be selected.'
                checked={false} 
                disabled
                onCheckedChange={() => {}} 
              />
            </View>
          </View>
        </View>

        {/* Feature Selection */}
        <View>
          <Text className='text-lg font-bold mb-4'>Feature Selection</Text>
          <View className='bg-card rounded-lg p-4'>
            <Text className='text-base font-medium mb-3'>Choose your features</Text>
            <View className='space-y-3'>
              <View className='items-center'>
                <CheckboxTile 
                  label='Advanced Analytics' 
                  description='Get detailed insights and reports about your data'
                  checked={feature1} 
                  onCheckedChange={setFeature1} 
                />
              </View>
              <View className='items-center'>
                <CheckboxTile 
                  label='Team Collaboration' 
                  description='Work together with unlimited team members'
                  checked={feature2} 
                  onCheckedChange={setFeature2} 
                />
              </View>
              <View className='items-center'>
                <CheckboxTile 
                  label='Priority Support' 
                  description='24/7 dedicated support with faster response times'
                  checked={feature3} 
                  onCheckedChange={setFeature3} 
                />
              </View>
              <View className='items-center'>
                <CheckboxTile 
                  label='Custom Integrations' 
                  description='Connect with your existing tools and workflows'
                  checked={feature4} 
                  onCheckedChange={setFeature4} 
                />
              </View>
            </View>
          </View>
        </View>

        {/* Plan Selection */}
        <View>
          <Text className='text-lg font-bold mb-4'>Subscription Plans</Text>
          <View className='space-y-3'>
            <View className='items-center'>
              <CheckboxTile 
                label='Basic Plan - $9/month' 
                description='Perfect for individuals and small projects. Includes core features and email support.'
                checked={basicPlan} 
                onCheckedChange={setBasicPlan} 
              />
            </View>
            <View className='items-center'>
              <CheckboxTile 
                label='Pro Plan - $29/month' 
                description='Great for growing teams. All Basic features plus advanced tools and priority support.'
                checked={proPlan} 
                onCheckedChange={setProPlan} 
              />
            </View>
            <View className='items-center'>
              <CheckboxTile 
                label='Enterprise Plan - Custom pricing' 
                description='For large organizations. Custom features, dedicated support, and SLA guarantees.'
                checked={enterprisePlan} 
                onCheckedChange={setEnterprisePlan} 
              />
            </View>
          </View>
        </View>

        {/* Preferences Selection */}
        <View>
          <Text className='text-lg font-bold mb-4'>Communication Preferences</Text>
          <View className='bg-card rounded-lg p-4'>
            <Text className='text-sm text-muted-foreground mb-4'>
              Select how you'd like to receive updates
            </Text>
            <View className='space-y-3'>
              <View className='items-center'>
                <CheckboxTile 
                  label='Email newsletters' 
                  description='Weekly updates about new features and tips'
                  checked={pref1} 
                  onCheckedChange={setPref1} 
                />
              </View>
              <View className='items-center'>
                <CheckboxTile 
                  label='Product updates' 
                  description='Important announcements and release notes'
                  checked={pref2} 
                  onCheckedChange={setPref2} 
                />
              </View>
              <View className='items-center'>
                <CheckboxTile 
                  label='Marketing communications' 
                  description='Special offers and promotional content'
                  checked={pref3} 
                  onCheckedChange={setPref3} 
                />
              </View>
              <View className='items-center'>
                <CheckboxTile 
                  label='Partner offers' 
                  description='Exclusive deals from our trusted partners'
                  checked={pref4} 
                  onCheckedChange={setPref4} 
                />
              </View>
            </View>
            <View className='mt-4 p-3 bg-muted/20 rounded'>
              <Text className='text-sm font-medium mb-1'>Selected preferences:</Text>
              <Text className='text-xs text-muted-foreground'>
                {[
                  pref1 && 'Email newsletters',
                  pref2 && 'Product updates',
                  pref3 && 'Marketing',
                  pref4 && 'Partner offers'
                ].filter(Boolean).join(', ') || 'None selected'}
              </Text>
            </View>
          </View>
        </View>

        {/* Service Selection */}
        <View>
          <Text className='text-lg font-bold mb-4'>Additional Services</Text>
          <View className='space-y-3'>
            <View className='items-center'>
              <CheckboxTile 
                label='Data Backup' 
                description='Automatic daily backups with 30-day retention'
                checked={service1} 
                onCheckedChange={setService1} 
              />
            </View>
            <View className='items-center'>
              <CheckboxTile 
                label='SSL Certificate' 
                description='Secure your site with HTTPS encryption'
                checked={service2} 
                onCheckedChange={setService2} 
              />
            </View>
            <View className='items-center'>
              <CheckboxTile 
                label='CDN Integration' 
                description='Faster content delivery worldwide'
                checked={service3} 
                onCheckedChange={setService3} 
              />
            </View>
            <View className='items-center'>
              <CheckboxTile 
                label='Advanced Security' 
                description='DDoS protection and firewall rules'
                checked={service4} 
                onCheckedChange={setService4} 
              />
            </View>
          </View>
        </View>

        {/* Single Selection Example */}
        <View>
          <Text className='text-lg font-bold mb-4'>Simple Options</Text>
          <View className='space-y-3'>
            <View className='items-center'>
              <CheckboxTile 
                label='Option A' 
                checked={false} 
                onCheckedChange={() => {}} 
              />
            </View>
            <View className='items-center'>
              <CheckboxTile 
                label='Option B' 
                checked={true} 
                onCheckedChange={() => {}} 
              />
            </View>
            <View className='items-center'>
              <CheckboxTile 
                label='Option C' 
                checked={false} 
                onCheckedChange={() => {}} 
              />
            </View>
          </View>
        </View>

        {/* Mixed States */}
        <View>
          <Text className='text-lg font-bold mb-4'>Mixed States Example</Text>
          <View className='space-y-3'>
            <View className='items-center'>
              <CheckboxTile 
                label='Available option' 
                description='This option can be selected'
                checked={false} 
                onCheckedChange={() => {}} 
              />
            </View>
            <View className='items-center'>
              <CheckboxTile 
                label='Selected option' 
                description='This option is currently selected'
                checked={true} 
                onCheckedChange={() => {}} 
              />
            </View>
            <View className='items-center'>
              <CheckboxTile 
                label='Unavailable option' 
                description='This option is temporarily disabled'
                checked={false} 
                disabled
                onCheckedChange={() => {}} 
              />
            </View>
            <View className='items-center'>
              <CheckboxTile 
                label='Locked selection' 
                description='This selection cannot be changed'
                checked={true} 
                disabled
                onCheckedChange={() => {}} 
              />
            </View>
          </View>
        </View>

        {/* Use Case Notes */}
        <View>
          <Text className='text-lg font-bold mb-4'>Usage Guidelines</Text>
          <View className='bg-info-lighter rounded-lg p-4'>
            <Text className='text-sm font-medium mb-3'>When to use CheckboxTile:</Text>
            <View className='space-y-2'>
              <Text className='text-xs'>• When options need more visual emphasis</Text>
              <Text className='text-xs'>• For important selections that benefit from descriptions</Text>
              <Text className='text-xs'>• When you want to make touch targets larger and more accessible</Text>
              <Text className='text-xs'>• For feature or plan selection interfaces</Text>
              <Text className='text-xs'>• When options have associated metadata or pricing</Text>
            </View>
            <Text className='text-sm font-medium mt-3 mb-2'>Benefits:</Text>
            <View className='space-y-1'>
              <Text className='text-xs'>• Larger touch target improves accessibility</Text>
              <Text className='text-xs'>• Visual feedback with background color changes</Text>
              <Text className='text-xs'>• Room for descriptive text without cluttering</Text>
              <Text className='text-xs'>• Clear selected/unselected states</Text>
            </View>
          </View>
        </View>

      </View>
    </ScrollView>
  );
}