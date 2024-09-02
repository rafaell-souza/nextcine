import Tmdb from "@/tmdb-api/requests";
import { ErrorsHandler } from "@/errors/errors";
import Genres from "@/app/interfaces/genres";

export async function GET(request: Request) {
    try {
        const tmdb = new Tmdb();
        const genres = await tmdb.RequestData<Genres>(`/genre/movie/list?`, "force-cache");

        return new Response(JSON.stringify(genres), {
            headers: { "content-type": "application/json" },
            status: 200,
        });
    }
    catch (error) {
        if (error instanceof ErrorsHandler) {
            return new Response(error.message, {
                headers: { "content-type": "application/json" },
                status: error.status,
            });
        }
        
        else {
            return new Response("Internal Server Error", {
                headers: { "content-type": "application/json" },
                status: 500,
            });
        }
    }
}