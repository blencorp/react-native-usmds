import { ScrollView, View } from 'react-native';
import { ButtonGroup } from '../../../storybook/components/ButtonGroup/ButtonGroup';
import { Button } from '../../../storybook/components/Button/Button';
import { Text } from '../../../storybook/components/Text/Text';
import { ChevronLeft, ChevronRight, Save, X, Check, Download, Upload, Share } from 'lucide-react-native';

export default function ButtonGroupScreen() {
  return (
    <ScrollView className='flex-1 bg-background'>
      <View className='p-4 space-y-8 w-full mx-auto'>
        
        {/* Orientation Variants */}
        <View>
          <Text className='text-lg font-bold mb-4'>Orientation</Text>
          
          {/* Vertical */}
          <View className='mb-6'>
            <Text className='text-sm text-muted-foreground mb-2'>Vertical (Default)</Text>
            <View className='items-center'>
              <ButtonGroup orientation='vertical' gap={8}>
                <Button variant='default'>
                  <Text>Primary Action</Text>
                </Button>
                <Button variant='secondary'>
                  <Text>Secondary Action</Text>
                </Button>
                <Button variant='outline'>
                  <Text>Tertiary Action</Text>
                </Button>
              </ButtonGroup>
            </View>
          </View>

          {/* Horizontal */}
          <View>
            <Text className='text-sm text-muted-foreground mb-2'>Horizontal</Text>
            <View className='items-center'>
              <ButtonGroup orientation='horizontal' gap={8}>
                <Button variant='default'>
                  <Text>Left</Text>
                </Button>
                <Button variant='default'>
                  <Text>Center</Text>
                </Button>
                <Button variant='default'>
                  <Text>Right</Text>
                </Button>
              </ButtonGroup>
            </View>
          </View>
        </View>

        {/* Gap Variations */}
        <View>
          <Text className='text-lg font-bold mb-4'>Gap Variations</Text>
          
          {/* No Gap */}
          <View className='mb-4'>
            <Text className='text-sm text-muted-foreground mb-2'>No Gap (0)</Text>
            <View className='items-center'>
              <ButtonGroup orientation='horizontal' gap={0}>
                <Button variant='outline' className='rounded-r-none'>
                  <Text>First</Text>
                </Button>
                <Button variant='outline' className='rounded-none border-l-0'>
                  <Text>Second</Text>
                </Button>
                <Button variant='outline' className='rounded-l-none border-l-0'>
                  <Text>Third</Text>
                </Button>
              </ButtonGroup>
            </View>
          </View>

          {/* Small Gap */}
          <View className='mb-4'>
            <Text className='text-sm text-muted-foreground mb-2'>Small Gap (4)</Text>
            <View className='items-center'>
              <ButtonGroup orientation='horizontal' gap={4}>
                <Button variant='default'>
                  <Text>Option 1</Text>
                </Button>
                <Button variant='default'>
                  <Text>Option 2</Text>
                </Button>
                <Button variant='default'>
                  <Text>Option 3</Text>
                </Button>
              </ButtonGroup>
            </View>
          </View>

          {/* Default Gap */}
          <View className='mb-4'>
            <Text className='text-sm text-muted-foreground mb-2'>Default Gap (8)</Text>
            <View className='items-center'>
              <ButtonGroup orientation='horizontal' gap={8}>
                <Button variant='default'>
                  <Text>Option A</Text>
                </Button>
                <Button variant='default'>
                  <Text>Option B</Text>
                </Button>
                <Button variant='default'>
                  <Text>Option C</Text>
                </Button>
              </ButtonGroup>
            </View>
          </View>

          {/* Large Gap */}
          <View>
            <Text className='text-sm text-muted-foreground mb-2'>Large Gap (16)</Text>
            <View className='items-center'>
              <ButtonGroup orientation='horizontal' gap={16}>
                <Button variant='default'>
                  <Text>Item 1</Text>
                </Button>
                <Button variant='default'>
                  <Text>Item 2</Text>
                </Button>
                <Button variant='default'>
                  <Text>Item 3</Text>
                </Button>
              </ButtonGroup>
            </View>
          </View>
        </View>

        {/* Mixed Variants */}
        <View>
          <Text className='text-lg font-bold mb-4'>Mixed Button Variants</Text>
          <View className='items-center'>
            <ButtonGroup orientation='vertical' gap={8}>
              <Button variant='default'>
                <Text>Primary Action</Text>
              </Button>
              <Button variant='secondary'>
                <Text>Secondary Action</Text>
              </Button>
              <Button variant='outline'>
                <Text>Outline Action</Text>
              </Button>
              <Button variant='ghost'>
                <Text>Ghost Action</Text>
              </Button>
              <Button variant='link'>
                <Text>Link Action</Text>
              </Button>
            </ButtonGroup>
          </View>
        </View>

        {/* With Icons */}
        <View>
          <Text className='text-lg font-bold mb-4'>With Icons</Text>
          
          {/* Navigation */}
          <View className='mb-4'>
            <Text className='text-sm text-muted-foreground mb-2'>Navigation</Text>
            <View className='items-center'>
              <ButtonGroup orientation='horizontal' gap={8}>
                <Button variant='outline' startIcon={<ChevronLeft size={16} color='#000' />}>
                  <Text>Back</Text>
                </Button>
                <Button variant='default' endIcon={<ChevronRight size={16} color='#fff' />}>
                  <Text>Next</Text>
                </Button>
              </ButtonGroup>
            </View>
          </View>

          {/* Actions */}
          <View>
            <Text className='text-sm text-muted-foreground mb-2'>Actions</Text>
            <View className='items-center'>
              <ButtonGroup orientation='horizontal' gap={8}>
                <Button variant='default' startIcon={<Save size={16} color='#fff' />}>
                  <Text>Save</Text>
                </Button>
                <Button variant='outline' startIcon={<X size={16} color='#000' />}>
                  <Text>Cancel</Text>
                </Button>
              </ButtonGroup>
            </View>
          </View>
        </View>

        {/* Common Use Cases */}
        <View>
          <Text className='text-lg font-bold mb-4'>Common Use Cases</Text>
          
          {/* Dialog Actions */}
          <View className='mb-6'>
            <Text className='text-sm text-muted-foreground mb-2'>Dialog Actions</Text>
            <View className='bg-card rounded-lg p-4'>
              <Text className='text-base font-medium mb-2'>Delete Item?</Text>
              <Text className='text-sm text-muted-foreground mb-4'>
                This action cannot be undone. Are you sure you want to continue?
              </Text>
              <ButtonGroup orientation='horizontal' gap={8}>
                <Button variant='outline' className='flex-1'>
                  <Text>Cancel</Text>
                </Button>
                <Button variant='destructive' className='flex-1'>
                  <Text>Delete</Text>
                </Button>
              </ButtonGroup>
            </View>
          </View>

          {/* Form Actions */}
          <View className='mb-6'>
            <Text className='text-sm text-muted-foreground mb-2'>Form Actions</Text>
            <View className='bg-card rounded-lg p-4'>
              <ButtonGroup orientation='vertical' gap={8}>
                <Button variant='default' className='w-full'>
                  <Text>Submit</Text>
                </Button>
                <Button variant='secondary' className='w-full'>
                  <Text>Save Draft</Text>
                </Button>
                <Button variant='ghost' className='w-full'>
                  <Text>Cancel</Text>
                </Button>
              </ButtonGroup>
            </View>
          </View>

          {/* Pagination */}
          <View className='mb-6'>
            <Text className='text-sm text-muted-foreground mb-2'>Pagination</Text>
            <View className='items-center'>
              <ButtonGroup orientation='horizontal' gap={4}>
                <Button variant='outline' size='sm'>
                  <Text>Previous</Text>
                </Button>
                <Button variant='outline' size='sm'>
                  <Text>1</Text>
                </Button>
                <Button variant='default' size='sm'>
                  <Text>2</Text>
                </Button>
                <Button variant='outline' size='sm'>
                  <Text>3</Text>
                </Button>
                <Button variant='outline' size='sm'>
                  <Text>Next</Text>
                </Button>
              </ButtonGroup>
            </View>
          </View>

          {/* Toolbar */}
          <View className='mb-6'>
            <Text className='text-sm text-muted-foreground mb-2'>Toolbar</Text>
            <View className='items-center'>
              <ButtonGroup orientation='horizontal' gap={2}>
                <Button variant='ghost' size='icon'>
                  <Download size={20} color='#000' />
                </Button>
                <Button variant='ghost' size='icon'>
                  <Upload size={20} color='#000' />
                </Button>
                <Button variant='ghost' size='icon'>
                  <Share size={20} color='#000' />
                </Button>
              </ButtonGroup>
            </View>
          </View>
        </View>

        {/* Nested Groups */}
        <View>
          <Text className='text-lg font-bold mb-4'>Nested Groups</Text>
          <View className='items-center'>
            <ButtonGroup orientation='vertical' gap={8}>
              <Button variant='default' className='w-[300px]'>
                <Text>Primary Action</Text>
              </Button>
              <ButtonGroup orientation='horizontal' gap={8}>
                <Button variant='secondary' className='flex-1'>
                  <Text>Option A</Text>
                </Button>
                <Button variant='secondary' className='flex-1'>
                  <Text>Option B</Text>
                </Button>
              </ButtonGroup>
              <Button variant='outline' className='w-[300px]'>
                <Text>Alternative Action</Text>
              </Button>
            </ButtonGroup>
          </View>
        </View>

        {/* Different Sizes */}
        <View>
          <Text className='text-lg font-bold mb-4'>Different Sizes</Text>
          <View className='items-center'>
            <ButtonGroup orientation='vertical' gap={8}>
              <Button variant='default' size='big'>
                <Text>Big Button</Text>
              </Button>
              <Button variant='default' size='lg'>
                <Text>Large Button</Text>
              </Button>
              <Button variant='default' size='default'>
                <Text>Default Button</Text>
              </Button>
              <Button variant='default' size='sm'>
                <Text>Small Button</Text>
              </Button>
            </ButtonGroup>
          </View>
        </View>

        {/* Responsive Layout */}
        <View>
          <Text className='text-lg font-bold mb-4'>Responsive Layout</Text>
          <View className='space-y-4'>
            {/* Full Width */}
            <View>
              <Text className='text-sm text-muted-foreground mb-2'>Full Width</Text>
              <ButtonGroup orientation='vertical' gap={8}>
                <Button variant='default' className='w-full'>
                  <Text>Full Width Button 1</Text>
                </Button>
                <Button variant='secondary' className='w-full'>
                  <Text>Full Width Button 2</Text>
                </Button>
              </ButtonGroup>
            </View>

            {/* Split Layout */}
            <View>
              <Text className='text-sm text-muted-foreground mb-2'>Split Layout</Text>
              <ButtonGroup orientation='horizontal' gap={8}>
                <Button variant='default' className='flex-1'>
                  <Text>Left</Text>
                </Button>
                <Button variant='secondary' className='flex-1'>
                  <Text>Right</Text>
                </Button>
              </ButtonGroup>
            </View>
          </View>
        </View>

      </View>
    </ScrollView>
  );
}