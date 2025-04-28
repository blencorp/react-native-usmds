import { Text, View } from 'react-native';
import { Button } from '../Button/Button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from './Dialog';

export default {
  title: 'components/Dialog',
  component: Dialog,
};

export const Default = {
  render: () => (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">
          <Text>Open Dialog</Text>
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Example Dialog</DialogTitle>
          <DialogDescription>
            This is a simple dialog that demonstrates the basic functionality.
          </DialogDescription>
        </DialogHeader>
        <View className="py-4">
          <Text className="text-base text-foreground">
            Dialogs are great for displaying important information or getting user confirmation.
          </Text>
        </View>
        <DialogFooter>
          <DialogClose asChild>
            <Button variant="outline">
              <Text>Cancel</Text>
            </Button>
          </DialogClose>
          <DialogClose asChild>
            <Button variant="default">
              <Text className="text-white">Continue</Text>
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  ),
};

export const WithForm = {
  render: () => (
    <Dialog>
      <DialogTrigger asChild>
        <Button>
          <Text>Edit Profile</Text>
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Edit Profile</DialogTitle>
          <DialogDescription>Make changes to your profile here.</DialogDescription>
        </DialogHeader>
        <View className="gap-4 py-4">
          <View className="gap-2">
            <Text className="text-sm font-medium text-foreground">Name</Text>
            <View className="h-10 rounded-md border border-border bg-transparent px-3 py-2">
              <Text>John Doe</Text>
            </View>
          </View>
          <View className="gap-2">
            <Text className="text-sm font-medium text-foreground">Email</Text>
            <View className="h-10 rounded-md border border-border bg-transparent px-3 py-2">
              <Text>john@example.com</Text>
            </View>
          </View>
        </View>
        <DialogFooter>
          <DialogClose asChild>
            <Button variant="outline">
              <Text>Cancel</Text>
            </Button>
          </DialogClose>
          <Button>
            <Text>Save Changes</Text>
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  ),
};

export const Destructive = {
  render: () => (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="destructive">
          <Text>Delete Account</Text>
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Delete Account</DialogTitle>
          <DialogDescription>
            Are you sure you want to delete your account? This action cannot be undone.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <DialogClose asChild>
            <Button variant="outline">
              <Text>Cancel</Text>
            </Button>
          </DialogClose>
          <Button variant="destructive">
            <Text>Delete</Text>
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  ),
};

export const CustomContent = {
  render: () => (
    <Dialog>
      <DialogTrigger asChild>
        <Button>
          <Text>Show Details</Text>
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Custom Content</DialogTitle>
        </DialogHeader>
        <View className="flex-row items-center gap-4 py-4">
          <View className="h-16 w-16 rounded-full bg-primary" />
          <View className="flex-1 gap-1">
            <Text className="text-base font-medium text-foreground">Custom Dialog</Text>
            <Text className="text-sm text-muted-foreground">
              This dialog shows how you can customize the content and layout.
            </Text>
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
  ),
}; 