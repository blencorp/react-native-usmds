import { ScrollView, View } from 'react-native';
import { useState } from 'react';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '../../../storybook/components/Collapsible/Collapsible';
import { Button } from '../../../storybook/components/Button/Button';
import { Text } from '../../../storybook/components/Text/Text';
import { ChevronDown, ChevronUp, ChevronRight, Plus, Minus, Info, Settings, User, HelpCircle, FileText, Shield, Bell, Lock } from 'lucide-react-native';

export default function CollapsibleScreen() {
  // Individual collapsible states
  const [basic, setBasic] = useState(false);
  const [list, setList] = useState(false);
  const [card, setCard] = useState(false);
  const [faq1, setFaq1] = useState(false);
  const [faq2, setFaq2] = useState(false);
  const [faq3, setFaq3] = useState(false);
  const [faq4, setFaq4] = useState(false);
  
  // Settings sections
  const [account, setAccount] = useState(false);
  const [privacy, setPrivacy] = useState(true);
  const [notifications, setNotifications] = useState(false);
  const [security, setSecurity] = useState(false);
  
  // Navigation sections
  const [products, setProducts] = useState(false);
  const [resources, setResources] = useState(false);
  const [company, setCompany] = useState(false);
  
  // Multiple sections
  const [section1, setSection1] = useState(true);
  const [section2, setSection2] = useState(false);
  const [section3, setSection3] = useState(false);

  return (
    <ScrollView className='flex-1 bg-background'>
      <View className='p-4 space-y-8 w-full max-w-[393px] mx-auto'>
        
        {/* Basic Example */}
        <View>
          <Text className='text-lg font-bold mb-4'>Basic Collapsible</Text>
          <Collapsible open={basic} onOpenChange={setBasic}>
            <CollapsibleTrigger asChild>
              <Button variant='outline' className='w-full justify-between'>
                <Text>Toggle Content</Text>
                {basic ? (
                  <ChevronUp size={16} color='#000' />
                ) : (
                  <ChevronDown size={16} color='#000' />
                )}
              </Button>
            </CollapsibleTrigger>
            <CollapsibleContent>
              <View className='px-4 py-3 bg-muted/20 rounded-b-lg'>
                <Text className='text-sm'>
                  This is the collapsible content that can be shown or hidden. It's useful for hiding secondary information or options.
                </Text>
              </View>
            </CollapsibleContent>
          </Collapsible>
        </View>

        {/* List Items */}
        <View>
          <Text className='text-lg font-bold mb-4'>Menu List</Text>
          <Collapsible open={list} onOpenChange={setList}>
            <CollapsibleTrigger asChild>
              <Button variant='outline' className='w-full justify-between'>
                <Text>Navigation Menu</Text>
                {list ? (
                  <ChevronUp size={16} color='#000' />
                ) : (
                  <ChevronDown size={16} color='#000' />
                )}
              </Button>
            </CollapsibleTrigger>
            <CollapsibleContent>
              <View className='px-4 py-3 space-y-2 bg-card border border-border rounded-b-lg'>
                <Text className='text-sm'>• Home</Text>
                <Text className='text-sm'>• Products</Text>
                <Text className='text-sm'>• Services</Text>
                <Text className='text-sm'>• About Us</Text>
                <Text className='text-sm'>• Contact</Text>
              </View>
            </CollapsibleContent>
          </Collapsible>
        </View>

        {/* Card Style */}
        <View>
          <Text className='text-lg font-bold mb-4'>Card with Details</Text>
          <View className='rounded-lg border border-border p-4 bg-card'>
            <Collapsible open={card} onOpenChange={setCard}>
              <View className='flex-row items-center justify-between'>
                <View className='flex-1'>
                  <Text className='text-lg font-semibold'>Product Details</Text>
                  <Text className='text-sm text-muted-foreground'>
                    Click to view specifications
                  </Text>
                </View>
                <CollapsibleTrigger asChild>
                  <Button variant='ghost' size='icon'>
                    {card ? (
                      <ChevronUp size={20} color='#000' />
                    ) : (
                      <ChevronDown size={20} color='#000' />
                    )}
                  </Button>
                </CollapsibleTrigger>
              </View>
              <CollapsibleContent>
                <View className='pt-4 space-y-3 border-t border-border mt-4'>
                  <View>
                    <Text className='text-sm font-medium'>Dimensions</Text>
                    <Text className='text-sm text-muted-foreground'>
                      150mm x 75mm x 10mm
                    </Text>
                  </View>
                  <View>
                    <Text className='text-sm font-medium'>Weight</Text>
                    <Text className='text-sm text-muted-foreground'>
                      180 grams
                    </Text>
                  </View>
                  <View>
                    <Text className='text-sm font-medium'>Materials</Text>
                    <Text className='text-sm text-muted-foreground'>
                      Aluminum body with glass display
                    </Text>
                  </View>
                </View>
              </CollapsibleContent>
            </Collapsible>
          </View>
        </View>

        {/* FAQ Section */}
        <View>
          <Text className='text-lg font-bold mb-4'>FAQ Accordion</Text>
          <View className='space-y-2'>
            {/* FAQ 1 */}
            <View className='border border-border rounded-lg'>
              <Collapsible open={faq1} onOpenChange={setFaq1}>
                <CollapsibleTrigger asChild>
                  <Button variant='ghost' className='w-full justify-between p-4'>
                    <Text className='text-left flex-1'>How does this work?</Text>
                    {faq1 ? (
                      <Minus size={16} color='#000' />
                    ) : (
                      <Plus size={16} color='#000' />
                    )}
                  </Button>
                </CollapsibleTrigger>
                <CollapsibleContent>
                  <View className='px-4 pb-4'>
                    <Text className='text-sm text-muted-foreground'>
                      The collapsible component uses state management to show and hide content. When you click the trigger, it toggles the visibility of the content area with smooth animations.
                    </Text>
                  </View>
                </CollapsibleContent>
              </Collapsible>
            </View>

            {/* FAQ 2 */}
            <View className='border border-border rounded-lg'>
              <Collapsible open={faq2} onOpenChange={setFaq2}>
                <CollapsibleTrigger asChild>
                  <Button variant='ghost' className='w-full justify-between p-4'>
                    <Text className='text-left flex-1'>What are the benefits?</Text>
                    {faq2 ? (
                      <Minus size={16} color='#000' />
                    ) : (
                      <Plus size={16} color='#000' />
                    )}
                  </Button>
                </CollapsibleTrigger>
                <CollapsibleContent>
                  <View className='px-4 pb-4'>
                    <Text className='text-sm text-muted-foreground'>
                      Collapsibles help save screen space, organize content better, reduce cognitive load, and provide a cleaner interface by hiding secondary information until needed.
                    </Text>
                  </View>
                </CollapsibleContent>
              </Collapsible>
            </View>

            {/* FAQ 3 */}
            <View className='border border-border rounded-lg'>
              <Collapsible open={faq3} onOpenChange={setFaq3}>
                <CollapsibleTrigger asChild>
                  <Button variant='ghost' className='w-full justify-between p-4'>
                    <Text className='text-left flex-1'>Can I customize the appearance?</Text>
                    {faq3 ? (
                      <Minus size={16} color='#000' />
                    ) : (
                      <Plus size={16} color='#000' />
                    )}
                  </Button>
                </CollapsibleTrigger>
                <CollapsibleContent>
                  <View className='px-4 pb-4'>
                    <Text className='text-sm text-muted-foreground'>
                      Yes! You can customize the trigger button style, content layout, animations, icons, and colors to match your design system.
                    </Text>
                  </View>
                </CollapsibleContent>
              </Collapsible>
            </View>

            {/* FAQ 4 */}
            <View className='border border-border rounded-lg'>
              <Collapsible open={faq4} onOpenChange={setFaq4}>
                <CollapsibleTrigger asChild>
                  <Button variant='ghost' className='w-full justify-between p-4'>
                    <Text className='text-left flex-1'>Is it accessible?</Text>
                    {faq4 ? (
                      <Minus size={16} color='#000' />
                    ) : (
                      <Plus size={16} color='#000' />
                    )}
                  </Button>
                </CollapsibleTrigger>
                <CollapsibleContent>
                  <View className='px-4 pb-4'>
                    <Text className='text-sm text-muted-foreground'>
                      The collapsible component includes proper ARIA attributes, keyboard navigation support, and focus management for screen readers and accessibility tools.
                    </Text>
                  </View>
                </CollapsibleContent>
              </Collapsible>
            </View>
          </View>
        </View>

        {/* Settings Menu */}
        <View>
          <Text className='text-lg font-bold mb-4'>Settings Menu</Text>
          <View className='bg-card border border-border rounded-lg overflow-hidden'>
            {/* Account Settings */}
            <Collapsible open={account} onOpenChange={setAccount}>
              <CollapsibleTrigger asChild>
                <Button variant='ghost' className='w-full justify-between p-4 rounded-none border-b border-border'>
                  <View className='flex-row items-center gap-3'>
                    <User size={20} color='#000' />
                    <Text>Account Settings</Text>
                  </View>
                  <ChevronRight 
                    size={16} 
                    color='#000' 
                    style={{ transform: [{ rotate: account ? '90deg' : '0deg' }] }}
                  />
                </Button>
              </CollapsibleTrigger>
              <CollapsibleContent>
                <View className='px-4 pl-11 py-3 space-y-2 bg-muted/10'>
                  <Text className='text-sm'>• Profile Information</Text>
                  <Text className='text-sm'>• Email Preferences</Text>
                  <Text className='text-sm'>• Language & Region</Text>
                  <Text className='text-sm'>• Connected Accounts</Text>
                </View>
              </CollapsibleContent>
            </Collapsible>

            {/* Privacy Settings */}
            <Collapsible open={privacy} onOpenChange={setPrivacy}>
              <CollapsibleTrigger asChild>
                <Button variant='ghost' className='w-full justify-between p-4 rounded-none border-b border-border'>
                  <View className='flex-row items-center gap-3'>
                    <Shield size={20} color='#000' />
                    <Text>Privacy</Text>
                  </View>
                  <ChevronRight 
                    size={16} 
                    color='#000' 
                    style={{ transform: [{ rotate: privacy ? '90deg' : '0deg' }] }}
                  />
                </Button>
              </CollapsibleTrigger>
              <CollapsibleContent>
                <View className='px-4 pl-11 py-3 space-y-2 bg-muted/10'>
                  <Text className='text-sm'>• Data Collection</Text>
                  <Text className='text-sm'>• Cookie Settings</Text>
                  <Text className='text-sm'>• Ad Preferences</Text>
                  <Text className='text-sm'>• Third-party Sharing</Text>
                </View>
              </CollapsibleContent>
            </Collapsible>

            {/* Notifications */}
            <Collapsible open={notifications} onOpenChange={setNotifications}>
              <CollapsibleTrigger asChild>
                <Button variant='ghost' className='w-full justify-between p-4 rounded-none border-b border-border'>
                  <View className='flex-row items-center gap-3'>
                    <Bell size={20} color='#000' />
                    <Text>Notifications</Text>
                  </View>
                  <ChevronRight 
                    size={16} 
                    color='#000' 
                    style={{ transform: [{ rotate: notifications ? '90deg' : '0deg' }] }}
                  />
                </Button>
              </CollapsibleTrigger>
              <CollapsibleContent>
                <View className='px-4 pl-11 py-3 space-y-2 bg-muted/10'>
                  <Text className='text-sm'>• Push Notifications</Text>
                  <Text className='text-sm'>• Email Alerts</Text>
                  <Text className='text-sm'>• SMS Updates</Text>
                  <Text className='text-sm'>• In-app Messages</Text>
                </View>
              </CollapsibleContent>
            </Collapsible>

            {/* Security */}
            <Collapsible open={security} onOpenChange={setSecurity}>
              <CollapsibleTrigger asChild>
                <Button variant='ghost' className='w-full justify-between p-4 rounded-none'>
                  <View className='flex-row items-center gap-3'>
                    <Lock size={20} color='#000' />
                    <Text>Security</Text>
                  </View>
                  <ChevronRight 
                    size={16} 
                    color='#000' 
                    style={{ transform: [{ rotate: security ? '90deg' : '0deg' }] }}
                  />
                </Button>
              </CollapsibleTrigger>
              <CollapsibleContent>
                <View className='px-4 pl-11 py-3 space-y-2 bg-muted/10'>
                  <Text className='text-sm'>• Password Settings</Text>
                  <Text className='text-sm'>• Two-Factor Auth</Text>
                  <Text className='text-sm'>• Login History</Text>
                  <Text className='text-sm'>• Active Sessions</Text>
                </View>
              </CollapsibleContent>
            </Collapsible>
          </View>
        </View>

        {/* Nested Navigation */}
        <View>
          <Text className='text-lg font-bold mb-4'>Nested Navigation</Text>
          <View className='space-y-2'>
            {/* Products */}
            <Collapsible open={products} onOpenChange={setProducts}>
              <CollapsibleTrigger asChild>
                <Button variant='outline' className='w-full justify-between'>
                  <Text>Products</Text>
                  <ChevronDown 
                    size={16} 
                    color='#000' 
                    style={{ transform: [{ rotate: products ? '180deg' : '0deg' }] }}
                  />
                </Button>
              </CollapsibleTrigger>
              <CollapsibleContent>
                <View className='ml-4 mt-2 space-y-1'>
                  <Button variant='ghost' className='w-full justify-start'>
                    <Text>Software Solutions</Text>
                  </Button>
                  <Button variant='ghost' className='w-full justify-start'>
                    <Text>Hardware Products</Text>
                  </Button>
                  <Button variant='ghost' className='w-full justify-start'>
                    <Text>Cloud Services</Text>
                  </Button>
                </View>
              </CollapsibleContent>
            </Collapsible>

            {/* Resources */}
            <Collapsible open={resources} onOpenChange={setResources}>
              <CollapsibleTrigger asChild>
                <Button variant='outline' className='w-full justify-between'>
                  <Text>Resources</Text>
                  <ChevronDown 
                    size={16} 
                    color='#000' 
                    style={{ transform: [{ rotate: resources ? '180deg' : '0deg' }] }}
                  />
                </Button>
              </CollapsibleTrigger>
              <CollapsibleContent>
                <View className='ml-4 mt-2 space-y-1'>
                  <Button variant='ghost' className='w-full justify-start'>
                    <Text>Documentation</Text>
                  </Button>
                  <Button variant='ghost' className='w-full justify-start'>
                    <Text>Tutorials</Text>
                  </Button>
                  <Button variant='ghost' className='w-full justify-start'>
                    <Text>API Reference</Text>
                  </Button>
                  <Button variant='ghost' className='w-full justify-start'>
                    <Text>Community Forum</Text>
                  </Button>
                </View>
              </CollapsibleContent>
            </Collapsible>

            {/* Company */}
            <Collapsible open={company} onOpenChange={setCompany}>
              <CollapsibleTrigger asChild>
                <Button variant='outline' className='w-full justify-between'>
                  <Text>Company</Text>
                  <ChevronDown 
                    size={16} 
                    color='#000' 
                    style={{ transform: [{ rotate: company ? '180deg' : '0deg' }] }}
                  />
                </Button>
              </CollapsibleTrigger>
              <CollapsibleContent>
                <View className='ml-4 mt-2 space-y-1'>
                  <Button variant='ghost' className='w-full justify-start'>
                    <Text>About Us</Text>
                  </Button>
                  <Button variant='ghost' className='w-full justify-start'>
                    <Text>Careers</Text>
                  </Button>
                  <Button variant='ghost' className='w-full justify-start'>
                    <Text>Press</Text>
                  </Button>
                  <Button variant='ghost' className='w-full justify-start'>
                    <Text>Contact</Text>
                  </Button>
                </View>
              </CollapsibleContent>
            </Collapsible>
          </View>
        </View>

        {/* Content Sections */}
        <View>
          <Text className='text-lg font-bold mb-4'>Content Sections</Text>
          <View className='space-y-4'>
            {/* Section 1 */}
            <View className='bg-card rounded-lg overflow-hidden border border-border'>
              <Collapsible open={section1} onOpenChange={setSection1}>
                <CollapsibleTrigger asChild>
                  <Button variant='ghost' className='w-full justify-between p-4'>
                    <Text className='font-medium'>Getting Started</Text>
                    <Info size={16} color={section1 ? '#007AFF' : '#666'} />
                  </Button>
                </CollapsibleTrigger>
                <CollapsibleContent>
                  <View className='px-4 pb-4'>
                    <Text className='text-sm text-muted-foreground leading-5'>
                      Welcome to our platform! This guide will help you get up and running quickly. Follow these simple steps to configure your account and start using our services.
                    </Text>
                  </View>
                </CollapsibleContent>
              </Collapsible>
            </View>

            {/* Section 2 */}
            <View className='bg-card rounded-lg overflow-hidden border border-border'>
              <Collapsible open={section2} onOpenChange={setSection2}>
                <CollapsibleTrigger asChild>
                  <Button variant='ghost' className='w-full justify-between p-4'>
                    <Text className='font-medium'>Advanced Features</Text>
                    <Settings size={16} color={section2 ? '#007AFF' : '#666'} />
                  </Button>
                </CollapsibleTrigger>
                <CollapsibleContent>
                  <View className='px-4 pb-4'>
                    <Text className='text-sm text-muted-foreground leading-5'>
                      Unlock the full potential with our advanced features. Customize workflows, integrate with third-party services, and automate repetitive tasks.
                    </Text>
                  </View>
                </CollapsibleContent>
              </Collapsible>
            </View>

            {/* Section 3 */}
            <View className='bg-card rounded-lg overflow-hidden border border-border'>
              <Collapsible open={section3} onOpenChange={setSection3}>
                <CollapsibleTrigger asChild>
                  <Button variant='ghost' className='w-full justify-between p-4'>
                    <Text className='font-medium'>Troubleshooting</Text>
                    <HelpCircle size={16} color={section3 ? '#007AFF' : '#666'} />
                  </Button>
                </CollapsibleTrigger>
                <CollapsibleContent>
                  <View className='px-4 pb-4'>
                    <Text className='text-sm text-muted-foreground leading-5'>
                      Having issues? Check our troubleshooting guide for common problems and solutions. If you need further assistance, contact our support team.
                    </Text>
                  </View>
                </CollapsibleContent>
              </Collapsible>
            </View>
          </View>
        </View>

        {/* Usage Notes */}
        <View>
          <Text className='text-lg font-bold mb-4'>Usage Guidelines</Text>
          <View className='bg-info-lighter rounded-lg p-4'>
            <Text className='text-sm font-medium mb-3'>When to use Collapsible:</Text>
            <View className='space-y-2'>
              <Text className='text-xs'>• FAQ sections and help content</Text>
              <Text className='text-xs'>• Settings and preference menus</Text>
              <Text className='text-xs'>• Navigation menus with sub-items</Text>
              <Text className='text-xs'>• Product details and specifications</Text>
              <Text className='text-xs'>• Terms and conditions sections</Text>
              <Text className='text-xs'>• Progressive disclosure of complex forms</Text>
            </View>
            <Text className='text-sm font-medium mt-3 mb-2'>Best Practices:</Text>
            <View className='space-y-1'>
              <Text className='text-xs'>• Use clear icons to indicate state</Text>
              <Text className='text-xs'>• Keep trigger labels concise</Text>
              <Text className='text-xs'>• Consider starting with important sections expanded</Text>
              <Text className='text-xs'>• Provide smooth animations for better UX</Text>
              <Text className='text-xs'>• Ensure keyboard navigation works properly</Text>
            </View>
          </View>
        </View>

      </View>
    </ScrollView>
  );
}