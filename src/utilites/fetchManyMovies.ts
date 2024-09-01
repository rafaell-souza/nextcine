"use client";

import { useState, useCallback, useEffect } from "react"
import requestData from "@/utilites/requestData";

import Movies from "@/app/interfaces/movies";

const fetchManyMovies = (
    ref: React.MutableRefObject<HTMLDivElement | null>, query: string
) => {
    const [data, setData] = useState<Movies>({
        page: 0,
        total_pages: 0,
        total_results: 0,
        results: []
    });

    const [pageNumber, setPageNumber] = useState<number>(1);
    const [loading, setLoading] = useState<boolean>(false);

    useEffect(() => {
        setData({
            page: 0,
            total_pages: 0,
            total_results: 0,
            results: []
        });
    }, [query])

    useEffect(() => {
        setLoading(true);
        const request = async () => {
            try {
                const response = await requestData<Movies>(`/api/movies/find/${query}/${pageNumber}`, "no-cache");

                if (response) {
                    if (data.total_pages === 0 || response.page > pageNumber) {
                        setData(response);
                    } else {
                        setData({
                            ...data,
                            results: [...data.results, ...response.results]
                        });
                    }
                } setLoading(false);
            }
            catch (error) {
                setLoading(false);
                console.error(error);
            }
        }
        request();
    }, [query, pageNumber])

    return { data, loading }
}

export default fetchManyMovies;