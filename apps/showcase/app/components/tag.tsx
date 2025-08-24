import { ScrollView, View } from 'react-native';
import { useState } from 'react';
import { Tag } from '../../../storybook/components/Tag/Tag';
import { Text } from '../../../storybook/components/Text/Text';
import { Button } from '../../../storybook/components/Button/Button';

export default function TagScreen() {
  // Filter tags example
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedSkills, setSelectedSkills] = useState<string[]>([]);
  const [selectedStatus, setSelectedStatus] = useState<string | null>('active');

  const categories = ['Technology', 'Design', 'Marketing', 'Sales', 'Support'];
  const skills = ['React', 'TypeScript', 'Node.js', 'Python', 'Design', 'UX/UI'];
  const statusOptions = ['active', 'inactive', 'pending', 'archived'];

  const toggleSkill = (skill: string) => {
    setSelectedSkills(prev => 
      prev.includes(skill) 
        ? prev.filter(s => s !== skill)
        : [...prev, skill]
    );
  };

  return (
    <ScrollView className='flex-1 bg-background'>
      <View className='p-4 space-y-8 w-full mx-auto'>
        
        {/* Basic Tags */}
        <View>
          <Text className='text-lg font-bold mb-4'>Basic Tags</Text>
          <View className='bg-card rounded-lg p-4 border border-border space-y-6'>
            <View>
              <Text className='text-sm font-medium mb-3'>Default Size</Text>
              <View className='flex-row flex-wrap gap-2'>
                <Tag label='NEW' />
                <Tag label='BETA' />
                <Tag label='PRO' />
                <Tag label='SALE' />
                <Tag label='HOT' />
                <Tag label='LIMITED' />
              </View>
            </View>
            
            <View>
              <Text className='text-sm font-medium mb-3'>Big Size</Text>
              <View className='flex-row flex-wrap gap-2'>
                <Tag label='NEW' size='big' />
                <Tag label='BETA' size='big' />
                <Tag label='PRO' size='big' />
                <Tag label='SALE' size='big' />
                <Tag label='HOT' size='big' />
                <Tag label='LIMITED' size='big' />
              </View>
            </View>
          </View>
        </View>

        {/* Status Tags */}
        <View>
          <Text className='text-lg font-bold mb-4'>Status Tags</Text>
          <View className='bg-card rounded-lg p-4 border border-border space-y-4'>
            <View>
              <Text className='text-sm font-medium mb-3'>System Status</Text>
              <View className='flex-row flex-wrap gap-2'>
                <Tag label='ONLINE' size='big' />
                <Tag label='OFFLINE' />
                <Tag label='MAINTENANCE' size='big' />
                <Tag label='ERROR' />
                <Tag label='CONNECTING' />
              </View>
            </View>
            
            <View>
              <Text className='text-sm font-medium mb-3'>User Status</Text>
              <View className='flex-row flex-wrap gap-2'>
                <Tag label='ACTIVE' />
                <Tag label='AWAY' />
                <Tag label='BUSY' />
                <Tag label='OFFLINE' />
                <Tag label='VIP' size='big' />
              </View>
            </View>
            
            <View>
              <Text className='text-sm font-medium mb-3'>Order Status</Text>
              <View className='flex-row flex-wrap gap-2'>
                <Tag label='PENDING' />
                <Tag label='PROCESSING' size='big' />
                <Tag label='SHIPPED' />
                <Tag label='DELIVERED' size='big' />
                <Tag label='CANCELLED' />
              </View>
            </View>
          </View>
        </View>

        {/* Product Tags */}
        <View>
          <Text className='text-lg font-bold mb-4'>Product Tags</Text>
          <View className='bg-card rounded-lg p-4 border border-border space-y-4'>
            <View>
              <Text className='text-sm font-medium mb-3'>Featured Products</Text>
              <View className='space-y-3'>
                <View className='flex-row items-center gap-2 p-3 bg-muted rounded'>
                  <Text className='flex-1 text-sm'>Premium Headphones</Text>
                  <Tag label='BESTSELLER' size='big' />
                  <Tag label='SALE' />
                </View>
                <View className='flex-row items-center gap-2 p-3 bg-muted rounded'>
                  <Text className='flex-1 text-sm'>Wireless Speaker</Text>
                  <Tag label='NEW' />
                  <Tag label='LIMITED' />
                </View>
                <View className='flex-row items-center gap-2 p-3 bg-muted rounded'>
                  <Text className='flex-1 text-sm'>Smart Watch</Text>
                  <Tag label='HOT' />
                  <Tag label='TRENDING' size='big' />
                </View>
              </View>
            </View>
          </View>
        </View>

        {/* Category Filter Example */}
        <View>
          <Text className='text-lg font-bold mb-4'>Category Filter</Text>
          <View className='bg-card rounded-lg p-4 border border-border'>
            <Text className='text-sm font-medium mb-3'>Select a category</Text>
            <View className='flex-row flex-wrap gap-2 mb-4'>
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? 'default' : 'outline'}
                  size='sm'
                  onPress={() => setSelectedCategory(
                    selectedCategory === category ? null : category
                  )}
                >
                  <Text>{category.toLowerCase()}</Text>
                </Button>
              ))}
            </View>
            
            {selectedCategory && (
              <View className='p-3 bg-info-lighter rounded'>
                <View className='flex-row items-center gap-2'>
                  <Text className='text-sm text-info'>Filtered by:</Text>
                  <Tag label={selectedCategory.toUpperCase()} />
                </View>
              </View>
            )}
          </View>
        </View>

        {/* Skills Tags Example */}
        <View>
          <Text className='text-lg font-bold mb-4'>Skills Tags</Text>
          <View className='bg-card rounded-lg p-4 border border-border'>
            <Text className='text-sm font-medium mb-3'>Select your skills</Text>
            <View className='flex-row flex-wrap gap-2 mb-4'>
              {skills.map((skill) => (
                <Button
                  key={skill}
                  variant={selectedSkills.includes(skill) ? 'default' : 'outline'}
                  size='sm'
                  onPress={() => toggleSkill(skill)}
                >
                  <Text>{skill}</Text>
                </Button>
              ))}
            </View>
            
            {selectedSkills.length > 0 && (
              <View className='p-3 bg-success-lighter rounded'>
                <Text className='text-sm text-success-dark mb-2'>Selected skills:</Text>
                <View className='flex-row flex-wrap gap-2'>
                  {selectedSkills.map((skill) => (
                    <Tag key={skill} label={skill.toUpperCase()} size='big' />
                  ))}
                </View>
              </View>
            )}
          </View>
        </View>

        {/* Status Selector */}
        <View>
          <Text className='text-lg font-bold mb-4'>Status Selector</Text>
          <View className='bg-card rounded-lg p-4 border border-border'>
            <Text className='text-sm font-medium mb-3'>Account Status</Text>
            <View className='flex-row flex-wrap gap-2 mb-4'>
              {statusOptions.map((status) => (
                <Button
                  key={status}
                  variant={selectedStatus === status ? 'default' : 'outline'}
                  size='sm'
                  onPress={() => setSelectedStatus(status)}
                >
                  <Text>{status}</Text>
                </Button>
              ))}
            </View>
            
            <View className='p-3 bg-muted rounded'>
              <View className='flex-row items-center gap-2'>
                <Text className='text-sm'>Current status:</Text>
                {selectedStatus && <Tag label={selectedStatus.toUpperCase()} />}
              </View>
            </View>
          </View>
        </View>

        {/* E-commerce Example */}
        <View>
          <Text className='text-lg font-bold mb-4'>E-commerce Example</Text>
          <View className='space-y-4'>
            <View className='bg-card rounded-lg p-4 border border-border'>
              <View className='flex-row justify-between items-start mb-2'>
                <Text className='text-base font-medium'>Bluetooth Earbuds</Text>
                <Text className='text-lg font-bold'>$99.99</Text>
              </View>
              <Text className='text-sm text-muted-foreground mb-3'>
                High-quality wireless earbuds with noise cancellation
              </Text>
              <View className='flex-row flex-wrap gap-2'>
                <Tag label='BESTSELLER' size='big' />
                <Tag label='NEW' />
                <Tag label='FREE SHIPPING' />
              </View>
            </View>

            <View className='bg-card rounded-lg p-4 border border-border'>
              <View className='flex-row justify-between items-start mb-2'>
                <Text className='text-base font-medium'>Gaming Laptop</Text>
                <Text className='text-lg font-bold text-error'>$1,299.99</Text>
              </View>
              <Text className='text-sm text-muted-foreground mb-3'>
                High-performance laptop for gaming and creative work
              </Text>
              <View className='flex-row flex-wrap gap-2'>
                <Tag label='SALE' />
                <Tag label='LIMITED' size='big' />
                <Tag label='HOT' />
                <Tag label='PRO' />
              </View>
            </View>

            <View className='bg-card rounded-lg p-4 border border-border'>
              <View className='flex-row justify-between items-start mb-2'>
                <Text className='text-base font-medium'>Wireless Charger</Text>
                <Text className='text-lg font-bold'>$29.99</Text>
              </View>
              <Text className='text-sm text-muted-foreground mb-3'>
                Fast wireless charging pad for all compatible devices
              </Text>
              <View className='flex-row flex-wrap gap-2'>
                <Tag label='ECO FRIENDLY' size='big' />
                <Tag label='FAST CHARGE' />
              </View>
            </View>
          </View>
        </View>

        {/* Content Tags */}
        <View>
          <Text className='text-lg font-bold mb-4'>Content Tags</Text>
          <View className='bg-card rounded-lg p-4 border border-border space-y-4'>
            <View>
              <Text className='text-sm font-medium mb-3'>Blog Posts</Text>
              <View className='space-y-3'>
                <View className='p-3 bg-muted rounded'>
                  <Text className='font-medium mb-1'>Getting Started with React Native</Text>
                  <Text className='text-xs text-muted-foreground mb-2'>
                    Learn the basics of React Native development...
                  </Text>
                  <View className='flex-row flex-wrap gap-2'>
                    <Tag label='TUTORIAL' />
                    <Tag label='BEGINNER' />
                    <Tag label='REACT' />
                  </View>
                </View>
                
                <View className='p-3 bg-muted rounded'>
                  <Text className='font-medium mb-1'>Advanced TypeScript Patterns</Text>
                  <Text className='text-xs text-muted-foreground mb-2'>
                    Explore advanced TypeScript techniques...
                  </Text>
                  <View className='flex-row flex-wrap gap-2'>
                    <Tag label='ADVANCED' size='big' />
                    <Tag label='TYPESCRIPT' />
                    <Tag label='PATTERNS' />
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>

        {/* Different Tag Lengths */}
        <View>
          <Text className='text-lg font-bold mb-4'>Different Tag Lengths</Text>
          <View className='bg-card rounded-lg p-4 border border-border space-y-4'>
            <View>
              <Text className='text-sm font-medium mb-3'>Short Tags</Text>
              <View className='flex-row flex-wrap gap-2'>
                <Tag label='AI' />
                <Tag label='ML' />
                <Tag label='UI' />
                <Tag label='UX' />
                <Tag label='CSS' />
                <Tag label='JS' />
              </View>
            </View>
            
            <View>
              <Text className='text-sm font-medium mb-3'>Medium Tags</Text>
              <View className='flex-row flex-wrap gap-2'>
                <Tag label='REACT' />
                <Tag label='MOBILE' />
                <Tag label='BACKEND' />
                <Tag label='FRONTEND' />
                <Tag label='DATABASE' />
              </View>
            </View>
            
            <View>
              <Text className='text-sm font-medium mb-3'>Long Tags</Text>
              <View className='flex-row flex-wrap gap-2'>
                <Tag label='FULL STACK' size='big' />
                <Tag label='RESPONSIVE' size='big' />
                <Tag label='ACCESSIBILITY' size='big' />
                <Tag label='PERFORMANCE' size='big' />
              </View>
            </View>
          </View>
        </View>

        {/* Usage Guidelines */}
        <View>
          <Text className='text-lg font-bold mb-4'>Usage Guidelines</Text>
          <View className='bg-info-lighter rounded-lg p-4'>
            <Text className='text-sm font-medium mb-3'>When to use Tags:</Text>
            <View className='space-y-2'>
              <Text className='text-xs'>• Label and categorize content or items</Text>
              <Text className='text-xs'>• Indicate status or state of objects</Text>
              <Text className='text-xs'>• Highlight special properties or promotions</Text>
              <Text className='text-xs'>• Filter and organize information</Text>
              <Text className='text-xs'>• Show metadata about content</Text>
            </View>
            <Text className='text-sm font-medium mt-3 mb-2'>Best Practices:</Text>
            <View className='space-y-1'>
              <Text className='text-xs'>• Keep tag text short and descriptive</Text>
              <Text className='text-xs'>• Use consistent sizing within the same context</Text>
              <Text className='text-xs'>• Group related tags together</Text>
              <Text className='text-xs'>• Use big size for important or primary tags</Text>
              <Text className='text-xs'>• Consider tag hierarchy and visual weight</Text>
              <Text className='text-xs'>• Avoid using too many tags on a single item</Text>
            </View>
          </View>
        </View>

      </View>
    </ScrollView>
  );
}