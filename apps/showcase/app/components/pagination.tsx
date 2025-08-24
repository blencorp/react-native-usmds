import { ScrollView, View } from 'react-native';
import { useState } from 'react';
import { Pagination } from '../../../storybook/components/Pagination/Pagination';
import { Text } from '../../../storybook/components/Text/Text';
import { Button } from '../../../storybook/components/Button/Button';

export default function PaginationScreen() {
  // Different pagination states
  const [page1, setPage1] = useState(1);
  const [page2, setPage2] = useState(5);
  const [page3, setPage3] = useState(10);
  const [page4, setPage4] = useState(1);
  const [page5, setPage5] = useState(3);
  const [page6, setPage6] = useState(1);
  const [page7, setPage7] = useState(2);
  const [page8, setPage8] = useState(1);

  // Table pagination example
  const [tablePage, setTablePage] = useState(1);
  const itemsPerPage = 10;
  const tableData = Array.from({ length: 100 }, (_, i) => ({
    id: i + 1,
    name: `Item ${i + 1}`,
    status: i % 3 === 0 ? 'Active' : i % 3 === 1 ? 'Pending' : 'Inactive',
    date: `2024-01-${String((i % 30) + 1).padStart(2, '0')}`
  }));

  const currentTableData = tableData.slice(
    (tablePage - 1) * itemsPerPage,
    tablePage * itemsPerPage
  );

  // List pagination example
  const [listPage, setListPage] = useState(1);
  const listItemsPerPage = 5;
  const listData = Array.from({ length: 50 }, (_, i) => `List item ${i + 1}`);
  const currentListData = listData.slice(
    (listPage - 1) * listItemsPerPage,
    listPage * listItemsPerPage
  );

  return (
    <ScrollView className='flex-1 bg-background'>
      <View className='p-4 space-y-8 w-full mx-auto'>
        
        {/* Basic Pagination */}
        <View>
          <Text className='text-lg font-bold mb-4'>Basic Pagination</Text>
          <View className='bg-card rounded-lg border border-border'>
            <View className='p-4'>
              <Text className='text-sm text-muted-foreground mb-2'>First Page</Text>
              <Pagination 
                currentPage={page1} 
                totalPages={10} 
                totalItems={100} 
                onPageChange={setPage1} 
              />
            </View>
            <View className='p-4 border-t border-border'>
              <Text className='text-sm text-muted-foreground mb-2'>Middle Page</Text>
              <Pagination 
                currentPage={page2} 
                totalPages={10} 
                totalItems={100} 
                onPageChange={setPage2} 
              />
            </View>
            <View className='p-4 border-t border-border'>
              <Text className='text-sm text-muted-foreground mb-2'>Last Page</Text>
              <Pagination 
                currentPage={page3} 
                totalPages={10} 
                totalItems={100} 
                onPageChange={setPage3} 
              />
            </View>
          </View>
        </View>

        {/* Different Page Counts */}
        <View>
          <Text className='text-lg font-bold mb-4'>Different Page Counts</Text>
          <View className='space-y-3'>
            <View className='bg-card rounded-lg p-4 border border-border'>
              <Text className='text-sm text-muted-foreground mb-2'>Small Dataset (20 items)</Text>
              <Pagination 
                currentPage={page4} 
                totalPages={2} 
                totalItems={20} 
                onPageChange={setPage4} 
              />
            </View>
            <View className='bg-card rounded-lg p-4 border border-border'>
              <Text className='text-sm text-muted-foreground mb-2'>Medium Dataset (250 items)</Text>
              <Pagination 
                currentPage={page5} 
                totalPages={25} 
                totalItems={250} 
                onPageChange={setPage5} 
              />
            </View>
            <View className='bg-card rounded-lg p-4 border border-border'>
              <Text className='text-sm text-muted-foreground mb-2'>Large Dataset (1000 items)</Text>
              <Pagination 
                currentPage={page6} 
                totalPages={100} 
                totalItems={1000} 
                onPageChange={setPage6} 
              />
            </View>
          </View>
        </View>

        {/* Table with Pagination */}
        <View>
          <Text className='text-lg font-bold mb-4'>Table with Pagination</Text>
          <View className='bg-card rounded-lg border border-border'>
            <View className='p-4 border-b border-border'>
              <Text className='text-base font-semibold'>Data Table</Text>
            </View>
            <View className='p-4'>
              {/* Table Header */}
              <View className='flex-row bg-muted p-2 rounded'>
                <Text className='text-xs font-medium flex-1'>ID</Text>
                <Text className='text-xs font-medium flex-2'>Name</Text>
                <Text className='text-xs font-medium flex-1'>Status</Text>
                <Text className='text-xs font-medium flex-1'>Date</Text>
              </View>
              {/* Table Body */}
              <View className='mt-2 space-y-1'>
                {currentTableData.map((item) => (
                  <View key={item.id} className='flex-row p-2 border-b border-border'>
                    <Text className='text-sm flex-1'>{item.id}</Text>
                    <Text className='text-sm flex-2'>{item.name}</Text>
                    <Text className='text-sm flex-1'>{item.status}</Text>
                    <Text className='text-sm flex-1'>{item.date}</Text>
                  </View>
                ))}
              </View>
            </View>
            <View className='border-t border-border'>
              <Pagination 
                currentPage={tablePage} 
                totalPages={10} 
                totalItems={100} 
                onPageChange={setTablePage} 
              />
            </View>
          </View>
        </View>

        {/* List with Pagination */}
        <View>
          <Text className='text-lg font-bold mb-4'>List with Pagination</Text>
          <View className='bg-card rounded-lg border border-border'>
            <View className='p-4 border-b border-border'>
              <Text className='text-base font-semibold'>Items List</Text>
              <Text className='text-xs text-muted-foreground mt-1'>Showing 5 items per page</Text>
            </View>
            <View className='p-4 space-y-2'>
              {currentListData.map((item, index) => (
                <View key={index} className='p-3 bg-muted/20 rounded-lg'>
                  <Text className='text-sm font-medium'>{item}</Text>
                  <Text className='text-xs text-muted-foreground mt-1'>
                    Item description and additional details go here
                  </Text>
                </View>
              ))}
            </View>
            <View className='border-t border-border'>
              <Pagination 
                currentPage={listPage} 
                totalPages={10} 
                totalItems={50} 
                onPageChange={setListPage} 
              />
            </View>
          </View>
        </View>

        {/* Card Grid with Pagination */}
        <View>
          <Text className='text-lg font-bold mb-4'>Card Grid with Pagination</Text>
          <View className='bg-card rounded-lg border border-border'>
            <View className='p-4 border-b border-border'>
              <Text className='text-base font-semibold'>Product Gallery</Text>
            </View>
            <View className='p-4'>
              <View className='flex-row flex-wrap gap-2'>
                {[1, 2, 3, 4, 5, 6].map((item) => (
                  <View key={item} className='flex-1 min-w-[45%] bg-muted/20 rounded-lg p-3'>
                    <View className='h-20 bg-muted rounded mb-2' />
                    <Text className='text-sm font-medium'>Product {((page7 - 1) * 6) + item}</Text>
                    <Text className='text-xs text-muted-foreground'>$99.99</Text>
                  </View>
                ))}
              </View>
            </View>
            <View className='border-t border-border'>
              <Pagination 
                currentPage={page7} 
                totalPages={5} 
                totalItems={30} 
                onPageChange={setPage7} 
              />
            </View>
          </View>
        </View>

        {/* Search Results with Pagination */}
        <View>
          <Text className='text-lg font-bold mb-4'>Search Results</Text>
          <View className='bg-card rounded-lg border border-border'>
            <View className='p-4 border-b border-border'>
              <View className='flex-row items-center justify-between'>
                <Text className='text-base font-semibold'>Search: "React Native"</Text>
                <Text className='text-xs text-muted-foreground'>245 results</Text>
              </View>
            </View>
            <View className='p-4 space-y-3'>
              {[1, 2, 3].map((item) => (
                <View key={item} className='pb-3 border-b border-border last:border-0'>
                  <Text className='text-sm font-medium text-primary'>
                    Search Result {((page8 - 1) * 3) + item}
                  </Text>
                  <Text className='text-xs text-muted-foreground mt-1'>
                    https://example.com/result-{((page8 - 1) * 3) + item}
                  </Text>
                  <Text className='text-sm mt-2'>
                    This is a sample search result description that contains relevant information about the search query...
                  </Text>
                </View>
              ))}
            </View>
            <View className='border-t border-border'>
              <Pagination 
                currentPage={page8} 
                totalPages={82} 
                totalItems={245} 
                onPageChange={setPage8} 
              />
            </View>
          </View>
        </View>

        {/* Pagination States */}
        <View>
          <Text className='text-lg font-bold mb-4'>Pagination States</Text>
          <View className='space-y-3'>
            <View className='bg-card rounded-lg p-4 border border-border'>
              <Text className='text-sm font-medium mb-2'>First Page (Previous Disabled)</Text>
              <Pagination 
                currentPage={1} 
                totalPages={5} 
                totalItems={50} 
                onPageChange={() => {}} 
              />
            </View>
            <View className='bg-card rounded-lg p-4 border border-border'>
              <Text className='text-sm font-medium mb-2'>Last Page (Next Disabled)</Text>
              <Pagination 
                currentPage={5} 
                totalPages={5} 
                totalItems={50} 
                onPageChange={() => {}} 
              />
            </View>
            <View className='bg-card rounded-lg p-4 border border-border'>
              <Text className='text-sm font-medium mb-2'>Single Page (Both Disabled)</Text>
              <Pagination 
                currentPage={1} 
                totalPages={1} 
                totalItems={10} 
                onPageChange={() => {}} 
              />
            </View>
          </View>
        </View>

        {/* Pagination with Controls */}
        <View>
          <Text className='text-lg font-bold mb-4'>Advanced Pagination Example</Text>
          <View className='bg-card rounded-lg border border-border'>
            <View className='p-4 border-b border-border'>
              <View className='flex-row items-center justify-between mb-3'>
                <Text className='text-base font-semibold'>User Management</Text>
                <View className='flex-row gap-2'>
                  <Button variant='outline' size='sm'>
                    <Text className='text-xs'>Filter</Text>
                  </Button>
                  <Button variant='outline' size='sm'>
                    <Text className='text-xs'>Sort</Text>
                  </Button>
                </View>
              </View>
              <View className='flex-row items-center gap-2'>
                <View className='bg-muted px-2 py-1 rounded'>
                  <Text className='text-xs'>Status: All</Text>
                </View>
                <View className='bg-muted px-2 py-1 rounded'>
                  <Text className='text-xs'>Role: All</Text>
                </View>
                <View className='bg-muted px-2 py-1 rounded'>
                  <Text className='text-xs'>Date: Last 30 days</Text>
                </View>
              </View>
            </View>
            <View className='p-4'>
              <View className='space-y-2'>
                {[1, 2, 3, 4, 5].map((item) => (
                  <View key={item} className='flex-row items-center p-3 bg-muted/10 rounded-lg'>
                    <View className='w-10 h-10 bg-primary/20 rounded-full mr-3' />
                    <View className='flex-1'>
                      <Text className='text-sm font-medium'>User {item}</Text>
                      <Text className='text-xs text-muted-foreground'>user{item}@example.com</Text>
                    </View>
                    <View className='bg-success/20 px-2 py-1 rounded'>
                      <Text className='text-xs text-success'>Active</Text>
                    </View>
                  </View>
                ))}
              </View>
            </View>
            <View className='p-4 border-t border-border bg-muted/20'>
              <View className='flex-row items-center justify-between mb-3'>
                <Text className='text-xs text-muted-foreground'>
                  Showing 1-5 of 100 users
                </Text>
                <View className='flex-row items-center gap-2'>
                  <Text className='text-xs text-muted-foreground'>Items per page:</Text>
                  <View className='bg-background px-2 py-1 rounded border border-border'>
                    <Text className='text-xs'>5</Text>
                  </View>
                </View>
              </View>
              <Pagination 
                currentPage={1} 
                totalPages={20} 
                totalItems={100} 
                onPageChange={() => {}} 
              />
            </View>
          </View>
        </View>

        {/* Usage Guidelines */}
        <View>
          <Text className='text-lg font-bold mb-4'>Usage Guidelines</Text>
          <View className='bg-info-lighter rounded-lg p-4'>
            <Text className='text-sm font-medium mb-3'>When to use Pagination:</Text>
            <View className='space-y-2'>
              <Text className='text-xs'>• Large datasets that would be overwhelming to display at once</Text>
              <Text className='text-xs'>• Tables with more than 20-25 rows</Text>
              <Text className='text-xs'>• Search results with many matches</Text>
              <Text className='text-xs'>• Image galleries or product listings</Text>
              <Text className='text-xs'>• Lists that would require excessive scrolling</Text>
            </View>
            <Text className='text-sm font-medium mt-3 mb-2'>Best Practices:</Text>
            <View className='space-y-1'>
              <Text className='text-xs'>• Show current page and total pages/items</Text>
              <Text className='text-xs'>• Disable navigation buttons at boundaries</Text>
              <Text className='text-xs'>• Consider showing items per page options</Text>
              <Text className='text-xs'>• Place pagination at the bottom of content</Text>
              <Text className='text-xs'>• Keep pagination controls consistent across the app</Text>
              <Text className='text-xs'>• Consider infinite scroll for mobile-first experiences</Text>
            </View>
            <Text className='text-sm font-medium mt-3 mb-2'>Accessibility:</Text>
            <View className='space-y-1'>
              <Text className='text-xs'>• Include proper ARIA labels for screen readers</Text>
              <Text className='text-xs'>• Ensure keyboard navigation works properly</Text>
              <Text className='text-xs'>• Provide clear feedback about current page</Text>
              <Text className='text-xs'>• Announce page changes to screen readers</Text>
            </View>
          </View>
        </View>

      </View>
    </ScrollView>
  );
}