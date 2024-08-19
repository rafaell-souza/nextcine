import Movies from "@/app/api/interfaces/movies";

const url: string = "https://api.themoviedb.org/3";

type Cache = "no-cache" | "reload" | "force-cache";

export default class Tmdb {
    async GetMovie(options: string, caching: Cache): Promise<Movies> {
        const cacheMethod: Cache = caching;
        const key = process.env.TMDB_API_KEY;

        const response: Movies = await fetch(`${url}${options}?api_key=${key}`, { cache: cacheMethod })
            .then((response) => response.json())
                .then((data) => {
                    return data;
                    }
                ).catch((error) => {
            console.error(error);
        });
        return response;
    }
}