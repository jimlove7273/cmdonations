-- CreateTable
CREATE TABLE "Friends" (
    "id" SERIAL NOT NULL,
    "friendId" INTEGER NOT NULL,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "chineseName" TEXT,
    "address" TEXT,
    "city" TEXT,
    "state" TEXT,
    "zipCode" TEXT,
    "country" TEXT,
    "phone" TEXT,
    "email" TEXT NOT NULL,
    "DNS" BOOLEAN NOT NULL,
    "Notes" TEXT,

    CONSTRAINT "Friends_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Donations" (
    "id" SERIAL NOT NULL,
    "donationDate" TIMESTAMP(3) NOT NULL,
    "Type" TEXT NOT NULL,
    "Check" TEXT,
    "Amount" DOUBLE PRECISION NOT NULL,
    "For" TEXT,
    "Notes" TEXT,
    "friendsId" INTEGER,

    CONSTRAINT "Donations_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Donations" ADD CONSTRAINT "Donations_friendsId_fkey" FOREIGN KEY ("friendsId") REFERENCES "Friends"("id") ON DELETE SET NULL ON UPDATE CASCADE;
