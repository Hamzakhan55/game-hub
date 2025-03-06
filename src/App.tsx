import { Grid, GridItem } from "@chakra-ui/react"
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";


function App() {
  return (<Grid templateAreas={{
    base: `"nav" "main"`,
    lg: `"nav nav""aside main"`
  }}>
    <GridItem area='nav' bg='linear-gradient(to right, #214052 0%, #214052 100%)'>
      <NavBar />
    </GridItem>
    <GridItem area='aside' bg='linear-gradient(to right, #214052 0%, #214052 100%)'>
      <GenreList />
    </GridItem>
    <GridItem area='main' bg='linear-gradient(to right, #214052 0%, #214052 100%)'>
      <GameGrid />
    </GridItem>
  </Grid>
  )

}

export default App;