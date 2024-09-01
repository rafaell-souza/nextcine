'use client';

import Movies from "@/app/interfaces/movies";
import Footer from "@/components/Footer";
import Header from "@/components/header";
import Toolbar from "@/components/Toolbar";
import SmallCard from "@/components/movieCard/small";
import fetchManyMovies from "@/utilites/fetchManyMovies";

import { LiaSpinnerSolid } from "react-icons/lia";
import { PiFilmSlateFill } from "react-icons/pi";

import { useRef } from "react";
import Link from "next/link";

const tmdbBaseImageUrl = "https://image.tmdb.org/t/p/w500";

const SearchPage = (
    { params }: { params: { name: string } }
) => {
    const { name } = params;
    const ref = useRef<IntersectionObserver | null>(null);

    const { 
        data, 
        loading, 
        pagination } = fetchManyMovies(ref, name) as { data: Movies, loading: boolean, pagination: () => void };

    return (
        <>  <Header />
            <Toolbar />
            <section className="relative top-8 w-full h-full px-1">
                {
                    loading && data?.results.length === 0 ? (
                        <div className="h-[360px] w-full flex justify-center items-center">
                            <span className="text-white text-3xl animate-spin"><LiaSpinnerSolid /> </span>
                        </div>
                    ) : data?.results?.length > 0 ? (
                        <>
                            <header className="pt-4 pl-4 border-b border-zinc-900">
                                <h1 className="text-white font-bold text-xl">{`Found ${data.total_results} results for: ${name}`}</h1>
                            </header>
                            <div className="gap-y-5 py-3 grid grid-cols-6 pl-4">
                                {
                                    data.results.map((movie, index) => (
                                        <div ref={index === data.results.length -1 ? pagination : null} key={index}>
                                            <SmallCard
                                                id={movie.id}
                                                title={movie.title}
                                                image={tmdbBaseImageUrl + movie.poster_path}
                                            />
                                        </div>
                                    ))
                                }
                            </ div>
                            {
                                loading && (
                                    <div className="w-full pt-2 border-t border-zinc-900 flex items-center justify-center">
                                        <span className="text-white flex text-5xl animate-spin"><LiaSpinnerSolid /> </span>
                                        <p className="ml-1 text-md text-white">LOADING</p>
                                    </div>
                                )
                            }
                            <Footer />
                        </>
                    ) : data?.total_results === 0 && (
                        <div className="h-[360px] w-full flex flex-col">
                            <span className="text-white pt-4 border-b border-zinc-900 font-bold text-lg">{`No results found for: ${name}`}</span>
                            <div className="w-full h-full flex flex-col justify-center items-center">

                                <span className="text-white text-7xl"><PiFilmSlateFill /></span>

                                <Link href="/" className="text-white font-bold border-b mb-8 py- border-zinc-800 hover:opacity-80 px-2 text-lg">Back to home</Link>

                            </div>
                        </div>
                    )
                }
            </section>
        </>
    )
}

export default SearchPage;