import Movies from "@/app/interfaces/movies";
import Tmdb from "@/tmdb-api/requests";
import { ErrorsHandler } from "@/errors/errors";

export async function GET(
    request: Request,
    { params }: { params: { movieName: string, page: number } }
) {
    try {
        const { movieName, page } = params;

        const tmdb = new Tmdb();
        const searchName = await tmdb.RequestData<Movies>(`/search/movie?query=${movieName}&page=${page}&`, "no-cache");

        return new Response(JSON.stringify(searchName), {
            status: 200,
            headers: { "Content-Type": "application/json" }
        }
        );
    }
    catch (error) {
        if (error instanceof ErrorsHandler) {
            return new Response(error.message, {
                status: error.status,
                headers: { "Content-Type": "application/json" }
            });
        }

        return new Response("Internal Server Error", {
            status: 500,
            headers: { "Content-Type": "application/json" }
        });
    }
}