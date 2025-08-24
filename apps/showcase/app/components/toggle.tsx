import { ScrollView, View } from 'react-native';
import { useState } from 'react';
import { Toggle } from '../../../storybook/components/Toggle/Toggle';
import { Text } from '../../../storybook/components/Text/Text';
import { Button } from '../../../storybook/components/Button/Button';

export default function ToggleScreen() {
  // Basic toggle states
  const [basicToggle, setBasicToggle] = useState(false);
  const [onToggle, setOnToggle] = useState(true);
  const [offToggle, setOffToggle] = useState(false);
  
  // Settings toggles
  const [notifications, setNotifications] = useState(true);
  const [darkMode, setDarkMode] = useState(false);
  const [autoSave, setAutoSave] = useState(true);
  const [location, setLocation] = useState(false);
  const [analytics, setAnalytics] = useState(false);
  const [updates, setUpdates] = useState(true);
  
  // Privacy settings
  const [publicProfile, setPublicProfile] = useState(false);
  const [shareData, setShareData] = useState(false);
  const [marketing, setMarketing] = useState(true);
  const [cookies, setCookies] = useState(true);
  
  // Feature toggles
  const [experimentalFeatures, setExperimentalFeatures] = useState(false);
  const [betaFeatures, setBetaFeatures] = useState(false);
  const [advancedMode, setAdvancedMode] = useState(false);
  const [developerMode, setDeveloperMode] = useState(false);
  
  // Accessibility toggles
  const [highContrast, setHighContrast] = useState(false);
  const [largeText, setLargeText] = useState(false);
  const [screenReader, setScreenReader] = useState(false);
  const [soundEffects, setSoundEffects] = useState(true);

  const resetAllSettings = () => {
    setNotifications(true);
    setDarkMode(false);
    setAutoSave(true);
    setLocation(false);
    setAnalytics(false);
    setUpdates(true);
    setPublicProfile(false);
    setShareData(false);
    setMarketing(true);
    setCookies(true);
    setExperimentalFeatures(false);
    setBetaFeatures(false);
    setAdvancedMode(false);
    setDeveloperMode(false);
    setHighContrast(false);
    setLargeText(false);
    setScreenReader(false);
    setSoundEffects(true);
  };

  const enableAllFeatures = () => {
    setExperimentalFeatures(true);
    setBetaFeatures(true);
    setAdvancedMode(true);
    setDeveloperMode(true);
  };

  return (
    <ScrollView className='flex-1 bg-background'>
      <View className='p-4 space-y-8 w-full mx-auto'>
        
        {/* Basic Toggles */}
        <View>
          <Text className='text-lg font-bold mb-4'>Basic Toggles</Text>
          <View className='bg-card rounded-lg p-4 border border-border space-y-6'>
            <View>
              <Text className='text-sm font-medium mb-3'>Interactive Toggle</Text>
              <View className='flex-row items-center gap-3'>
                <Toggle 
                  pressed={basicToggle} 
                  onPressedChange={setBasicToggle}
                />
                <Text className='text-sm'>
                  {basicToggle ? 'Enabled' : 'Disabled'}
                </Text>
              </View>
            </View>
            
            <View>
              <Text className='text-sm font-medium mb-3'>Toggle States</Text>
              <View className='space-y-3'>
                <View className='flex-row items-center gap-3'>
                  <Toggle pressed={true} onPressedChange={() => {}} />
                  <Text className='text-sm'>On State</Text>
                </View>
                <View className='flex-row items-center gap-3'>
                  <Toggle pressed={false} onPressedChange={() => {}} />
                  <Text className='text-sm'>Off State</Text>
                </View>
                <View className='flex-row items-center gap-3'>
                  <Toggle pressed={false} disabled onPressedChange={() => {}} />
                  <Text className='text-sm text-muted-foreground'>Disabled State</Text>
                </View>
              </View>
            </View>
          </View>
        </View>

        {/* App Settings */}
        <View>
          <Text className='text-lg font-bold mb-4'>App Settings</Text>
          <View className='bg-card rounded-lg p-4 border border-border'>
            <View className='space-y-4'>
              <View className='flex-row items-center justify-between'>
                <View className='flex-1'>
                  <Text className='text-base font-medium'>Push Notifications</Text>
                  <Text className='text-sm text-muted-foreground'>Receive notifications from the app</Text>
                </View>
                <Toggle 
                  pressed={notifications} 
                  onPressedChange={setNotifications}
                />
              </View>
              
              <View className='flex-row items-center justify-between'>
                <View className='flex-1'>
                  <Text className='text-base font-medium'>Dark Mode</Text>
                  <Text className='text-sm text-muted-foreground'>Use dark theme throughout the app</Text>
                </View>
                <Toggle 
                  pressed={darkMode} 
                  onPressedChange={setDarkMode}
                />
              </View>
              
              <View className='flex-row items-center justify-between'>
                <View className='flex-1'>
                  <Text className='text-base font-medium'>Auto-Save</Text>
                  <Text className='text-sm text-muted-foreground'>Automatically save your work</Text>
                </View>
                <Toggle 
                  pressed={autoSave} 
                  onPressedChange={setAutoSave}
                />
              </View>
              
              <View className='flex-row items-center justify-between'>
                <View className='flex-1'>
                  <Text className='text-base font-medium'>Location Services</Text>
                  <Text className='text-sm text-muted-foreground'>Allow app to access your location</Text>
                </View>
                <Toggle 
                  pressed={location} 
                  onPressedChange={setLocation}
                />
              </View>
              
              <View className='flex-row items-center justify-between'>
                <View className='flex-1'>
                  <Text className='text-base font-medium'>Usage Analytics</Text>
                  <Text className='text-sm text-muted-foreground'>Help improve the app by sharing usage data</Text>
                </View>
                <Toggle 
                  pressed={analytics} 
                  onPressedChange={setAnalytics}
                />
              </View>
              
              <View className='flex-row items-center justify-between'>
                <View className='flex-1'>
                  <Text className='text-base font-medium'>Automatic Updates</Text>
                  <Text className='text-sm text-muted-foreground'>Download updates automatically</Text>
                </View>
                <Toggle 
                  pressed={updates} 
                  onPressedChange={setUpdates}
                />
              </View>
            </View>
          </View>
        </View>

        {/* Privacy Settings */}
        <View>
          <Text className='text-lg font-bold mb-4'>Privacy Settings</Text>
          <View className='bg-card rounded-lg p-4 border border-border'>
            <View className='space-y-4'>
              <View className='flex-row items-center justify-between'>
                <View className='flex-1'>
                  <Text className='text-base font-medium'>Public Profile</Text>
                  <Text className='text-sm text-muted-foreground'>Make your profile visible to everyone</Text>
                </View>
                <Toggle 
                  pressed={publicProfile} 
                  onPressedChange={setPublicProfile}
                />
              </View>
              
              <View className='flex-row items-center justify-between'>
                <View className='flex-1'>
                  <Text className='text-base font-medium'>Data Sharing</Text>
                  <Text className='text-sm text-muted-foreground'>Share anonymized data with partners</Text>
                </View>
                <Toggle 
                  pressed={shareData} 
                  onPressedChange={setShareData}
                />
              </View>
              
              <View className='flex-row items-center justify-between'>
                <View className='flex-1'>
                  <Text className='text-base font-medium'>Marketing Emails</Text>
                  <Text className='text-sm text-muted-foreground'>Receive promotional emails</Text>
                </View>
                <Toggle 
                  pressed={marketing} 
                  onPressedChange={setMarketing}
                />
              </View>
              
              <View className='flex-row items-center justify-between'>
                <View className='flex-1'>
                  <Text className='text-base font-medium'>Cookie Preferences</Text>
                  <Text className='text-sm text-muted-foreground'>Allow non-essential cookies</Text>
                </View>
                <Toggle 
                  pressed={cookies} 
                  onPressedChange={setCookies}
                />
              </View>
            </View>
          </View>
        </View>

        {/* Feature Toggles */}
        <View>
          <Text className='text-lg font-bold mb-4'>Feature Toggles</Text>
          <View className='bg-card rounded-lg p-4 border border-border'>
            <Text className='text-sm text-muted-foreground mb-4'>
              Enable experimental features at your own risk. These features may be unstable.
            </Text>
            
            <View className='space-y-4'>
              <View className='flex-row items-center justify-between'>
                <View className='flex-1'>
                  <Text className='text-base font-medium'>Experimental Features</Text>
                  <Text className='text-sm text-muted-foreground'>Access to cutting-edge functionality</Text>
                </View>
                <Toggle 
                  pressed={experimentalFeatures} 
                  onPressedChange={setExperimentalFeatures}
                />
              </View>
              
              <View className='flex-row items-center justify-between'>
                <View className='flex-1'>
                  <Text className='text-base font-medium'>Beta Features</Text>
                  <Text className='text-sm text-muted-foreground'>Try new features before public release</Text>
                </View>
                <Toggle 
                  pressed={betaFeatures} 
                  onPressedChange={setBetaFeatures}
                />
              </View>
              
              <View className='flex-row items-center justify-between'>
                <View className='flex-1'>
                  <Text className='text-base font-medium'>Advanced Mode</Text>
                  <Text className='text-sm text-muted-foreground'>Show advanced options and controls</Text>
                </View>
                <Toggle 
                  pressed={advancedMode} 
                  onPressedChange={setAdvancedMode}
                />
              </View>
              
              <View className='flex-row items-center justify-between'>
                <View className='flex-1'>
                  <Text className='text-base font-medium'>Developer Mode</Text>
                  <Text className='text-sm text-muted-foreground'>Enable debugging and development tools</Text>
                </View>
                <Toggle 
                  pressed={developerMode} 
                  onPressedChange={setDeveloperMode}
                />
              </View>
            </View>
            
            <View className='flex-row gap-2 mt-4'>
              <Button 
                size='sm'
                onPress={enableAllFeatures}
              >
                <Text>Enable All</Text>
              </Button>
              <Button 
                size='sm'
                variant='outline'
                onPress={() => {
                  setExperimentalFeatures(false);
                  setBetaFeatures(false);
                  setAdvancedMode(false);
                  setDeveloperMode(false);
                }}
              >
                <Text>Disable All</Text>
              </Button>
            </View>
          </View>
        </View>

        {/* Accessibility Settings */}
        <View>
          <Text className='text-lg font-bold mb-4'>Accessibility Settings</Text>
          <View className='bg-card rounded-lg p-4 border border-border'>
            <View className='space-y-4'>
              <View className='flex-row items-center justify-between'>
                <View className='flex-1'>
                  <Text className='text-base font-medium'>High Contrast</Text>
                  <Text className='text-sm text-muted-foreground'>Increase contrast for better visibility</Text>
                </View>
                <Toggle 
                  pressed={highContrast} 
                  onPressedChange={setHighContrast}
                />
              </View>
              
              <View className='flex-row items-center justify-between'>
                <View className='flex-1'>
                  <Text className='text-base font-medium'>Large Text</Text>
                  <Text className='text-sm text-muted-foreground'>Use larger font sizes</Text>
                </View>
                <Toggle 
                  pressed={largeText} 
                  onPressedChange={setLargeText}
                />
              </View>
              
              <View className='flex-row items-center justify-between'>
                <View className='flex-1'>
                  <Text className='text-base font-medium'>Screen Reader Support</Text>
                  <Text className='text-sm text-muted-foreground'>Enhanced screen reader compatibility</Text>
                </View>
                <Toggle 
                  pressed={screenReader} 
                  onPressedChange={setScreenReader}
                />
              </View>
              
              <View className='flex-row items-center justify-between'>
                <View className='flex-1'>
                  <Text className='text-base font-medium'>Sound Effects</Text>
                  <Text className='text-sm text-muted-foreground'>Play sounds for interactions</Text>
                </View>
                <Toggle 
                  pressed={soundEffects} 
                  onPressedChange={setSoundEffects}
                />
              </View>
            </View>
          </View>
        </View>

        {/* Simple Examples */}
        <View>
          <Text className='text-lg font-bold mb-4'>Simple Toggle Examples</Text>
          <View className='space-y-4'>
            <View className='bg-card rounded-lg p-4 border border-border'>
              <Text className='text-sm font-medium mb-3'>On/Off Controls</Text>
              <View className='space-y-3'>
                <View className='flex-row items-center justify-between'>
                  <Text className='text-sm'>WiFi</Text>
                  <Toggle pressed={true} onPressedChange={() => {}} />
                </View>
                <View className='flex-row items-center justify-between'>
                  <Text className='text-sm'>Bluetooth</Text>
                  <Toggle pressed={false} onPressedChange={() => {}} />
                </View>
                <View className='flex-row items-center justify-between'>
                  <Text className='text-sm text-muted-foreground'>Airplane Mode</Text>
                  <Toggle pressed={false} disabled onPressedChange={() => {}} />
                </View>
              </View>
            </View>

            <View className='bg-card rounded-lg p-4 border border-border'>
              <Text className='text-sm font-medium mb-3'>Quick Settings</Text>
              <View className='space-y-3'>
                <View className='flex-row items-center justify-between'>
                  <Text className='text-sm'>Do Not Disturb</Text>
                  <Toggle pressed={false} onPressedChange={() => {}} />
                </View>
                <View className='flex-row items-center justify-between'>
                  <Text className='text-sm'>Auto-Brightness</Text>
                  <Toggle pressed={true} onPressedChange={() => {}} />
                </View>
                <View className='flex-row items-center justify-between'>
                  <Text className='text-sm'>Low Power Mode</Text>
                  <Toggle pressed={false} onPressedChange={() => {}} />
                </View>
              </View>
            </View>
          </View>
        </View>

        {/* List with Toggles */}
        <View>
          <Text className='text-lg font-bold mb-4'>List with Toggles</Text>
          <View className='bg-card rounded-lg border border-border'>
            {[
              { label: 'Email Notifications', description: 'Receive email updates', enabled: true },
              { label: 'SMS Notifications', description: 'Receive text message alerts', enabled: false },
              { label: 'Push Notifications', description: 'Show notifications on device', enabled: true },
              { label: 'Weekly Digest', description: 'Get weekly summary emails', enabled: false },
              { label: 'Security Alerts', description: 'Important security notifications', enabled: true },
            ].map((item, index) => (
              <View 
                key={index} 
                className={`flex-row items-center justify-between p-4 ${index < 4 ? 'border-b border-border' : ''}`}
              >
                <View className='flex-1'>
                  <Text className='text-base font-medium'>{item.label}</Text>
                  <Text className='text-sm text-muted-foreground'>{item.description}</Text>
                </View>
                <Toggle 
                  pressed={item.enabled} 
                  onPressedChange={() => {}} 
                />
              </View>
            ))}
          </View>
        </View>

        {/* Actions */}
        <View>
          <Text className='text-lg font-bold mb-4'>Bulk Actions</Text>
          <View className='bg-card rounded-lg p-4 border border-border'>
            <Text className='text-sm font-medium mb-4'>Settings Management</Text>
            <View className='flex-row gap-2'>
              <Button 
                size='sm'
                variant='outline'
                onPress={resetAllSettings}
              >
                <Text>Reset All</Text>
              </Button>
              <Button 
                size='sm'
                variant='outline'
                onPress={() => {
                  // Save settings logic
                }}
              >
                <Text>Save Settings</Text>
              </Button>
            </View>
            
            <View className='mt-4 p-3 bg-muted rounded'>
              <Text className='text-xs text-muted-foreground'>
                Settings are automatically saved when changed. Use "Reset All" to restore defaults.
              </Text>
            </View>
          </View>
        </View>

        {/* Usage Guidelines */}
        <View>
          <Text className='text-lg font-bold mb-4'>Usage Guidelines</Text>
          <View className='bg-info-lighter rounded-lg p-4'>
            <Text className='text-sm font-medium mb-3'>When to use Toggles:</Text>
            <View className='space-y-2'>
              <Text className='text-xs'>• Binary on/off settings and preferences</Text>
              <Text className='text-xs'>• Feature flags and experimental options</Text>
              <Text className='text-xs'>• Privacy and permission controls</Text>
              <Text className='text-xs'>• Notification and alert settings</Text>
              <Text className='text-xs'>• Accessibility and display options</Text>
            </View>
            <Text className='text-sm font-medium mt-3 mb-2'>Best Practices:</Text>
            <View className='space-y-1'>
              <Text className='text-xs'>• Use clear, descriptive labels</Text>
              <Text className='text-xs'>• Provide context with helper text when needed</Text>
              <Text className='text-xs'>• Group related toggles together</Text>
              <Text className='text-xs'>• Make the current state visually obvious</Text>
              <Text className='text-xs'>• Consider the impact of default states</Text>
              <Text className='text-xs'>• Use disabled state for unavailable options</Text>
              <Text className='text-xs'>• Provide immediate feedback when toggled</Text>
            </View>
          </View>
        </View>

      </View>
    </ScrollView>
  );
}