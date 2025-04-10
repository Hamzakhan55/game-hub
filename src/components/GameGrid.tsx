import { SimpleGrid, Spinner, Text } from "@chakra-ui/react";
import React from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";


const GameGrid = () => {
    const { data, error, fetchNextPage, hasNextPage } = useGames();
    if (error) return <Text>{error.message}</Text>
    const fetchGamesCount = data?.pages.reduce((total, page) => total + page.results.length, 0) || 0;
    return (
        <InfiniteScroll
            dataLength={fetchGamesCount}
            hasMore={!!hasNextPage}
            next={() => fetchNextPage()}
            loader={<Spinner />}
        >
            <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 4 }} padding='10px' gap={6}>
                {data?.pages.map((page, index) =>
                    <React.Fragment key={index}>
                        {page?.results.map(game => <GameCard key={game.id} game={game} />)}
                    </React.Fragment>)}
            </SimpleGrid>
        </InfiniteScroll>
    )
}

export default GameGrid;