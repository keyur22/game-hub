import { Button, Text } from '@chakra-ui/react';
import {
  MenuContent,
  MenuItem,
  MenuRoot,
  MenuTrigger
} from '@/components/ui/menu';

import { BsChevronDown } from 'react-icons/bs';

interface Props {
  sortOrder: string;
  onSortOrderSelect: (sortOrder: string) => void;
}

const SortMenu = ({ sortOrder, onSortOrderSelect }: Props) => {
  const sortOrders = [
    {
      label: 'Name',
      value: 'name'
    },
    { label: 'Release Date', value: '-released' },
    { label: 'Date Added', value: '-added' },
    { label: 'Average Rating', value: '-rating' },
    { label: 'Popularity', value: '-metacritic' }
  ];

  const selectedSortOrder = sortOrders.find(
    (order) => order.value === sortOrder
  );

  return (
    <MenuRoot>
      <MenuTrigger asChild>
        <Button variant='solid'>
          Order By: {selectedSortOrder?.label || 'Relevance'} <BsChevronDown />
        </Button>
      </MenuTrigger>
      <MenuContent>
        {sortOrders?.map((order) => (
          <MenuItem
            key={order.value}
            value={order.value}
            justifyContent='space-between'
            my={2}
            cursor='pointer'
            onClick={() => onSortOrderSelect(order.value)}
          >
            <Text>{order.label}</Text>
          </MenuItem>
        ))}
      </MenuContent>
    </MenuRoot>
  );
};

export default SortMenu;
