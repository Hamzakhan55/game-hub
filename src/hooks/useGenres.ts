import genres from "../data/genres";
import apiClient from "../services/api-client";
import { useQuery } from "@tanstack/react-query";

export interface Genre {
    id: number;
    name: string;
    image_background: string;
}

interface FetchResponse<T> {
    results: T[];
}

const useGenres = () =>
    useQuery({
        queryKey: ["genres"],
        queryFn: () =>
            apiClient.get<FetchResponse<Genre>>("/genres").then((res) => res.data),
        staleTime: 24 * 60 * 60 * 1000, // Cache data for 24 hrs
        initialData: { results: genres }
    });

export default useGenres;
