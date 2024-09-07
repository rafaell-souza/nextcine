"use client";

import requestData from "@/utilites/requestData";
import { useState, useEffect } from "react";
import Genres from "@/app/interfaces/genres";

export default function useGenres() {
    const [genres, setGenres] = useState<Genres>();

    useEffect(() => {
        async function getGenres() {
            try {
                const data = await requestData<Genres>("/api/movies/genres/list", "force-cache");
                if (data) setGenres(data);
            }
            catch (error) {
                console.error(error);
            }
        }
        getGenres();
    }, []);

    return genres?.genres;
}