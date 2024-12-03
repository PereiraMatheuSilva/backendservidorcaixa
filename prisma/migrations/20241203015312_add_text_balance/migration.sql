/*
  Warnings:

  - Added the required column `obsText` to the `Balance` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Balance" ADD COLUMN     "obsText" TEXT NOT NULL;
