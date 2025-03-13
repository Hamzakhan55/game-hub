import { SimpleGrid } from "@chakra-ui/react";
import useGames, { Platform } from "../hooks/useGames";
import GameCard from "./GameCard";
import { Genre } from "@/hooks/useGenres";
import { GameQuery } from "../App";

interface Props {
    gameQuery: GameQuery;
}

const GameGrid = ({ gameQuery }: Props) => {
    const { data, error } = useGames(gameQuery);

    return (
        <>
            {error && <p>{error}</p>}
            <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 4 }} padding='10px' gap={6}>
                {data.map(game =>
                    <GameCard key={game.id} game={game} />
                )}
            </SimpleGrid>
        </>
    )
}

export default GameGrid;