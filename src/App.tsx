import { Grid, GridItem, Stack } from '@chakra-ui/react';
import Navbar from './components/Navbar';
import GameGrid from './components/GameGrid';
import GenreList from './components/GenreList';
import { Genre } from './hooks/useGenres';
import { useState } from 'react';

function App() {
  const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);

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
              onGenreSelect={(genre) => setSelectedGenre(genre)}
              selectedGenre={selectedGenre}
            />
          </GridItem>
        </Stack>
        <GridItem area='main'>
          <GameGrid selectedGenre={selectedGenre} />
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
