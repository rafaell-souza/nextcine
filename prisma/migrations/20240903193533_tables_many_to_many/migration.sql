/*
  Warnings:

  - A unique constraint covering the columns `[movieId]` on the table `Favorite` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE "Favorite" DROP CONSTRAINT "Favorite_userId_fkey";

-- CreateTable
CREATE TABLE "_FavoriteToUser" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_FavoriteToUser_AB_unique" ON "_FavoriteToUser"("A", "B");

-- CreateIndex
CREATE INDEX "_FavoriteToUser_B_index" ON "_FavoriteToUser"("B");

-- CreateIndex
CREATE UNIQUE INDEX "Favorite_movieId_key" ON "Favorite"("movieId");

-- AddForeignKey
ALTER TABLE "_FavoriteToUser" ADD CONSTRAINT "_FavoriteToUser_A_fkey" FOREIGN KEY ("A") REFERENCES "Favorite"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_FavoriteToUser" ADD CONSTRAINT "_FavoriteToUser_B_fkey" FOREIGN KEY ("B") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
