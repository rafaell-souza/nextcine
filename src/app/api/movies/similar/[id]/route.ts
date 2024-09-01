import Tmdb from "@/tmdb-api/requests";
import { ErrorsHandler } from "@/errors/errors";

export async function GET(
    request: Request,
    { params }: { params: { id: string } }
): Promise<Response> {
    try {
        const tmdb = new Tmdb();
        const similarMovies = await tmdb.RequestData(`/movie/${params.id}/similar?`, "no-cache");
        return new Response(JSON.stringify(similarMovies), {
            headers: { "Content-Type": "application/json" },
            status: 200
        });
    }
    catch (error) {
        if (error instanceof ErrorsHandler) {
            return new Response(error.message, {
                headers: { "Content-Type": "application/json" },
                status: error.status
            });
        }

        else {
            return new Response("Internal error server", {
                headers: { "Content-Type": "application/json" },
                status: 500
            });
        }
    }
}