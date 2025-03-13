import useGames from '@/hooks/useGames';
import { SimpleGrid, Text } from '@chakra-ui/react';
import GameCard from './GameCard';
import GameCardSkeleton from './GameCardSkeleton';

const GameGrid = () => {
  const { loading, games, error } = useGames();
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8];

  // console.log(loading);

  return (
    <div>
      <Text>{error}</Text>
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 4 }} gap={5} padding={3}>
        {loading &&
          skeletons.map((skeleton) => <GameCardSkeleton key={skeleton} />)}
        {!!games?.length &&
          games.map((game) => <GameCard key={game.id} game={game} />)}
      </SimpleGrid>
    </div>
  );
};

export default GameGrid;
