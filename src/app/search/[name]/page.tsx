'use client';

import Movies from "@/app/interfaces/movies";
import Footer from "@/components/Footer";
import Header from "@/components/header";
import Toolbar from "@/components/Toolbar";
import SmallCard from "@/components/movieCard/small";
import fetchManyMovies from "@/utilites/fetchManyMovies";

import { LiaSpinnerSolid } from "react-icons/lia";

import { useRef } from "react";
import Link from "next/link";

const tmdbBaseImageUrl = "https://image.tmdb.org/t/p/w500";

const SearchPage = (
    { params }: { params: { name: string } }
) => {
    const { name } = params;
    const ref = useRef<HTMLDivElement | null>(null);

    const { data, loading } = fetchManyMovies(ref, name) as { data: Movies, loading: boolean };

    return (
        <>  <Header />
            <Toolbar />
            <section className="relative top-8 w-full h-full px-1">
                {
                    loading ? (
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
                                        <SmallCard
                                            key={index}
                                            id={movie.id}
                                            title={movie.title}
                                            image={tmdbBaseImageUrl + movie.poster_path}
                                        />
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
                        </>
                    ) : (
                        <div className="h-[360px] w-full flex flex-col border">
                            <span className="text-white pt-4 border-b border-zinc-900 font-bold text-lg">{`No results found for: ${name}`}</span>
                            <div className="w-full h-full border flex justify-center items-center">
                                <Link href="/" className="text-white rounded-full bg-zinc-900 py-1 px-3 text-lg">Go back to home</Link>
                            </div>
                        </div>
                    )
                }
            </section>
        </>
    )
}

export default SearchPage;