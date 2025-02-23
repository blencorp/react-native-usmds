import { Meta, StoryObj } from '@storybook/react';
import { View } from 'react-native';
import { useState } from 'react';
import { Pagination } from './Pagination';

const meta = {
  title: 'Components/Pagination',
  component: Pagination,
  parameters: {
    layout: 'centered'
  }
} satisfies Meta<typeof Pagination>;

export default meta;

export const Default: StoryObj<typeof Pagination> = {
  render: () => {
    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = 10;
    const totalItems = 100;

    return (
      <View className='flex-1 items-center justify-end'>
        <Pagination currentPage={currentPage} totalPages={totalPages} totalItems={totalItems} onPageChange={setCurrentPage} />
      </View>
    );
  }
};
