"use client";

import Header from "@/components/header";
import Toolbar from "@/components/Toolbar";
import fetchManyMovies from "@/utilites/fetchManyMovies";
import { useRef } from "react";
import { LiaSpinnerSolid } from "react-icons/lia";
import SmallCard from "@/components/movieCard/small";
import Footer from "@/components/Footer";

const urlBaseImage = "https://image.tmdb.org/t/p/original";

const GenrePage = ({ params }: { params: { id: string } }) => {
    const { id } = params;
    const url = `http://localhost:3000/api/movies/genres/${id}/`;
    const ref = useRef<IntersectionObserver | null>(null);

    const { data, loading, pagination } = fetchManyMovies(ref, url);
    console.log(data)
    return (
        <>
            <Header />
            <Toolbar />

            <section className="relative top-8 w-full h-full px-1">
                {
                    loading && data?.results.length === 0 ? (
                        <div className="h-[360px] w-full flex justify-center items-center">
                            <span className="text-white text-3xl animate-spin"><LiaSpinnerSolid /> </span>
                        </div>
                    ) : (
                        <>
                            <div className="grid grid-cols-6 gap-4">
                                {
                                    data.results.map((movie, index) => (
                                        <div key={index} ref={data?.results?.length - 1 === index ? pagination : null}>
                                            <SmallCard
                                                id={movie.id}
                                                title={movie.title}
                                                image={`${urlBaseImage}${movie.poster_path}`}
                                            />
                                        </div>
                                    ))
                                }
                            </div>
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
                    )
                }
            </section>
        </>
    )
}

export default GenrePage;