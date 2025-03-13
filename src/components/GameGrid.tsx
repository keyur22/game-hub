import useGames from '@/hooks/useGames';
import { Box, SimpleGrid, Text } from '@chakra-ui/react';
import GameCard from './GameCard';
import GameCardSkeleton from './GameCardSkeleton';
import { Genre } from '@/hooks/useGenres';

interface Props {
  selectedGenre: Genre | null;
}

const GameGrid = ({ selectedGenre }: Props) => {
  const { loading, data: games, error } = useGames(selectedGenre);
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8];

  return (
    <Box w='100%'>
      {!loading && error && <Text>{error}</Text>}
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 4 }} gap={5} padding={3}>
        {loading &&
          skeletons.map((skeleton) => <GameCardSkeleton key={skeleton} />)}
        {!loading &&
          !!games?.length &&
          games.map((game) => <GameCard key={game.id} game={game} />)}
      </SimpleGrid>
    </Box>
  );
};

export default GameGrid;
