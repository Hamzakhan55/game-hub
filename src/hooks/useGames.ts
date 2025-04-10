import { useInfiniteQuery } from "@tanstack/react-query";
import ms from "ms";
import APIClient, { FetchResponse } from '../services/api-client';
import useGameQueryStore from "../store";
import { Platform } from "./usePlatforms";


const apiClient = new APIClient<Game>('/games');

export interface Game {
    id: number;
    name: string;
    background_image: string;
    parent_platforms: { platform: Platform }[];
    metacritic: number;
    rating_top: number;
}


const useGames = () => {
    const gameQuery = useGameQueryStore(s => s.gameQuery);
    return useInfiniteQuery<FetchResponse<Game>, Error>({
        queryKey: ['games', gameQuery],
        queryFn: async ({ pageParam = 1 }) => {
            const response = await apiClient.getAll({
                params: {
                    genres: gameQuery.genreId,
                    parent_platforms: gameQuery.platformId,
                    ordering: gameQuery.sortOrder,
                    search: gameQuery.searchText,
                    page: pageParam,
                },
            });
            return response;
        },
        getNextPageParam: (lastPage) => {
            return lastPage.next ? lastPage.next.match(/page=(\d+)/)?.[1] ?? undefined : undefined;
        },
        initialPageParam: 1,
        staleTime: ms('1d')
    });

}

export default useGames;
