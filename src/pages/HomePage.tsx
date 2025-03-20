import { Grid, GridItem, Stack, HStack } from '@chakra-ui/react';
import GameGrid from '../components/GameGrid';
import GameHeading from '../components/GameHeading';
import GenreList from '../components/GenreList';
import PlatformMenu from '../components/PlatformMenu';
import SortMenu from '../components/SortMenu';

const HomePage = () => {
  return (
    <Grid
      templateColumns={{
        base: `1fr`,
        lg: `0.6fr repeat(2, 1fr)`,
        xl: `0.6fr repeat(3, 1fr)`
      }}
      templateAreas={{
        base: `"main"`,
        lg: `"aside main main"`,
        xl: `"aside main main main"`
      }}
    >
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
};

export default HomePage;
