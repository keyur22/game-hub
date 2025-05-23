import usePlatforms from '@/hooks/usePlatforms';
import { Button, Text, Spinner } from '@chakra-ui/react';
import {
  MenuContent,
  MenuItem,
  MenuRoot,
  MenuTrigger
} from '@/components/ui/menu';
import { BsChevronDown } from 'react-icons/bs';
import useGameQueryStore from '@/store';

const PlatformMenu = () => {
  const { data, error, isLoading: loading } = usePlatforms();

  const selectedPlatformId = useGameQueryStore(
    (state) => state.gameQuery.platformId
  );
  const onPlatformSelect = useGameQueryStore((state) => state.setPlatformId);

  const selectedPlatform = data?.results.find(
    (platform) => platform.id === selectedPlatformId
  );

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
            onClick={() => onPlatformSelect(platform.id)}
          >
            <Text>{platform.name}</Text>
          </MenuItem>
        ))}
      </MenuContent>
    </MenuRoot>
  );
};

export default PlatformMenu;
