/* eslint-disable */
/* eslint-disable @typescript-eslint/consistent-type-imports */
/* eslint-disable @typescript-eslint/no-floating-promises */
/* eslint-disable react/no-unescaped-entities */


import { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { api } from "~/utils/api";
import { offer } from "@prisma/client";

import { FaArrowCircleRight } from 'react-icons/fa';
import { NavBarCus } from "~/components/NavBarCus";

type CardProps = {
  Offer: offer;
};

function Card({ Offer }: CardProps) {
  const isFinished = Offer.numberofboxes === 0;

  return (
    <div className="max-w-md mx-auto rounded-md shadow-md overflow-hidden bg-white">
      <div className={`relative h-48 ${Offer.numberofboxes === 0 ? 'bg-gray-400' : 'bg-gradient-to-b from-green-400 to-green-600'}`}>
        <Image
          className="object-cover object-center h-full w-full transform transition-all duration-500 hover:scale-110"
          src="/icons/restaurant.png"
          alt=""
          fill
        />
        {isFinished && (
          <Image
            className="absolute top-0 right-0 w-12 h-12 animate-bounce"
            src="/icons/sales.gif"
            alt="Sold out"
          />
        )}
      </div>
      <div className="p-6">
        <div className="flex items-baseline">
          <span className="bg-green-200 text-green-800 text-xs px-2 inline-block rounded-full  uppercase font-semibold tracking-wide">
            {Offer.seller_id}
          </span>
          <p className="ml-2 text-gray-600 uppercase text-xs font-semibold tracking-wide">
            DH {Offer.price.toString()}
          </p>
        </div>
        {isFinished ? (
          <p className="mb-3 text-red-500 text-sm font-medium">Sold Out</p>
        ) : (
          <p className="mb-3 text-gray-500 text-sm font-medium">{Offer.numberofboxes} boxes available</p>
        )}
        {!isFinished && (
          <Link
            href={`/offers/${Offer.offer_id}`}
            className="inline-flex items-center bg-green-600 text-white px-3 py-2 rounded-lg font-semibold text-sm uppercase tracking-wide hover:bg-green-700 focus:outline-none focus:bg-green-700 focus:ring-2 focus:ring-green-400"
          >
            View Offer
            <span className="ml-2">
              <FaArrowCircleRight />
            </span>
          </Link>
        )}
      </div>
    </div>
  )
}
  
const OffersPage: NextPage = () => {
  const offersList = api.offers.listOffers.useQuery();
  
  return (
    <>
      <Head>
        <title>Walu Maydi3 | Offers for Sale</title>
        <meta name="description" content="Find the latest offers for sale on Walu Maydi3" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBarCus />

      <main className="container mx-auto flex flex-col gap-12 bg-gray-100 p-4">
      <h1 className="mt- 4 text-2xl font-bold text-green-500">Today's Offers</h1>
        <p className="mt-1 text-gray-600">Limited quantity! Get them before they're gone.</p>

    {offersList.isLoading && <p>Loading...</p>}

    {offersList.data && (
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {offersList.data.map((offer) => (
          <Card key={offer.offer_id} Offer={offer} />
        ))}
      </div>
    )}

    {offersList.isError && <p>Error loading offers...</p>}
  </main>
</>
);
};

export default OffersPage;