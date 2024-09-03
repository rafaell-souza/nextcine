import prisma from "../../prisma/client";

async function FavoriteMovie(movieId: string, userId: string) {
    return await prisma.favorite.create({
        data: {
            movieId,
            userId
        }
    });
}

export default FavoriteMovie;