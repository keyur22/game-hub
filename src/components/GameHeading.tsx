import { GameQuery } from '@/App';
import useGenres from '@/hooks/useGenres';
import usePlatforms from '@/hooks/usePlatforms';
import { Heading, Text } from '@chakra-ui/react';

interface Props {
  gameQuery: GameQuery;
}

const GameHeading = ({ gameQuery }: Props) => {
  const { data: genres } = useGenres();
  const { data: platforms } = usePlatforms();

  const { platformId, genreId } = gameQuery;
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
