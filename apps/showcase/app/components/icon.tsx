import { ScrollView, View } from 'react-native';
import { Icon } from '../../../storybook/components/Icon/Icon';
import { Text } from '../../../storybook/components/Text/Text';
import { iconPaths } from '../../../storybook/components/Icon/iconPaths';

export default function IconScreen() {
  // Common icon categories
  const navigationIcons = [
    'arrow_back', 'arrow_forward', 'arrow_upward', 'arrow_downward',
    'arrow_drop_up', 'arrow_drop_down', 'menu', 'close',
    'chevron_left', 'chevron_right', 'expand_more', 'expand_less',
    'first_page', 'last_page', 'navigate_before', 'navigate_next'
  ];

  const actionIcons = [
    'add', 'add_circle', 'remove', 'remove_circle',
    'edit', 'delete', 'save', 'done',
    'check', 'check_circle', 'cancel', 'clear',
    'refresh', 'autorenew', 'sync', 'cached'
  ];

  const communicationIcons = [
    'email', 'message', 'chat', 'forum',
    'phone', 'call', 'contacts', 'contact_mail',
    'notifications', 'notifications_active', 'announcement', 'feedback'
  ];

  const fileIcons = [
    'file_download', 'file_upload', 'cloud_download', 'cloud_upload',
    'attach_file', 'attachment', 'folder', 'folder_open',
    'insert_drive_file', 'description', 'content_copy', 'content_paste'
  ];

  const socialIcons = [
    'share', 'thumb_up', 'thumb_down', 'favorite',
    'favorite_border', 'bookmark', 'bookmark_border', 'star',
    'star_border', 'star_half', 'person', 'group'
  ];

  const statusIcons = [
    'info', 'error', 'warning', 'help',
    'check_circle', 'cancel', 'report_problem', 'new_releases',
    'security', 'verified_user', 'lock', 'lock_open'
  ];

  const mediaIcons = [
    'play_arrow', 'pause', 'stop', 'skip_next',
    'skip_previous', 'fast_forward', 'fast_rewind', 'volume_up',
    'volume_down', 'volume_off', 'mic', 'mic_off'
  ];

  const settingsIcons = [
    'settings', 'tune', 'build', 'extension',
    'account_circle', 'account_box', 'manage_accounts', 'admin_panel_settings',
    'visibility', 'visibility_off', 'language', 'palette'
  ];

  // Helper function to check if icon exists
  const iconExists = (name: string): boolean => {
    return name in iconPaths;
  };

  // Filter out icons that don't exist
  const filterExistingIcons = (icons: string[]) => {
    return icons.filter(iconExists);
  };

  return (
    <ScrollView className='flex-1 bg-background'>
      <View className='p-4 space-y-8 w-full mx-auto'>
        
        {/* Icon Sizes */}
        <View>
          <Text className='text-lg font-bold mb-4'>Icon Sizes</Text>
          <View className='bg-card rounded-lg p-4 border border-border'>
            <View className='flex-row items-end gap-4'>
              <View className='items-center'>
                <Icon name='accessibility_new' size={16} className='text-foreground' />
                <Text className='text-xs mt-2'>16px</Text>
              </View>
              <View className='items-center'>
                <Icon name='accessibility_new' size={20} className='text-foreground' />
                <Text className='text-xs mt-2'>20px</Text>
              </View>
              <View className='items-center'>
                <Icon name='accessibility_new' size={24} className='text-foreground' />
                <Text className='text-xs mt-2'>24px</Text>
              </View>
              <View className='items-center'>
                <Icon name='accessibility_new' size={32} className='text-foreground' />
                <Text className='text-xs mt-2'>32px</Text>
              </View>
              <View className='items-center'>
                <Icon name='accessibility_new' size={40} className='text-foreground' />
                <Text className='text-xs mt-2'>40px</Text>
              </View>
              <View className='items-center'>
                <Icon name='accessibility_new' size={48} className='text-foreground' />
                <Text className='text-xs mt-2'>48px</Text>
              </View>
            </View>
          </View>
        </View>

        {/* Icon Colors */}
        <View>
          <Text className='text-lg font-bold mb-4'>Icon Colors</Text>
          <View className='bg-card rounded-lg p-4 border border-border'>
            <View className='flex-row items-center gap-4'>
              <View className='items-center'>
                <Icon name='favorite' size={32} className='text-primary' />
                <Text className='text-xs mt-2'>Primary</Text>
              </View>
              <View className='items-center'>
                <Icon name='favorite' size={32} className='text-secondary' />
                <Text className='text-xs mt-2'>Secondary</Text>
              </View>
              <View className='items-center'>
                <Icon name='favorite' size={32} className='text-success' />
                <Text className='text-xs mt-2'>Success</Text>
              </View>
              <View className='items-center'>
                <Icon name='favorite' size={32} className='text-destructive' />
                <Text className='text-xs mt-2'>Error</Text>
              </View>
              <View className='items-center'>
                <Icon name='favorite' size={32} className='text-warning' />
                <Text className='text-xs mt-2'>Warning</Text>
              </View>
              <View className='items-center'>
                <Icon name='favorite' size={32} className='text-info' />
                <Text className='text-xs mt-2'>Info</Text>
              </View>
            </View>
          </View>
        </View>

        {/* Navigation Icons */}
        <View>
          <Text className='text-lg font-bold mb-4'>Navigation Icons</Text>
          <View className='bg-card rounded-lg p-4 border border-border'>
            <View className='flex-row flex-wrap gap-4'>
              {filterExistingIcons(navigationIcons).map((name) => (
                <View key={name} className='items-center w-20'>
                  <Icon name={name as keyof typeof iconPaths} size={24} className='text-foreground' />
                  <Text className='text-xs mt-2 text-center'>{name.replace(/_/g, ' ')}</Text>
                </View>
              ))}
            </View>
          </View>
        </View>

        {/* Action Icons */}
        <View>
          <Text className='text-lg font-bold mb-4'>Action Icons</Text>
          <View className='bg-card rounded-lg p-4 border border-border'>
            <View className='flex-row flex-wrap gap-4'>
              {filterExistingIcons(actionIcons).map((name) => (
                <View key={name} className='items-center w-20'>
                  <Icon name={name as keyof typeof iconPaths} size={24} className='text-foreground' />
                  <Text className='text-xs mt-2 text-center'>{name.replace(/_/g, ' ')}</Text>
                </View>
              ))}
            </View>
          </View>
        </View>

        {/* Communication Icons */}
        <View>
          <Text className='text-lg font-bold mb-4'>Communication Icons</Text>
          <View className='bg-card rounded-lg p-4 border border-border'>
            <View className='flex-row flex-wrap gap-4'>
              {filterExistingIcons(communicationIcons).map((name) => (
                <View key={name} className='items-center w-20'>
                  <Icon name={name as keyof typeof iconPaths} size={24} className='text-foreground' />
                  <Text className='text-xs mt-2 text-center'>{name.replace(/_/g, ' ')}</Text>
                </View>
              ))}
            </View>
          </View>
        </View>

        {/* File Icons */}
        <View>
          <Text className='text-lg font-bold mb-4'>File & Document Icons</Text>
          <View className='bg-card rounded-lg p-4 border border-border'>
            <View className='flex-row flex-wrap gap-4'>
              {filterExistingIcons(fileIcons).map((name) => (
                <View key={name} className='items-center w-20'>
                  <Icon name={name as keyof typeof iconPaths} size={24} className='text-foreground' />
                  <Text className='text-xs mt-2 text-center'>{name.replace(/_/g, ' ')}</Text>
                </View>
              ))}
            </View>
          </View>
        </View>

        {/* Social Icons */}
        <View>
          <Text className='text-lg font-bold mb-4'>Social & Rating Icons</Text>
          <View className='bg-card rounded-lg p-4 border border-border'>
            <View className='flex-row flex-wrap gap-4'>
              {filterExistingIcons(socialIcons).map((name) => (
                <View key={name} className='items-center w-20'>
                  <Icon name={name as keyof typeof iconPaths} size={24} className='text-foreground' />
                  <Text className='text-xs mt-2 text-center'>{name.replace(/_/g, ' ')}</Text>
                </View>
              ))}
            </View>
          </View>
        </View>

        {/* Status Icons */}
        <View>
          <Text className='text-lg font-bold mb-4'>Status & Alert Icons</Text>
          <View className='bg-card rounded-lg p-4 border border-border'>
            <View className='flex-row flex-wrap gap-4'>
              {filterExistingIcons(statusIcons).map((name) => (
                <View key={name} className='items-center w-20'>
                  <Icon name={name as keyof typeof iconPaths} size={24} className='text-foreground' />
                  <Text className='text-xs mt-2 text-center'>{name.replace(/_/g, ' ')}</Text>
                </View>
              ))}
            </View>
          </View>
        </View>

        {/* Media Icons */}
        <View>
          <Text className='text-lg font-bold mb-4'>Media Control Icons</Text>
          <View className='bg-card rounded-lg p-4 border border-border'>
            <View className='flex-row flex-wrap gap-4'>
              {filterExistingIcons(mediaIcons).map((name) => (
                <View key={name} className='items-center w-20'>
                  <Icon name={name as keyof typeof iconPaths} size={24} className='text-foreground' />
                  <Text className='text-xs mt-2 text-center'>{name.replace(/_/g, ' ')}</Text>
                </View>
              ))}
            </View>
          </View>
        </View>

        {/* Settings Icons */}
        <View>
          <Text className='text-lg font-bold mb-4'>Settings & Account Icons</Text>
          <View className='bg-card rounded-lg p-4 border border-border'>
            <View className='flex-row flex-wrap gap-4'>
              {filterExistingIcons(settingsIcons).map((name) => (
                <View key={name} className='items-center w-20'>
                  <Icon name={name as keyof typeof iconPaths} size={24} className='text-foreground' />
                  <Text className='text-xs mt-2 text-center'>{name.replace(/_/g, ' ')}</Text>
                </View>
              ))}
            </View>
          </View>
        </View>

        {/* Icon Usage Examples */}
        <View>
          <Text className='text-lg font-bold mb-4'>Usage Examples</Text>
          <View className='space-y-3'>
            {/* Icon with Button */}
            <View className='bg-card rounded-lg p-4 border border-border'>
              <Text className='text-sm font-medium mb-3'>Icons in Buttons</Text>
              <View className='flex-row gap-3'>
                <View className='bg-primary px-4 py-2 rounded-md flex-row items-center gap-2'>
                  <Icon name='add' size={16} className='text-white' />
                  <Text className='text-white text-sm'>Add Item</Text>
                </View>
                <View className='bg-destructive px-4 py-2 rounded-md flex-row items-center gap-2'>
                  <Icon name='delete' size={16} className='text-white' />
                  <Text className='text-white text-sm'>Delete</Text>
                </View>
              </View>
            </View>

            {/* Icon in List Item */}
            <View className='bg-card rounded-lg p-4 border border-border'>
              <Text className='text-sm font-medium mb-3'>Icons in List Items</Text>
              <View className='space-y-3'>
                <View className='flex-row items-center gap-3'>
                  <Icon name='email' size={20} className='text-muted-foreground' />
                  <Text className='text-sm flex-1'>john.doe@example.com</Text>
                </View>
                <View className='flex-row items-center gap-3'>
                  <Icon name='phone' size={20} className='text-muted-foreground' />
                  <Text className='text-sm flex-1'>+1 (555) 123-4567</Text>
                </View>
                <View className='flex-row items-center gap-3'>
                  <Icon name='location_on' size={20} className='text-muted-foreground' />
                  <Text className='text-sm flex-1'>New York, NY</Text>
                </View>
              </View>
            </View>

            {/* Status with Icons */}
            <View className='bg-card rounded-lg p-4 border border-border'>
              <Text className='text-sm font-medium mb-3'>Status Indicators</Text>
              <View className='space-y-3'>
                <View className='flex-row items-center gap-2'>
                  <Icon name='check_circle' size={20} className='text-success' />
                  <Text className='text-sm'>Operation completed successfully</Text>
                </View>
                <View className='flex-row items-center gap-2'>
                  <Icon name='error' size={20} className='text-destructive' />
                  <Text className='text-sm'>An error occurred</Text>
                </View>
                <View className='flex-row items-center gap-2'>
                  <Icon name='warning' size={20} className='text-warning' />
                  <Text className='text-sm'>Please review before proceeding</Text>
                </View>
                <View className='flex-row items-center gap-2'>
                  <Icon name='info' size={20} className='text-info' />
                  <Text className='text-sm'>Additional information available</Text>
                </View>
              </View>
            </View>
          </View>
        </View>

        {/* Complete Icon Gallery */}
        <View>
          <Text className='text-lg font-bold mb-4'>All Available Icons</Text>
          <View className='bg-muted/20 rounded-lg p-3 mb-4'>
            <Text className='text-sm text-muted-foreground'>
              Browse through all {Object.keys(iconPaths).length} available icons in the library
            </Text>
          </View>
          <View className='bg-card rounded-lg p-4 border border-border'>
            <View className='flex-row flex-wrap gap-3'>
              {Object.keys(iconPaths).slice(0, 50).map((name) => (
                <View key={name} className='items-center w-[72px] p-2'>
                  <View className='bg-muted/10 rounded-lg p-2 w-full items-center'>
                    <Icon name={name as keyof typeof iconPaths} size={24} className='text-foreground' />
                  </View>
                  <Text className='text-[10px] mt-1 text-center' numberOfLines={2}>
                    {name.replace(/_/g, ' ')}
                  </Text>
                </View>
              ))}
            </View>
            <View className='mt-4 p-3 bg-muted/10 rounded'>
              <Text className='text-xs text-center text-muted-foreground'>
                Showing first 50 icons. Total available: {Object.keys(iconPaths).length}
              </Text>
            </View>
          </View>
        </View>

        {/* Usage Guidelines */}
        <View>
          <Text className='text-lg font-bold mb-4'>Usage Guidelines</Text>
          <View className='bg-info-lighter rounded-lg p-4'>
            <Text className='text-sm font-medium mb-3'>Icon Best Practices:</Text>
            <View className='space-y-2'>
              <Text className='text-xs'>• Use consistent icon sizes throughout your app</Text>
              <Text className='text-xs'>• Ensure icons have sufficient contrast with backgrounds</Text>
              <Text className='text-xs'>• Pair icons with text labels for better accessibility</Text>
              <Text className='text-xs'>• Use semantic colors (success, error, warning) appropriately</Text>
              <Text className='text-xs'>• Keep icon style consistent (outlined vs filled)</Text>
            </View>
            <Text className='text-sm font-medium mt-3 mb-2'>Common Sizes:</Text>
            <View className='space-y-1'>
              <Text className='text-xs'>• 16px - Small inline icons</Text>
              <Text className='text-xs'>• 20px - Default for list items</Text>
              <Text className='text-xs'>• 24px - Standard size for buttons and actions</Text>
              <Text className='text-xs'>• 32px - Emphasized actions</Text>
              <Text className='text-xs'>• 48px - Large feature icons</Text>
            </View>
          </View>
        </View>

      </View>
    </ScrollView>
  );
}