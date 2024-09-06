/*
  Warnings:

  - You are about to drop the `Favorite` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_FavoriteToUser` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "_FavoriteToUser" DROP CONSTRAINT "_FavoriteToUser_A_fkey";

-- DropForeignKey
ALTER TABLE "_FavoriteToUser" DROP CONSTRAINT "_FavoriteToUser_B_fkey";

-- DropTable
DROP TABLE "Favorite";

-- DropTable
DROP TABLE "_FavoriteToUser";
