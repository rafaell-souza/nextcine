import Tmdb from "@/tmdb-api/requests";
import { ErrorsHandler } from "@/errors/errors";
import MovieTbDetails from "../../../../interfaces/IDetails";

export async function GET(
    request: Request,
    { params }: { params: { id: string } }
) {
    try {
        const tmdb = new Tmdb();
        const details = await tmdb.RequestData<MovieTbDetails>(`/movie/${params.id}?`, "reload");
        
        return new Response(JSON.stringify(details), {
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