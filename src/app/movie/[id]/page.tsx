"use client";

import MovieDetails from "@/app/interfaces/IDetails";
import IVideo from "@/app/interfaces/video";
import Header from "@/components/header";
import Toolbar from "@/components/Toolbar";
import requestData from "@/utilites/requestData";
import ICredits from "@/app/interfaces/ICredits";
import Carousel from "@/components/Carousel";
import SmallCard from "@/components/movieCard/small";
import Footer from "@/components/Footer";
import { useState, useEffect } from "react";

import { FaRegClock } from "react-icons/fa6";
import { CgCalendarDates } from "react-icons/cg";
import VideoComponent from "@/components/video";
import { LiaSpinnerSolid } from "react-icons/lia";

const imageBase = "https://image.tmdb.org/t/p/original";

type RecomendedMovies = {
    results: {
        id: number;
        title: string;
        poster_path: string;
    }[]
}

export default async function Movie({ params }: { params: { id: string } }) {
    const [details, setDetails] = useState<MovieDetails | null>();
    const [credits, setCredits] = useState<ICredits | null>();
    const [video, setVideo] = useState<IVideo | null>();
    const [similar, setSimilar] = useState<RecomendedMovies | null>();
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        (async () => {
            const details = await requestData<MovieDetails>(`/api/movies/details/${params.id}`, "no-cache");
            const video = await requestData<IVideo>(`/api/movies/video/${params.id}`, "no-cache");
            const credits = await requestData<ICredits>(`/api/movies/credits/${params.id}`, "no-cache");
            const similar = await requestData<RecomendedMovies>(`/api/movies/similar/${params.id}`, "no-cache");

            setDetails(details);
            setVideo(video);
            setCredits(credits);
            setSimilar(similar);
            setLoading(!loading);
        })();
    }, []);

    const trailer = video?.results?.find(video => video.type === "Trailer");
    const director = credits?.crew?.find(crew => crew.job === "Director");

    const movieHours = details && Number(details.runtime / 60).toFixed(0);
    const movieMinutes = details && Number(details.runtime % 60);

    return (
        <main className="w-full h-full relative">
            <Header />
            <Toolbar />

            {
                loading ? (
                    <div className="h-[360px] top-8 relative w-full flex justify-center items-center">
                        <span className="text-white text-4xl animate-spin"><LiaSpinnerSolid /> </span>
                    </div>
                ) : (
                    <>
                        <section className="w-full h-[370px] flex relative top-8">
                            <div className="bg-image-2 absolute w-full h-full z-20"></div>
                            <img
                                src={imageBase + details?.backdrop_path}
                                className="absolute h-full w-[910px] object-cover opacity-20"
                                alt={details?.title} />

                            <div className="h-full w-80 flex py-4 px-1 justify-center items-start relative">
                                <img src={imageBase + details?.poster_path} className="h-full w-full z-20 rounded" alt={details?.title} />
                            </div>

                            <div className="w-full h-full flex flex-col text-white p-4 z-20">
                                <h1 className="text-3xl font-bold mr-20">{`${details?.title} ( ${details?.release_date?.slice(0, 4)} )`}</h1>

                                <i className="text-zinc-500">{details?.tagline}</i>

                                <div className="mt-3">Genres:
                                    {
                                        details?.genres.map((genre, index) => (
                                            <span key={index} className="text-sm text-whit ml-1 rounded-full py-[3px]">{genre.name + (index < details?.genres?.length - 1 && " -")}</span>
                                        ))
                                    }
                                </div>

                                <div className="flex items-center mt-1">
                                    <div className="flex items-center">
                                        <span className="text-white text-[14px]"><FaRegClock /></span>
                                        <p className="ml-1 text-sm">{`${movieHours} h ${movieMinutes} min`}</p>
                                    </div>

                                    <div className="flex ml-2 items-start">
                                        <span className="text-[18px]"><CgCalendarDates /></span>
                                        <p className="text-sm ml-1">{details?.release_date}</p>
                                    </div>
                                </div>

                                <div className="flex flex-col mt-3 relative">
                                    <h2 className="text-xl">Sinopse</h2>
                                    <p className="text-sm mt-1 leading-tight mr-20 h-20 overflow-y-auto">{details?.overview}</p>
                                    <div className="pointer-events-none backdrop-blur-[1px] bottom-0 absolute w-full h-2"></div>
                                </div>

                                <div className="w-full flex mt-1">

                                    <div className="flex flex-col justify-start">
                                        <b>Director</b>
                                        <p className="text-xs">{director?.name}</p>
                                    </div>
                                    <VideoComponent trailer={trailer} />
                                </div>
                            </div>
                        </section>

                        <h1 className="text-white mt-10 w-full px-1 font-bold text-xl">You may also like</h1>
                        <section className="relative flex flex-col h-56 px-1 mt-1">
                            <Carousel>
                                {
                                    similar?.results?.map((movie, index) => {
                                        return (
                                            <SmallCard key={index} id={movie.id} title={movie.title} image={imageBase + movie.poster_path} />
                                        )
                                    })
                                }
                            </Carousel>
                        </section>
                        <Footer style="mt-4" />
                    </>
                )
            }
        </main>
    )
}