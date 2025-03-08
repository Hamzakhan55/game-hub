import apiClient from "../services/api-client";
import { AxiosRequestConfig, CanceledError } from "axios";
import { useEffect, useState } from "react";




interface FetchResponse<T> {
    count: number;
    results: T[];
}

const useData = <T>(endpoint: string, _requestConfig?: AxiosRequestConfig, _deps?: any[]) => {

    const [data, setData] = useState<T[]>([]);
    const [error, setError] = useState('');

    useEffect(() => {
        const controller = new AbortController();
        apiClient
            .get<FetchResponse<T>>(endpoint, { signal: controller.signal, ..._requestConfig })
            .then(res => setData(res.data.results))
            .catch(err => {
                if (err instanceof CanceledError) return;
                setError(err.message)
            });

        return () => controller.abort();
    }, _deps ? [..._deps] : []);

    return { data, error }
}

export default useData;