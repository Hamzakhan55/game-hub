import useData from "./useData";
import { Genre } from "./useGenres";

export interface Platform {
    id: number;
    name: string;
    slug: string
}
export interface Game {
    id: number;
    name: string;
    background_image: string;
    parent_platforms: { platform: Platform }[];
    metacritic: number;
}


const useGames = (_selectedGenre: Genre | null) => useData<Game>('/games', { params: { genres: _selectedGenre?.id } }, [_selectedGenre?.id]);

export default useGames;