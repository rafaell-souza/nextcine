/*
  Warnings:

  - You are about to drop the column `movie_path` on the `Favorite` table. All the data in the column will be lost.
  - Added the required column `movieId` to the `Favorite` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Favorite" DROP COLUMN "movie_path",
ADD COLUMN     "movieId" VARCHAR(25) NOT NULL;
