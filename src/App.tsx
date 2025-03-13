
import { Flex, Grid, GridItem } from "@chakra-ui/react"
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { useState } from "react";
import { Genre } from "./hooks/useGenres";
import PlatformSelector from "./components/PlatformSelector";
import { Platform } from "./hooks/useGames";
import SortSelector from "./components/SortSelector";


export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
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
    <GridItem area='nav' bg='linear-gradient(to right, #214052 0%, #214052 100%)'>
      <NavBar onSearch={(searchText) => setGameQuery({ ...gameQuery, searchText })} />
    </GridItem>
    <GridItem area='aside' paddingX={5} bg='linear-gradient(to right, #214052 0%, #214052 100%)'>
      <GenreList selectedGenre={gameQuery.genre} onSelectedGenre={(genre) => setGameQuery({ ...gameQuery, genre })} />
    </GridItem>
    <GridItem area='main' bg='linear-gradient(to right, #214052 0%, #214052 100%)'>

      <Flex gap={5} paddingLeft={2} marginBottom={5}>
        <PlatformSelector selectedPlatform={gameQuery.platform} onSelectedPlatform={(platform) => setGameQuery({ ...gameQuery, platform })} />
        <SortSelector sortOrder={gameQuery.sortOrder} onSelectSortOrder={(sortOrder) => setGameQuery({ ...gameQuery, sortOrder })} />
      </Flex>
      <GameGrid gameQuery={gameQuery} />
    </GridItem>
  </Grid>
  )

}

export default App;