import { GameQuery } from '@/App';
import useGenres from '@/hooks/useGenres';
import { Heading, Text } from '@chakra-ui/react';

interface Props {
  gameQuery: GameQuery;
}

const GameHeading = ({ gameQuery }: Props) => {
  const { data } = useGenres();
  const { platform, genreId } = gameQuery;
  const genre = data?.results.find((genre) => genre.id === genreId);

  const label = `${genre?.name || ''} ${platform?.name || ''}`;

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
