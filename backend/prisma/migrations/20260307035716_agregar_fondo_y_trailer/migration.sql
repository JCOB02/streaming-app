/*
  Warnings:

  - Added the required column `ruta_imagen_fondo` to the `peliculas` table without a default value. This is not possible if the table is not empty.
  - Added the required column `ruta_trailer` to the `peliculas` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "peliculas" ADD COLUMN     "ruta_imagen_fondo" VARCHAR(500) NOT NULL,
ADD COLUMN     "ruta_trailer" VARCHAR(500) NOT NULL;
