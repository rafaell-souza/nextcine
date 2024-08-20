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

        <h1 className="text-2xl text-white px-1 mb-1">POPULAR</h1>

        <section className="flex text-white px-1 relative w-[905px]">
            <div className="color-class"></div> {/* background image black for each side of the container.*/}
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
            <div className="color-class"></div> {/* background image black for each side of the container.*/}
        </section>

      </section>
    </main>
  );
}
