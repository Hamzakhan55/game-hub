
import { Box, Flex, Grid, GridItem } from "@chakra-ui/react"
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { useState } from "react";
import PlatformSelector from "./components/PlatformSelector";
import SortSelector from "./components/SortSelector";
import GameHeading from "./components/GameHeading";
import { GameQuery } from "./store";





function App() {
  // const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);
  // const [selectedPlatform, setSelectedPlatform] = useState<Platform | null>(null);

  //   replace the above two state variable with state varible of type GameQuery


  return (<Grid templateAreas={{
    base: `"nav" "main"`,
    lg: `"nav nav""aside main"`
  }}
    templateColumns={{
      base: '1fr',
      lg: '200px 1fr'
    }}
  >
    <GridItem area='nav' bg='#0d0d0d'>
      <NavBar />
    </GridItem>
    <GridItem area='aside' paddingX={5} bg='#0d0d0d'>
      <GenreList />
    </GridItem>
    <GridItem area='main' bg='#0d0d0d'>
      <Box paddingLeft={2} >
        <GameHeading />
        <Flex gap={5} marginBottom={5}>
          <PlatformSelector />
          <SortSelector />
        </Flex>
      </Box>
      <GameGrid />
    </GridItem>
  </Grid>
  )

}

export default App;

