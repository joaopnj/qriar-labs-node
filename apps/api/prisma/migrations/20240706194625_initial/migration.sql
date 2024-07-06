/*
  Warnings:

  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.

*/
-- CreateEnum
CREATE TYPE "Status" AS ENUM ('REALIZED', 'WAITING_PAYMENT', 'PAYMENT_APROVED', 'DELIVERING', 'DELIVERED');

-- DropTable
DROP TABLE "User";

-- CreateTable
CREATE TABLE "Order" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "locator" TEXT NOT NULL,

    CONSTRAINT "Order_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "History" (
    "id" SERIAL NOT NULL,
    "status" "Status" NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "orderId" INTEGER,

    CONSTRAINT "History_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Order_locator_key" ON "Order"("locator");

-- AddForeignKey
ALTER TABLE "History" ADD CONSTRAINT "History_orderId_fkey" FOREIGN KEY ("orderId") REFERENCES "Order"("id") ON DELETE SET NULL ON UPDATE CASCADE;
