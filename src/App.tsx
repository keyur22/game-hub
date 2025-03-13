import { Grid, GridItem, HStack, Stack } from '@chakra-ui/react';
import Navbar from './components/Navbar';
import GameGrid from './components/GameGrid';
import GenreList from './components/GenreList';
import { Genre } from './hooks/useGenres';
import { useState } from 'react';
import PlatformMenu from './components/PlatformMenu';
import { Platform } from './hooks/usePlatforms';
import SortMenu from './components/SortMenu';

export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
}

function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

  return (
    <>
      <Grid
        templateColumns={{
          base: `1fr`,
          lg: `0.6fr repeat(2, 1fr)`,
          xl: `0.6fr repeat(3, 1fr)`
        }}
        templateAreas={{
          lg: `"nav nav nav" "aside main main"`,
          xl: `"nav nav nav nav" "aside main main main"`
        }}
      >
        <GridItem area='nav'>
          <Navbar />
        </GridItem>
        <Stack hideBelow='lg'>
          <GridItem area='aside'>
            <GenreList
              onGenreSelect={(genre) => setGameQuery({ ...gameQuery, genre })}
              selectedGenre={gameQuery.genre}
            />
          </GridItem>
        </Stack>
        <GridItem area='main'>
          <HStack gap={5} mb={5} alignItems='center'>
            <PlatformMenu
              onPlatformSelect={(platform) =>
                setGameQuery({ ...gameQuery, platform })
              }
            />
            <SortMenu />
          </HStack>
          <GameGrid gameQuery={gameQuery} />
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
