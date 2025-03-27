import { useQuery } from "@tanstack/react-query";
import apiClient from "../services/api-client";

export interface Platform {
    id: number;
    name: string;
    slug: string;
}

const usePlatforms = () => useQuery({
    queryKey: ['platforms'],
    queryFn: () =>
        apiClient
            .get<{ results: Platform[] }>('/platforms/lists/parents?key=YOUR_API_KEY') // ✅ Corrected endpoint
            .then(res => res.data.results),
    staleTime: 24 * 60 * 60 * 1000, // Cache data for 24 hours
});

export default usePlatforms;
