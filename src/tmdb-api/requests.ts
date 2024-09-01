const url: string = "https://api.themoviedb.org/3";

type Cache = "no-cache" | "reload" | "force-cache";

export default class Tmdb {
    async RequestData<T>(options: string, caching: Cache): Promise<T> {
        const cacheMethod: Cache = caching;
        const key = process.env.TMDB_API_KEY;

        console.log(`${url}${options}?api_key=${key}`);

        const response = await fetch(`${url}${options}api_key=${key}`, { cache: cacheMethod })
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