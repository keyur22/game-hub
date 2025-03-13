import { Grid, GridItem, Stack } from '@chakra-ui/react';
import './App.css';

function App() {
  return (
    <>
      <Grid
        templateAreas={{
          base: `"nav" "main"`,
          lg: `"nav nav" "aside main"`
        }}
      >
        <GridItem area='nav' bg='coral'>
          Nav
        </GridItem>
        <Stack hideBelow='lg'>
          <GridItem area='aside' bg='gold'>
            Aside
          </GridItem>
        </Stack>
        <GridItem area='main' bg='blue'>
          Main
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
