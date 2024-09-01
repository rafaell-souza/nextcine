import Tmdb from "@/tmdb-api/requests";
import { ErrorsHandler } from "@/errors/errors";
import IVideo from "@/app/interfaces/video";

export async function GET(
    request: Request,
    { params }: { params: { id: string } }
): Promise<Response> {
    try {
        const tmdb = new Tmdb();
        const video = await tmdb.RequestData<IVideo>(`/movie/${params.id}/videos?`, "reload") as IVideo;
        return new Response(JSON.stringify(video), {
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