import prisma from "../../prisma/client";

async function UnfavoriteMovie(movieId: string, userId: string) {
    return await prisma.favorite.delete({
        where: {
            movieId: movieId,
            userId: userId
        }
    })
}

export default UnfavoriteMovie;
