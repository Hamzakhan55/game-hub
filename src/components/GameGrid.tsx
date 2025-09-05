import { SimpleGrid, Spinner, Text, Center } from "@chakra-ui/react";
import React from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";

const GameGrid = () => {
    const { data, error, fetchNextPage, hasNextPage } = useGames();
    
    if (error) {
        return (
            <Center py={10}>
                <Text color="red.400" fontSize="lg">
                    {error.message}
                </Text>
            </Center>
        )
    }
    
    const fetchGamesCount = data?.pages.reduce((total, page) => total + page.results.length, 0) || 0;
    
    return (
        <InfiniteScroll
            dataLength={fetchGamesCount}
            hasMore={!!hasNextPage}
            next={() => fetchNextPage()}
            loader={
                <Center py={8}>
                    <Spinner 
                        size="lg" 
                        color="blue.400"
                    />
                </Center>
            }
        >
            <SimpleGrid 
                columns={{ base: 1, sm: 2, md: 2, lg: 3, xl: 4 }} 
                gap={6}
                minChildWidth="280px"
            >
                {data?.pages.map((page, index) =>
                    <React.Fragment key={index}>
                        {page?.results.map(game => 
                            <GameCard key={game.id} game={game} />
                        )}
                    </React.Fragment>
                )}
            </SimpleGrid>
        </InfiniteScroll>
    )
}

export default GameGrid;