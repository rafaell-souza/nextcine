"use client";

import { useState, useCallback, useEffect } from "react";
import requestData from "@/utilites/requestData";

import Movies from "@/app/interfaces/movies";

const fetchManyMovies = (
    ref: React.MutableRefObject<IntersectionObserver | null>, 
    url: string,
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
        setPageNumber(1); 
    }, [url]);

    useEffect(() => {
        const request = async () => {
            if (loading) return;
            if (pageNumber > data.total_pages && data.total_pages !== 0) {
                return; 
            }

            setLoading(true);
            try {
                const response = await requestData<Movies>(`${url}${pageNumber}`, "no-cache");

                if (response) {
                    setData(prevData => ({
                        ...response,
                        results: pageNumber === 1 ? response.results : [...prevData.results, ...response.results]
                    }));
                }
                setLoading(false);
            } catch (error) {
                setLoading(false);
                console.error(error);
            } 
        };

        request();
    }, [url, pageNumber, url]);

    const pagination = useCallback((node) => {
        if (loading) return;
        if (ref.current) ref.current.disconnect();

        ref.current = new IntersectionObserver(entries => {
            if (entries[0].isIntersecting && pageNumber < data.total_pages) {
                setPageNumber(prev => prev + 1);
            }
        });

        if (node) ref.current.observe(node);
    }, [loading, pageNumber, data.total_pages, ref]);

    return { data, loading, pagination };
};

export default fetchManyMovies;
