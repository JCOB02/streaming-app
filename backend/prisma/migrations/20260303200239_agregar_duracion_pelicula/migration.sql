/*
  Warnings:

  - Added the required column `duracion` to the `peliculas` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "peliculas" ADD COLUMN     "duracion" INTEGER NOT NULL;
