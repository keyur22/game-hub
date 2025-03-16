import useGames from '@/hooks/useGames';
import { Box, Button, SimpleGrid, Text } from '@chakra-ui/react';
import GameCard from './GameCard';
import GameCardSkeleton from './GameCardSkeleton';
import { GameQuery } from '@/App';
import React from 'react';

interface Props {
  gameQuery: GameQuery;
}

const GameGrid = ({ gameQuery }: Props) => {
  const {
    isLoading: loading,
    data: games,
    error,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage
  } = useGames(gameQuery);
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8];

  return (
    <Box w='100%'>
      {!loading && error && <Text>{error.message}</Text>}
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 4 }} gap={5} mt={10}>
        {loading &&
          skeletons.map((skeleton) => <GameCardSkeleton key={skeleton} />)}
        {!loading &&
          !!games?.pages?.length &&
          games?.pages?.map((group, i) => (
            <React.Fragment key={i}>
              {group?.results?.map((game) => (
                <GameCard key={game.id} game={game} />
              ))}
            </React.Fragment>
          ))}
      </SimpleGrid>
      <Button
        variant='solid'
        onClick={() => fetchNextPage()}
        disabled={!hasNextPage || isFetchingNextPage}
        mt={5}
      >
        Load more
      </Button>
    </Box>
  );
};

export default GameGrid;
