import { Button } from '@chakra-ui/react';
import {
  MenuContent,
  MenuItem,
  MenuRoot,
  MenuTrigger
} from '@/components/ui/menu';

import { BsChevronDown } from 'react-icons/bs';

const SortMenu = () => {
  return (
    <MenuRoot>
      <MenuTrigger asChild>
        <Button variant='solid' size='sm'>
          Order By: Relevance <BsChevronDown />
        </Button>
      </MenuTrigger>
      <MenuContent>
        <MenuItem value='relevance'>Relevance</MenuItem>
        <MenuItem value='date-added'>Date Added</MenuItem>
        <MenuItem value='name'>Name</MenuItem>
        <MenuItem value='release-date'>Release Date</MenuItem>
        <MenuItem value='popularity'>Popularity</MenuItem>
        <MenuItem value='average-rating'>Average rating</MenuItem>

        {/* <MenuItem
              key={platform.id}
              value={platform.name}
              justifyContent='space-between'
              my={2}
              cursor='pointer'
              onClick={() => onPlatformSelect(platform)}
            >
              <Text>{platform.name}</Text>
            </MenuItem> */}
      </MenuContent>
    </MenuRoot>
  );
};

export default SortMenu;
