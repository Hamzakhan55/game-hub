import GameGrid from "../components/GameGrid";
import GameHeading from "../components/GameHeading";
import GenreList from "../components/GenreList";
import PlatformSelector from "../components/PlatformSelector";
import SortSelector from "../components/SortSelector";
import { Box, Flex, Grid, GridItem, Container } from "@chakra-ui/react";

const HomePage = () => {
    return (
        <Container maxW="container.2xl" py={8}>
            <Grid 
                templateAreas={{
                    base: `"main"`,
                    lg: `"aside main"`
                }}
                templateColumns={{
                    base: '1fr',
                    lg: '320px 1fr'
                }}
                gap={10}
                minH="calc(100vh - 140px)"
            >
                <GridItem area='aside'>
                    <Box 
                        bg="linear-gradient(145deg, rgba(15, 15, 35, 0.95), rgba(26, 32, 44, 0.9))" 
                        backdropFilter="blur(25px)"
                        p={6}
                        border="1px"
                        borderColor="rgba(255, 255, 255, 0.15)"
                        h="100vh"
                        position="fixed"
                        top={0}
                        left={0}
                        width="320px"
                        zIndex={100}
                        boxShadow="0 25px 50px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.1)"
                        pt={24}
                    >
                        <GenreList />
                    </Box>
                </GridItem>
                <GridItem area='main'>
                    <Box>
                        <GameHeading />
                        <Flex 
                            gap={6} 
                            marginBottom={8}
                            flexWrap="wrap"
                            align="center"
                            bg="rgba(26, 32, 44, 0.4)"
                            backdropFilter="blur(10px)"
                            p={4}
                            borderRadius="xl"
                            border="1px"
                            borderColor="rgba(255, 255, 255, 0.05)"
                        >
                            <PlatformSelector />
                            <SortSelector />
                        </Flex>
                        <GameGrid />
                    </Box>
                </GridItem>
            </Grid>
        </Container>
    )
}

export default HomePage;