import { Grid, GridItem, HStack, Stack } from '@chakra-ui/react';
import Navbar from './components/Navbar';
import GameGrid from './components/GameGrid';
import GenreList from './components/GenreList';
import { useState } from 'react';
import PlatformMenu from './components/PlatformMenu';
import { Platform } from './hooks/usePlatforms';
import SortMenu from './components/SortMenu';
import './App.css';
import GameHeading from './components/GameHeading';

export interface GameQuery {
  genreId?: number;
  platform: Platform | null;
  sortOrder: string;
  searchInput: string;
}

function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

  return (
    <Grid
      templateColumns={{
        base: `1fr`,
        lg: `0.6fr repeat(2, 1fr)`,
        xl: `0.6fr repeat(3, 1fr)`
      }}
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav nav" "aside main main"`,
        xl: `"nav nav nav nav" "aside main main main"`
      }}
    >
      <GridItem area='nav'>
        <Navbar
          onSearch={(searchInput) =>
            setGameQuery({ ...gameQuery, searchInput })
          }
        />
      </GridItem>
      <Stack hideBelow='lg'>
        <GridItem area='aside' mt={5}>
          <GenreList
            onGenreSelect={(genreId) => setGameQuery({ ...gameQuery, genreId })}
            selectedGenreId={gameQuery.genreId}
          />
        </GridItem>
      </Stack>
      <GridItem area='main' mt={{ base: 0, lg: 5 }} p={4}>
        <GameHeading gameQuery={gameQuery} />
        <HStack gap={4} mt={5} alignItems='center' flexWrap='wrap'>
          <PlatformMenu
            selectedPlatform={gameQuery.platform}
            onPlatformSelect={(platform) =>
              setGameQuery({ ...gameQuery, platform })
            }
          />
          <SortMenu
            sortOrder={gameQuery.sortOrder}
            onSortOrderSelect={(sortOrder) =>
              setGameQuery({ ...gameQuery, sortOrder })
            }
          />
        </HStack>
        <GameGrid gameQuery={gameQuery} />
      </GridItem>
    </Grid>
  );
}

export default App;
