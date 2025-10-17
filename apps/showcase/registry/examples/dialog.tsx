'use client';

import { Button } from '@registry/usa/components/ui/button';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from '@registry/usa/components/ui/dialog';
import { Text } from '@registry/usa/components/ui/text';
import { Label } from '@registry/usa/components/ui/label';
import { View } from 'react-native';
import { TextInput } from '@registry/usa/components/ui/textinput';

export function DialogPreview() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant='outline'>
          <Text>Open Dialog</Text>
        </Button>
      </DialogTrigger>
      <DialogContent className='sm:max-w-[425px]'>
        <DialogHeader>
          <DialogTitle>Edit profile</DialogTitle>
          <DialogDescription>Make changes to your profile here. Click save when you&apos;re done.</DialogDescription>
        </DialogHeader>
        <View className='grid gap-4'>
          <View className='grid gap-3'>
            <Label htmlFor='name-1'>Name</Label>
            <TextInput id='name-1' defaultValue='Pedro Duarte' />
          </View>
          <View className='grid gap-3'>
            <Label htmlFor='username-1'>Username</Label>
            <TextInput id='username-1' defaultValue='@peduarte' />
          </View>
        </View>
        <DialogFooter>
          <DialogClose asChild>
            <Button variant='outline'>
              <Text>Cancel</Text>
            </Button>
          </DialogClose>
          <Button>
            <Text>Save changes</Text>
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
