import { SimpleGrid } from "@chakra-ui/react";
import useGames, { Platform } from "../hooks/useGames";
import GameCard from "./GameCard";
import { Genre } from "@/hooks/useGenres";

interface Props {
    selectedGenre: Genre | null;
    selectedPlatform: Platform | null;
}

const GameGrid = ({ selectedGenre, selectedPlatform }: Props) => {
    const { data, error } = useGames(selectedGenre, selectedPlatform);

    return (
        <>
            {error && <p>{error}</p>}
            <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 5 }} padding='10px' gap={3}>
                {data.map(game =>
                    <GameCard key={game.id} game={game} />
                )}
            </SimpleGrid>
        </>
    )
}

export default GameGrid;