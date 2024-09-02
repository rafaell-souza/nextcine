"use client";

import Header from "@/components/header";
import Toolbar from "@/components/Toolbar";

import fetchManyMovies from "@/utilites/fetchManyMovies";

import { useRef } from "react";

const GenrePage = ({ params }: { params: { id: string } }) => {
    const { id } = params;
    const url = `http://localhost:3000/api/genre/${id}/`;
    const ref = useRef<IntersectionObserver | null>(null);

    const { data, loading, pagination } = fetchManyMovies(ref, url);

    return (
        <>
            <Header />
            <Toolbar />

            <section className="relative top-8 w-full h-full px-1 border">
            </section>
        </>
    )
}

export default GenrePage;