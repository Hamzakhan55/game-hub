
import { Box, Flex, Grid, GridItem } from "@chakra-ui/react"
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { useState } from "react";

import PlatformSelector from "./components/PlatformSelector";
import { Platform } from "./hooks/usePlatforms";
import SortSelector from "./components/SortSelector";
import GameHeading from "./components/GameHeading";


export interface GameQuery {
  genreId?: number;
  platformId?: number;
  sortOrder: string;
  searchText: string;
}


function App() {
  // const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);
  // const [selectedPlatform, setSelectedPlatform] = useState<Platform | null>(null);

  //   replace the above two state variable with state varible of type GameQuery

  const [gameQuery, setGameQuery] = useState({} as GameQuery);

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
      <NavBar onSearch={(searchText) => setGameQuery({ ...gameQuery, searchText })} />
    </GridItem>
    <GridItem area='aside' paddingX={5} bg='#0d0d0d'>
      <GenreList onSelectGenre={(genre) => setGameQuery({ ...gameQuery, genreId: genre.id })} selectedGenreId={0} />
    </GridItem>
    <GridItem area='main' bg='#0d0d0d'>
      <Box paddingLeft={2} >
        <GameHeading gameQuery={gameQuery} />
        <Flex gap={5} marginBottom={5}>
          <PlatformSelector selectedPlatformId={gameQuery.platformId} onSelectedPlatform={(platform) => setGameQuery({ ...gameQuery, platformId: platform.id, })} />
          <SortSelector sortOrder={gameQuery.sortOrder} onSelectSortOrder={(sortOrder) => setGameQuery({ ...gameQuery, sortOrder })} />
        </Flex>
      </Box>
      <GameGrid gameQuery={gameQuery} />
    </GridItem>
  </Grid>
  )

}

export default App;

