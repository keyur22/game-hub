import usePlatforms, { Platform } from '@/hooks/usePlatforms';
import { Button, Text, Spinner } from '@chakra-ui/react';
import {
  MenuContent,
  MenuItem,
  MenuRoot,
  MenuTrigger
} from '@/components/ui/menu';
import { BsChevronDown } from 'react-icons/bs';

interface Props {
  selectedPlatform: Platform | null;
  onPlatformSelect: (platform: Platform | null) => void;
}

const PlatformMenu = ({ selectedPlatform, onPlatformSelect }: Props) => {
  const { data, error, isLoading: loading } = usePlatforms();

  if (loading) return <Spinner />;

  if (error) return null;

  return (
    <MenuRoot>
      <MenuTrigger asChild>
        <Button variant='solid'>
          {selectedPlatform?.name || 'Platforms'} <BsChevronDown />
        </Button>
      </MenuTrigger>
      <MenuContent>
        {data?.results?.map((platform) => (
          <MenuItem
            key={platform.id}
            value={platform.name}
            justifyContent='space-between'
            my={2}
            cursor='pointer'
            onClick={() => onPlatformSelect(platform)}
          >
            <Text>{platform.name}</Text>
          </MenuItem>
        ))}
      </MenuContent>
    </MenuRoot>
  );
};

export default PlatformMenu;
