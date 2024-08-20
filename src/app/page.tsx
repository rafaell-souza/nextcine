import Toolbar from "@/components/Toolbar";
import BigCard from "../components/movieCard/big";
import SmallCard from "../components/movieCard/small";
import Carousel from "@/components/Carousel";
import Header from "@/components/header";

import requestData from "../utilites/requestData";

import HomeInterface from "./interfaces/homeInterface";

const url = "http://localhost:3000/api/movies";
const imageUrlBase = "https://image.tmdb.org/t/p/original";

export default async function Home() {
  const movies = await requestData<HomeInterface>(url, "force-cache");

  return (
    <main className="flex">
      <Header />
      <Toolbar />
      <section className="relative top-8 h-screen">

        <section className="flex overflow-x-hidden relative w-[905px] h-[360px]">
          {
            movies?.trending && movies?.trending?.results?.slice(0, 10).map((movie) => {
              return (
                <BigCard
                  key={movie.id}
                  id={movie.id}
                  title={movie.title}
                  image={imageUrlBase + movie.backdrop_path}
                  release={movie.release_date}
                  overview={movie.overview} />
              )
            }
            )
          }
        </section>

        <h1 className="text-xl text-white px-1 mb-1">POPULAR</h1>

        <section className="flex text-white relative h-48 mb-8 w-[905px]">
          <div className="smallcard-container-background pointer-events-none absolute w-12 h-full z-30 rotate-180 left-0"></div>
          <Carousel>
            {
              movies?.popular && movies?.popular?.results?.map((movie) => {
                return (
                  <SmallCard
                    key={movie.id}
                    id={movie.id}
                    title={movie.title}
                    image={imageUrlBase + movie.poster_path}
                    rate={movie.vote_average} />
                )
              }
              )
            }
          </Carousel>
          <div className="smallcard-container-background pointer-events-none absolute h-full z-20 w-12 right-0"></div>
        </section>

        <h1 className="text-xl text-white px-1 mb-1">TOP RATED</h1>

        <section className="flex text-white relative h-48 mb-12 w-[905px]">
          <div className="smallcard-container-background pointer-events-none absolute w-12 h-full z-30 rotate-180 left-0"></div>
          <Carousel>
            {
              movies?.topRated && movies?.topRated?.results?.map((movie) => {
                return (
                  <SmallCard
                    key={movie.id}
                    id={movie.id}
                    title={movie.title}
                    image={imageUrlBase + movie.poster_path}
                    rate={movie.vote_average} />
                )
              }
              )
            }
          </Carousel>
          <div className="smallcard-container-background pointer-events-none absolute h-full z-20 w-12 right-0"></div>
        </section>

        <h1 className="text-xl text-white px-1 mb-1">SOON</h1>

        <section className="flex text-white relative h-48 mb-8 w-[905px]">
          <div className="smallcard-container-background pointer-events-none absolute w-12 h-full z-30 rotate-180 left-0"></div>
          <Carousel>
            {
              movies?.upcoming && movies?.upcoming?.results?.map((movie) => {
                return (
                  <SmallCard
                    key={movie.id}
                    id={movie.id}
                    title={movie.title}
                    image={imageUrlBase + movie.poster_path}
                    rate={movie.vote_average} />
                )
              }
              )
            }
          </Carousel>
          <div className="smallcard-container-background pointer-events-none absolute h-full z-20 w-12 right-0"></div>
        </section>

        <h1 className="text-xl text-white px-1 mb-1">TRENDING</h1>

        <section className="flex text-white relative h-48 mb-8 w-[905px]">
          <div className="smallcard-container-background pointer-events-none absolute w-12 h-full z-30 rotate-180 left-0"></div>
          <Carousel>
            {
              movies?.trending && movies?.trending?.results?.map((movie) => {
                return (
                  <SmallCard
                    key={movie.id}
                    id={movie.id}
                    title={movie.title}
                    image={imageUrlBase + movie.poster_path}
                    rate={movie.vote_average} />
                )
              }
              )
            }
          </Carousel>
          <div className="smallcard-container-background pointer-events-none absolute h-full z-20 w-12 right-0"></div>
          </section>

      </section>
    </main>
  );
}
