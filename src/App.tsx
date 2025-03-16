import { Grid, GridItem, HStack, Stack } from '@chakra-ui/react';
import Navbar from './components/Navbar';
import GameGrid from './components/GameGrid';
import GenreList from './components/GenreList';
import PlatformMenu from './components/PlatformMenu';
import SortMenu from './components/SortMenu';
import './App.css';
import GameHeading from './components/GameHeading';

function App() {
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
        <Navbar />
      </GridItem>
      <Stack hideBelow='lg'>
        <GridItem area='aside' mt={5}>
          <GenreList />
        </GridItem>
      </Stack>
      <GridItem area='main' mt={{ base: 0, lg: 5 }} p={4}>
        <GameHeading />
        <HStack gap={4} mt={5} alignItems='center' flexWrap='wrap'>
          <PlatformMenu />
          <SortMenu />
        </HStack>
        <GameGrid />
      </GridItem>
    </Grid>
  );
}

export default App;
