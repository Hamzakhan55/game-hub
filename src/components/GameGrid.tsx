import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import { GameQuery } from "../App";

interface Props {
    gameQuery: GameQuery;
}

const GameGrid = ({ gameQuery }: Props) => {
    const { data, error } = useGames(gameQuery);
    if (error) return <Text>{error.message}</Text>
    return (

        <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 4 }} padding='10px' gap={6}>
            {data?.results.map(game =>
                <GameCard key={game.id} game={game} />
            )}
        </SimpleGrid>
    )
}

export default GameGrid;