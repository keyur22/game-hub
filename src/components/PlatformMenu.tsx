import usePlatforms, { Platform } from '@/hooks/usePlatforms';
import { Button, Badge, Text, HStack, Spinner } from '@chakra-ui/react';
import {
  MenuContent,
  MenuItem,
  MenuRoot,
  MenuTrigger
} from '@/components/ui/menu';
import { BsChevronDown } from 'react-icons/bs';

interface Props {
  onPlatformSelect: (platform: Platform | null) => void;
}

const PlatformMenu = ({ onPlatformSelect }: Props) => {
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
        {data?.map((platform) => (
          <MenuItem
            key={platform.id}
            value={platform.name}
            justifyContent='space-between'
            my={2}
            cursor='pointer'
            onClick={() => onPlatformSelect(platform)}
          >
            <Text>{platform.name}</Text>
            <Badge py='1' borderRadius='md' variant='solid'>
              {platform.games_count}
            </Badge>
          </MenuItem>
        ))}
      </MenuContent>
    </MenuRoot>
  );
};

export default PlatformMenu;
