/*
  Warnings:

  - You are about to drop the column `ruta_imagen_fondo` on the `peliculas` table. All the data in the column will be lost.
  - You are about to drop the column `ruta_trailer` on the `peliculas` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "peliculas" DROP COLUMN "ruta_imagen_fondo",
DROP COLUMN "ruta_trailer";
