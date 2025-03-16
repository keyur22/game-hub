import useGenres from '@/hooks/useGenres';
import usePlatforms from '@/hooks/usePlatforms';
import useGameQueryStore from '@/store';
import { Heading, Text } from '@chakra-ui/react';

const GameHeading = () => {
  const { data: genres } = useGenres();
  const { data: platforms } = usePlatforms();

  const genreId = useGameQueryStore((state) => state.gameQuery.genreId);
  const platformId = useGameQueryStore((state) => state.gameQuery.platformId);

  const selectedGenre = genres?.results.find((genre) => genre.id === genreId);
  const selectedPlatform = platforms?.results.find(
    (platform) => platform.id === platformId
  );

  const label = `${selectedGenre?.name || ''} ${selectedPlatform?.name || ''}`;

  return (
    <Heading size='4xl' fontWeight='bold'>
      <Text as='span' color='pink.400'>
        {label}
      </Text>{' '}
      Games
    </Heading>
  );
};

export default GameHeading;
