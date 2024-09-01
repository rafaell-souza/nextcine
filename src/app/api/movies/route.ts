import Movies from "../../interfaces/movies";
import Tmdb from "@/tmdb-api/requests";
import { ErrorsHandler } from "@/errors/errors";

export async function GET(): Promise<Response> {
    try {
        const tmdb = new Tmdb();
        const popular: Movies = await tmdb.RequestData("/movie/popular?", "force-cache");
        const topRated: Movies = await tmdb.RequestData("/movie/top_rated?", "force-cache");
        const upcoming: Movies = await tmdb.RequestData("/movie/upcoming?", "force-cache");
        const nowPlaying: Movies = await tmdb.RequestData("/movie/now_playing?", "force-cache");
        const trending: Movies = await tmdb.RequestData("/trending/movie/week?", "force-cache");

        return new Response(JSON.stringify({
            popular: popular,
            topRated: topRated,
            upcoming: upcoming,
            nowPlaying: nowPlaying,
            trending: trending
        }), {
            headers: { "Content-Type": "application/json" },
            status: 200
        });
    }

    catch (error) {
        if (error instanceof ErrorsHandler) {
            return new Response(error.message, {
                headers: { "Content-Type": "application/json" },
                status: error.status,
            });
        }
        else {
            return new Response("Internal Server Error", {
                headers: { "Content-Type": "application/json" },
                status: 500
            });
        }
    }
}
