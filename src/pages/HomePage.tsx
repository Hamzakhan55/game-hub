import GameGrid from "../components/GameGrid";
import GameHeading from "../components/GameHeading";
import GenreList from "../components/GenreList";
import PlatformSelector from "../components/PlatformSelector";
import SortSelector from "../components/SortSelector";
import { Box, Flex, Grid, GridItem } from "@chakra-ui/react";


const HomePage = () => {
    return (
        <Grid templateAreas={{
            base: `"main"`,
            lg: `"aside main"`
        }}
            templateColumns={{
                base: '1fr',
                lg: '200px 1fr'
            }}
        >

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

export default HomePage;