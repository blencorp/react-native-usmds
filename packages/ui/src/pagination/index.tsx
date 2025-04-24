import { ComponentPropsWithoutRef, forwardRef } from 'react';
import { View, Text, Pressable } from 'react-native';
import { cn } from '@/lib/utils';
import { Icon } from '../icon';

interface PaginationProps extends ComponentPropsWithoutRef<typeof View> {
  currentPage: number;
  totalPages: number;
  totalItems: number;
  onPageChange: (page: number) => void;
  className?: string;
}

const PaginationButton = forwardRef<View, ComponentPropsWithoutRef<typeof Pressable> & { active?: boolean }>(
  ({ children, active, disabled, className, ...props }, ref) => {
    return (
      <Pressable
        ref={ref}
        className={cn(
          'w-[50px] h-[50px] rounded justify-center items-center',
          active ? 'bg-primary' : disabled ? 'bg-disabled' : 'bg-primary',
          className
        )}
        disabled={disabled}
        accessible={true}
        {...props}
      >
        {children}
      </Pressable>
    );
  }
);

const Pagination = ({ currentPage, totalPages, totalItems, onPageChange, className }: PaginationProps) => {
  const handlePrevious = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  return (
    <View className={cn('flex-row items-center p-8 gap-3 bg-muted w-[393px]', className)}>
      <PaginationButton
        onPress={handlePrevious}
        disabled={currentPage === 1}
        className={currentPage === 1 ? 'bg-disabled' : 'bg-primary'}
        accessibilityLabel='Previous page'
        accessibilityRole='button'
        accessibilityState={{ disabled: currentPage === 1 }}
        testID='previous-button'
      >
        <Icon name='navigate_before' size={24} className='text-white' />
      </PaginationButton>

      <Text className='flex-1 text-center text-[20px] leading-[30px] text-muted-foreground'>
        {currentPage} to {totalPages} of {totalItems}
      </Text>

      <PaginationButton
        onPress={handleNext}
        disabled={currentPage === totalPages}
        className={currentPage === totalPages ? 'bg-disabled' : 'bg-primary'}
        accessibilityLabel='Next page'
        accessibilityRole='button'
        accessibilityState={{ disabled: currentPage === totalPages }}
        testID='next-button'
      >
        <Icon name='navigate_next' size={24} className='text-white' />
      </PaginationButton>
    </View>
  );
};

PaginationButton.displayName = 'PaginationButton';
Pagination.displayName = 'Pagination';

export { Pagination };
