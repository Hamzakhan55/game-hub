import apiClient from "../services/api-client";
import { CanceledError } from "axios";
import { useEffect, useState } from "react";


interface Genre {
    id: number;
    name: string;
}

interface FetchGenresResponse {
    count: number;
    results: Genre[];
}

const useGenres = () => {

    const [genre, setGenres] = useState<Genre[]>([]);
    const [error, setError] = useState('');

    useEffect(() => {
        const controller = new AbortController();
        apiClient
            .get<FetchGenresResponse>('/genres', { signal: controller.signal })
            .then(res => setGenres(res.data.results))
            .catch(err => {
                if (err instanceof CanceledError) return;
                setError(err.message)
            });

        return () => controller.abort();
    }, []);

    return { genre, error }
}

export default useGenres;