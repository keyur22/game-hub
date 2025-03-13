import usePlatforms from '@/hooks/usePlatforms';
import { Button, Badge, Text, HStack, Spinner } from '@chakra-ui/react';
import {
  MenuContent,
  MenuItem,
  MenuRoot,
  MenuTrigger
} from '@/components/ui/menu';
import { BsChevronDown } from 'react-icons/bs';

const PlatformMenu = () => {
  const { data, error, loading } = usePlatforms();

  if (loading)
    return (
      <HStack justifyContent='center' p={5}>
        <Spinner />
      </HStack>
    );

  if (error) return null;

  return (
    <MenuRoot>
      <MenuTrigger asChild>
        <Button variant='solid' size='sm'>
          Platforms <BsChevronDown />
        </Button>
      </MenuTrigger>
      <MenuContent>
        {data?.map((x) => (
          <MenuItem
            key={x.id}
            value={x.name}
            justifyContent='space-between'
            my={2}
            cursor='pointer'
          >
            <Text>{x.name}</Text>
            <Badge py='1' borderRadius='md' variant='solid'>
              {x.games_count}
            </Badge>
          </MenuItem>
        ))}
      </MenuContent>
    </MenuRoot>
  );
};

export default PlatformMenu;
