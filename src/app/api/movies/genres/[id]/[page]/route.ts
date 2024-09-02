import Tmdb from "../../../../../..//tmdb-api/requests";
import { ErrorsHandler } from "../../../../../../errors/errors";

export async function GET(
    request: Request,
    { params }: { params: { id: string; page: string } }
) {
    try {
        const tmdb = new Tmdb();
        const findMoviesWithGere = await tmdb.RequestData(`/discover/movie?with_genres=${params.id}&page=${params.page}&`, "force-cache");

        return new Response(JSON.stringify(findMoviesWithGere), {
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