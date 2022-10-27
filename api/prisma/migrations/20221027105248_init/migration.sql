/*
  Warnings:

  - Added the required column `country` to the `Movie` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Movie" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "title" TEXT NOT NULL,
    "imageSrc" TEXT NOT NULL,
    "year" TEXT NOT NULL,
    "country" TEXT NOT NULL
);
INSERT INTO "new_Movie" ("id", "imageSrc", "title", "year") SELECT "id", "imageSrc", "title", "year" FROM "Movie";
DROP TABLE "Movie";
ALTER TABLE "new_Movie" RENAME TO "Movie";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
