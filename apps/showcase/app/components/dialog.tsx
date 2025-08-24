import { ScrollView, View } from 'react-native';
import { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from '../../../storybook/components/Dialog/Dialog';
import { Button } from '../../../storybook/components/Button/Button';
import { Text } from '../../../storybook/components/Text/Text';
import { AlertCircle, Trash2, Save, UserPlus, Download, Share2, Settings, Info, HelpCircle } from 'lucide-react-native';

export default function DialogScreen() {
  // Form states
  const [name, setName] = useState('John Doe');
  const [email, setEmail] = useState('john@example.com');
  const [bio, setBio] = useState('Software developer passionate about React Native');

  return (
    <ScrollView className='flex-1 bg-background'>
      <View className='p-4 space-y-8 w-full mx-auto'>
        
        {/* Basic Dialogs */}
        <View>
          <Text className='text-lg font-bold mb-4'>Basic Dialogs</Text>
          <View className='space-y-3'>
            {/* Simple Dialog */}
            <Dialog>
              <DialogTrigger asChild>
                <Button variant='outline'>
                  <Text>Simple Dialog</Text>
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Welcome!</DialogTitle>
                  <DialogDescription>
                    This is a simple dialog with basic content and actions.
                  </DialogDescription>
                </DialogHeader>
                <View className='py-4'>
                  <Text className='text-base text-foreground'>
                    Dialogs are modal windows that appear on top of the main content. They require user interaction before returning to the main application.
                  </Text>
                </View>
                <DialogFooter>
                  <DialogClose asChild>
                    <Button variant='outline'>
                      <Text>Got it</Text>
                    </Button>
                  </DialogClose>
                </DialogFooter>
              </DialogContent>
            </Dialog>

            {/* Confirmation Dialog */}
            <Dialog>
              <DialogTrigger asChild>
                <Button variant='secondary'>
                  <Text>Confirmation Dialog</Text>
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Confirm Action</DialogTitle>
                  <DialogDescription>
                    Are you sure you want to proceed with this action?
                  </DialogDescription>
                </DialogHeader>
                <DialogFooter>
                  <DialogClose asChild>
                    <Button variant='outline'>
                      <Text>Cancel</Text>
                    </Button>
                  </DialogClose>
                  <DialogClose asChild>
                    <Button>
                      <Text>Confirm</Text>
                    </Button>
                  </DialogClose>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </View>
        </View>

        {/* Destructive Actions */}
        <View>
          <Text className='text-lg font-bold mb-4'>Destructive Actions</Text>
          <View className='space-y-3'>
            {/* Delete Item */}
            <Dialog>
              <DialogTrigger asChild>
                <Button variant='destructive'>
                  <View className='flex-row items-center gap-2'>
                    <Trash2 size={16} color='#fff' />
                    <Text>Delete Item</Text>
                  </View>
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Delete Item</DialogTitle>
                  <DialogDescription>
                    This will permanently delete the selected item. This action cannot be undone.
                  </DialogDescription>
                </DialogHeader>
                <View className='py-4'>
                  <View className='bg-destructive/10 rounded-lg p-3 flex-row items-start gap-2'>
                    <AlertCircle size={16} className='text-destructive mt-0.5' />
                    <Text className='text-sm text-destructive flex-1'>
                      Warning: All associated data will be permanently removed from our servers.
                    </Text>
                  </View>
                </View>
                <DialogFooter>
                  <DialogClose asChild>
                    <Button variant='outline'>
                      <Text>Cancel</Text>
                    </Button>
                  </DialogClose>
                  <Button variant='destructive'>
                    <Text>Delete Permanently</Text>
                  </Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>

            {/* Account Deletion */}
            <Dialog>
              <DialogTrigger asChild>
                <Button variant='outline' className='border-destructive'>
                  <Text className='text-destructive'>Delete Account</Text>
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Delete Your Account?</DialogTitle>
                  <DialogDescription>
                    This will permanently delete your account and all associated data.
                  </DialogDescription>
                </DialogHeader>
                <View className='py-4 space-y-3'>
                  <Text className='text-sm font-medium'>You will lose access to:</Text>
                  <View className='space-y-2'>
                    <Text className='text-sm text-muted-foreground'>• All your projects and files</Text>
                    <Text className='text-sm text-muted-foreground'>• Your subscription and billing history</Text>
                    <Text className='text-sm text-muted-foreground'>• Team memberships and collaborations</Text>
                    <Text className='text-sm text-muted-foreground'>• Account settings and preferences</Text>
                  </View>
                </View>
                <DialogFooter>
                  <DialogClose asChild>
                    <Button variant='outline'>
                      <Text>Keep Account</Text>
                    </Button>
                  </DialogClose>
                  <Button variant='destructive'>
                    <Text>Delete Account</Text>
                  </Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </View>
        </View>

        {/* Forms in Dialogs */}
        <View>
          <Text className='text-lg font-bold mb-4'>Form Dialogs</Text>
          <View className='space-y-3'>
            {/* Edit Profile */}
            <Dialog>
              <DialogTrigger asChild>
                <Button>
                  <Text>Edit Profile</Text>
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Edit Profile</DialogTitle>
                  <DialogDescription>
                    Update your profile information below.
                  </DialogDescription>
                </DialogHeader>
                <View className='gap-4 py-4'>
                  <View className='gap-2'>
                    <Text className='text-sm font-medium text-foreground'>Name</Text>
                    <View className='h-10 rounded-md border border-border bg-background px-3 py-2'>
                      <Text className='text-sm'>{name}</Text>
                    </View>
                  </View>
                  <View className='gap-2'>
                    <Text className='text-sm font-medium text-foreground'>Email</Text>
                    <View className='h-10 rounded-md border border-border bg-background px-3 py-2'>
                      <Text className='text-sm'>{email}</Text>
                    </View>
                  </View>
                  <View className='gap-2'>
                    <Text className='text-sm font-medium text-foreground'>Bio</Text>
                    <View className='min-h-[80px] rounded-md border border-border bg-background px-3 py-2'>
                      <Text className='text-sm'>{bio}</Text>
                    </View>
                  </View>
                </View>
                <DialogFooter>
                  <DialogClose asChild>
                    <Button variant='outline'>
                      <Text>Cancel</Text>
                    </Button>
                  </DialogClose>
                  <Button>
                    <View className='flex-row items-center gap-2'>
                      <Save size={16} color='#fff' />
                      <Text>Save Changes</Text>
                    </View>
                  </Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>

            {/* Add Team Member */}
            <Dialog>
              <DialogTrigger asChild>
                <Button variant='secondary'>
                  <View className='flex-row items-center gap-2'>
                    <UserPlus size={16} color='#000' />
                    <Text>Add Member</Text>
                  </View>
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Add Team Member</DialogTitle>
                  <DialogDescription>
                    Invite a new member to join your team.
                  </DialogDescription>
                </DialogHeader>
                <View className='gap-4 py-4'>
                  <View className='gap-2'>
                    <Text className='text-sm font-medium text-foreground'>Email Address</Text>
                    <View className='h-10 rounded-md border border-border bg-background px-3 py-2'>
                      <Text className='text-sm text-muted-foreground'>Enter email...</Text>
                    </View>
                  </View>
                  <View className='gap-2'>
                    <Text className='text-sm font-medium text-foreground'>Role</Text>
                    <View className='h-10 rounded-md border border-border bg-background px-3 py-2 flex-row justify-between items-center'>
                      <Text className='text-sm'>Select role...</Text>
                      <Text className='text-xs text-muted-foreground'>▼</Text>
                    </View>
                  </View>
                  <View className='gap-2'>
                    <Text className='text-sm font-medium text-foreground'>Message (Optional)</Text>
                    <View className='min-h-[60px] rounded-md border border-border bg-background px-3 py-2'>
                      <Text className='text-sm text-muted-foreground'>Add a personal message...</Text>
                    </View>
                  </View>
                </View>
                <DialogFooter>
                  <DialogClose asChild>
                    <Button variant='outline'>
                      <Text>Cancel</Text>
                    </Button>
                  </DialogClose>
                  <Button>
                    <Text>Send Invitation</Text>
                  </Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </View>
        </View>

        {/* Information Dialogs */}
        <View>
          <Text className='text-lg font-bold mb-4'>Information Dialogs</Text>
          <View className='space-y-3'>
            {/* Success Message */}
            <Dialog>
              <DialogTrigger asChild>
                <Button variant='outline' className='border-success'>
                  <Text className='text-success'>Success Dialog</Text>
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Success!</DialogTitle>
                  <DialogDescription>
                    Your operation completed successfully.
                  </DialogDescription>
                </DialogHeader>
                <View className='py-4'>
                  <View className='bg-success/10 rounded-lg p-4'>
                    <Text className='text-sm text-success font-medium mb-2'>✓ All changes saved</Text>
                    <Text className='text-xs text-muted-foreground'>
                      Your data has been successfully updated and synchronized across all devices.
                    </Text>
                  </View>
                </View>
                <DialogFooter>
                  <DialogClose asChild>
                    <Button variant='outline'>
                      <Text>Close</Text>
                    </Button>
                  </DialogClose>
                </DialogFooter>
              </DialogContent>
            </Dialog>

            {/* Help Dialog */}
            <Dialog>
              <DialogTrigger asChild>
                <Button variant='ghost'>
                  <View className='flex-row items-center gap-2'>
                    <HelpCircle size={16} color='#666' />
                    <Text>Help</Text>
                  </View>
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Need Help?</DialogTitle>
                  <DialogDescription>
                    Here are some resources to get you started.
                  </DialogDescription>
                </DialogHeader>
                <View className='py-4 space-y-3'>
                  <View className='flex-row items-start gap-3'>
                    <View className='w-8 h-8 bg-primary/10 rounded-full items-center justify-center'>
                      <Text className='text-xs font-bold text-primary'>1</Text>
                    </View>
                    <View className='flex-1'>
                      <Text className='text-sm font-medium'>Getting Started Guide</Text>
                      <Text className='text-xs text-muted-foreground'>Learn the basics in 5 minutes</Text>
                    </View>
                  </View>
                  <View className='flex-row items-start gap-3'>
                    <View className='w-8 h-8 bg-primary/10 rounded-full items-center justify-center'>
                      <Text className='text-xs font-bold text-primary'>2</Text>
                    </View>
                    <View className='flex-1'>
                      <Text className='text-sm font-medium'>Video Tutorials</Text>
                      <Text className='text-xs text-muted-foreground'>Watch step-by-step walkthroughs</Text>
                    </View>
                  </View>
                  <View className='flex-row items-start gap-3'>
                    <View className='w-8 h-8 bg-primary/10 rounded-full items-center justify-center'>
                      <Text className='text-xs font-bold text-primary'>3</Text>
                    </View>
                    <View className='flex-1'>
                      <Text className='text-sm font-medium'>Contact Support</Text>
                      <Text className='text-xs text-muted-foreground'>Get help from our team</Text>
                    </View>
                  </View>
                </View>
                <DialogFooter>
                  <DialogClose asChild>
                    <Button>
                      <Text>Got it</Text>
                    </Button>
                  </DialogClose>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </View>
        </View>

        {/* Feature Dialogs */}
        <View>
          <Text className='text-lg font-bold mb-4'>Feature Dialogs</Text>
          <View className='space-y-3'>
            {/* Export Options */}
            <Dialog>
              <DialogTrigger asChild>
                <Button variant='secondary'>
                  <View className='flex-row items-center gap-2'>
                    <Download size={16} color='#000' />
                    <Text>Export Data</Text>
                  </View>
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Export Your Data</DialogTitle>
                  <DialogDescription>
                    Choose your preferred export format.
                  </DialogDescription>
                </DialogHeader>
                <View className='py-4 space-y-3'>
                  <Button variant='outline' className='w-full justify-start'>
                    <View className='flex-row items-center gap-3'>
                      <View className='w-8 h-8 bg-muted rounded items-center justify-center'>
                        <Text className='text-xs font-bold'>CSV</Text>
                      </View>
                      <View className='flex-1'>
                        <Text className='text-sm font-medium'>Comma-Separated Values</Text>
                        <Text className='text-xs text-muted-foreground'>Best for spreadsheets</Text>
                      </View>
                    </View>
                  </Button>
                  <Button variant='outline' className='w-full justify-start'>
                    <View className='flex-row items-center gap-3'>
                      <View className='w-8 h-8 bg-muted rounded items-center justify-center'>
                        <Text className='text-xs font-bold'>JSON</Text>
                      </View>
                      <View className='flex-1'>
                        <Text className='text-sm font-medium'>JavaScript Object Notation</Text>
                        <Text className='text-xs text-muted-foreground'>Best for developers</Text>
                      </View>
                    </View>
                  </Button>
                  <Button variant='outline' className='w-full justify-start'>
                    <View className='flex-row items-center gap-3'>
                      <View className='w-8 h-8 bg-muted rounded items-center justify-center'>
                        <Text className='text-xs font-bold'>PDF</Text>
                      </View>
                      <View className='flex-1'>
                        <Text className='text-sm font-medium'>Portable Document Format</Text>
                        <Text className='text-xs text-muted-foreground'>Best for printing</Text>
                      </View>
                    </View>
                  </Button>
                </View>
                <DialogFooter>
                  <DialogClose asChild>
                    <Button variant='outline'>
                      <Text>Cancel</Text>
                    </Button>
                  </DialogClose>
                </DialogFooter>
              </DialogContent>
            </Dialog>

            {/* Share Dialog */}
            <Dialog>
              <DialogTrigger asChild>
                <Button>
                  <View className='flex-row items-center gap-2'>
                    <Share2 size={16} color='#fff' />
                    <Text>Share</Text>
                  </View>
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Share Document</DialogTitle>
                  <DialogDescription>
                    Share this document with others.
                  </DialogDescription>
                </DialogHeader>
                <View className='py-4 space-y-4'>
                  <View className='gap-2'>
                    <Text className='text-sm font-medium'>Share with</Text>
                    <View className='h-10 rounded-md border border-border bg-background px-3 py-2'>
                      <Text className='text-sm text-muted-foreground'>Enter email addresses...</Text>
                    </View>
                  </View>
                  <View className='gap-2'>
                    <Text className='text-sm font-medium'>Permission</Text>
                    <View className='flex-row gap-2'>
                      <Button variant='outline' size='sm' className='flex-1'>
                        <Text className='text-xs'>View only</Text>
                      </Button>
                      <Button variant='secondary' size='sm' className='flex-1'>
                        <Text className='text-xs'>Can edit</Text>
                      </Button>
                      <Button variant='outline' size='sm' className='flex-1'>
                        <Text className='text-xs'>Can comment</Text>
                      </Button>
                    </View>
                  </View>
                  <View className='bg-muted/20 rounded-lg p-3'>
                    <Text className='text-xs text-muted-foreground'>
                      Anyone with the link can view this document
                    </Text>
                  </View>
                </View>
                <DialogFooter>
                  <DialogClose asChild>
                    <Button variant='outline'>
                      <Text>Cancel</Text>
                    </Button>
                  </DialogClose>
                  <Button>
                    <Text>Send Invite</Text>
                  </Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </View>
        </View>

        {/* Custom Content */}
        <View>
          <Text className='text-lg font-bold mb-4'>Custom Content</Text>
          <View className='space-y-3'>
            {/* Image Preview */}
            <Dialog>
              <DialogTrigger asChild>
                <Button variant='outline'>
                  <Text>Image Preview</Text>
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Image Details</DialogTitle>
                </DialogHeader>
                <View className='py-4'>
                  <View className='h-48 bg-muted rounded-lg items-center justify-center'>
                    <Text className='text-muted-foreground'>Image Preview Area</Text>
                  </View>
                  <View className='mt-4 space-y-2'>
                    <View className='flex-row justify-between'>
                      <Text className='text-sm text-muted-foreground'>Filename:</Text>
                      <Text className='text-sm font-medium'>photo_2024.jpg</Text>
                    </View>
                    <View className='flex-row justify-between'>
                      <Text className='text-sm text-muted-foreground'>Size:</Text>
                      <Text className='text-sm font-medium'>2.4 MB</Text>
                    </View>
                    <View className='flex-row justify-between'>
                      <Text className='text-sm text-muted-foreground'>Dimensions:</Text>
                      <Text className='text-sm font-medium'>1920 x 1080</Text>
                    </View>
                  </View>
                </View>
                <DialogFooter>
                  <DialogClose asChild>
                    <Button variant='outline'>
                      <Text>Close</Text>
                    </Button>
                  </DialogClose>
                  <Button>
                    <Text>Download</Text>
                  </Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>

            {/* Settings Dialog */}
            <Dialog>
              <DialogTrigger asChild>
                <Button variant='secondary'>
                  <View className='flex-row items-center gap-2'>
                    <Settings size={16} color='#000' />
                    <Text>Settings</Text>
                  </View>
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Settings</DialogTitle>
                  <DialogDescription>
                    Customize your app experience.
                  </DialogDescription>
                </DialogHeader>
                <View className='py-4 space-y-4'>
                  <View className='flex-row justify-between items-center'>
                    <View className='flex-1'>
                      <Text className='text-sm font-medium'>Dark Mode</Text>
                      <Text className='text-xs text-muted-foreground'>Use dark theme</Text>
                    </View>
                    <View className='w-12 h-6 bg-primary rounded-full items-end pr-1 justify-center'>
                      <View className='w-5 h-5 bg-white rounded-full' />
                    </View>
                  </View>
                  <View className='flex-row justify-between items-center'>
                    <View className='flex-1'>
                      <Text className='text-sm font-medium'>Notifications</Text>
                      <Text className='text-xs text-muted-foreground'>Receive push notifications</Text>
                    </View>
                    <View className='w-12 h-6 bg-muted rounded-full items-start pl-1 justify-center'>
                      <View className='w-5 h-5 bg-white rounded-full border border-border' />
                    </View>
                  </View>
                  <View className='flex-row justify-between items-center'>
                    <View className='flex-1'>
                      <Text className='text-sm font-medium'>Auto-save</Text>
                      <Text className='text-xs text-muted-foreground'>Save changes automatically</Text>
                    </View>
                    <View className='w-12 h-6 bg-primary rounded-full items-end pr-1 justify-center'>
                      <View className='w-5 h-5 bg-white rounded-full' />
                    </View>
                  </View>
                </View>
                <DialogFooter>
                  <DialogClose asChild>
                    <Button>
                      <Text>Save Settings</Text>
                    </Button>
                  </DialogClose>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </View>
        </View>

        {/* Usage Guidelines */}
        <View>
          <Text className='text-lg font-bold mb-4'>Usage Guidelines</Text>
          <View className='bg-info-lighter rounded-lg p-4'>
            <Text className='text-sm font-medium mb-3'>When to use Dialog:</Text>
            <View className='space-y-2'>
              <Text className='text-xs'>• Requiring user confirmation for critical actions</Text>
              <Text className='text-xs'>• Collecting user input through forms</Text>
              <Text className='text-xs'>• Displaying important information that needs attention</Text>
              <Text className='text-xs'>• Presenting options that require a decision</Text>
              <Text className='text-xs'>• Showing detailed information in a focused view</Text>
            </View>
            <Text className='text-sm font-medium mt-3 mb-2'>Best Practices:</Text>
            <View className='space-y-1'>
              <Text className='text-xs'>• Keep dialog content concise and focused</Text>
              <Text className='text-xs'>• Provide clear action buttons</Text>
              <Text className='text-xs'>• Include a way to dismiss the dialog</Text>
              <Text className='text-xs'>• Use appropriate dialog types for different actions</Text>
              <Text className='text-xs'>• Ensure dialogs are accessible with proper focus management</Text>
            </View>
          </View>
        </View>

      </View>
    </ScrollView>
  );
}