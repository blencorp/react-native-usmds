import { Meta, StoryObj } from '@storybook/react';
import { View } from 'react-native';
import { Link } from './Link';

const meta = {
  title: 'Components/Link',
  component: Link,
  parameters: {
    layout: 'centered'
  }
} satisfies Meta<typeof Link>;

export default meta;

export const Default: StoryObj<typeof Link> = {
  render: () => (
    <View className='flex-1 items-start justify-center gap-5 p-10 w-[278px]'>
      {/* Regular Links */}
      <Link href='#' label='Link' />
      <Link href='#' label='Link' focus />
      <Link href='#' label='Link' visited />

      {/* External Links */}
      <Link href='#' label='External link' external />
      <Link href='#' label='External link' external focus />
      <Link href='#' label='External link' external visited />

      {/* Dark Background Links */}
      <View className='bg-base-darker p-4 w-full'>
        <Link href='#' label='Link - dark background' variant='dark-background' />
        <Link href='#' label='Link - dark background' variant='dark-background' focus />
        <Link href='#' label='Link - dark background' variant='dark-background' external />
        <Link href='#' label='Link - dark background' variant='dark-background' external focus />
      </View>
    </View>
  )
};
