import { Grid, GridItem } from "@chakra-ui/react"
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { useState } from "react";
import { Genre } from "./hooks/useGenres";


function App() {
  const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);



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
      <NavBar />
    </GridItem>
    <GridItem area='aside' paddingX={5} bg='linear-gradient(to right, #214052 0%, #214052 100%)'>
      <GenreList selectedGenre={selectedGenre} onSelectedGenre={(genre) => setSelectedGenre(genre)} />
    </GridItem>
    <GridItem area='main' bg='linear-gradient(to right, #214052 0%, #214052 100%)'>
      <GameGrid selectedGenre={selectedGenre} />
    </GridItem>
  </Grid>
  )

}

export default App;