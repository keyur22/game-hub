import useGames from '@/hooks/useGames';
import { Box, HStack, SimpleGrid, Spinner, Text } from '@chakra-ui/react';
import GameCard from './GameCard';
import GameCardSkeleton from './GameCardSkeleton';
import { GameQuery } from '@/App';
import React from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';

interface Props {
  gameQuery: GameQuery;
}

const GameGrid = ({ gameQuery }: Props) => {
  const {
    isLoading: loading,
    data: games,
    error,
    fetchNextPage,
    hasNextPage
  } = useGames(gameQuery);
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8];

  const gamesCount =
    games?.pages?.reduce((a, c) => a + c.results.length, 0) || 0;

  return (
    <Box w='100%'>
      {!loading && error && <Text>{error.message}</Text>}
      <InfiniteScroll
        dataLength={gamesCount}
        next={() => fetchNextPage()}
        hasMore={hasNextPage}
        loader={
          <HStack justifyContent='center' margin={5}>
            <Spinner />
          </HStack>
        }
      >
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
      </InfiniteScroll>
    </Box>
  );
};

export default GameGrid;
