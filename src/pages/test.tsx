import { offer } from '@prisma/client';
import { Decimal } from '@prisma/client/runtime';
import { NextPage } from 'next';
import { Head } from 'next/document'; // Correct import statement
import { useRouter } from 'next/router';
import { Key, ReactNode } from 'react';
import { useQuery } from 'react-query';
import { NavBarSeller } from '~/components/NavBarSeller';
import { api } from "~/utils/api";

interface Offer {
  description: ReactNode;
  numberofboxes: ReactNode;
  offer_id: number;
  price: Decimal;
}

interface LinkedOffer {
  offer: offer;
  next: LinkedOffer | null;
}

const OffersPage: NextPage = () => {
  const router = useRouter();
  const { user_id } = router.query;
  const { data: offersList } = api.offers.listOffers.useQuery();

  if (!offersList || offersList.length === 0) {
    return <div>No offers found for this seller.</div>
    router.push("/createanOffer");
  }

  // Create the linked list from the offers list
  let head: LinkedOffer | null = null;
  let prev: LinkedOffer | null = null;
  for (const offer of offersList) {
    const linkedOffer: LinkedOffer = {
      offer,
      next: null,
    };
    if (!head) {
      head = linkedOffer;
    }
    if (prev) {
      prev.next = linkedOffer;
    }
    prev = linkedOffer;
  }

  // Iterate over the linked list and display all offers that match the seller ID
  const matchedOffers: Offer[] = [];
  let current = head;
  while (current) {
    if (current.offer.seller_id === parseInt(user_id as string)) {
      matchedOffers.push({
        offer_id: current.offer.offer_id,
        price: current.offer.price as Decimal,
        numberofboxes : current.offer.numberofboxes ,
        description: current.offer.offer_description,
      });
    }
    current = current.next;
  }

  if (matchedOffers.length === 0) {
    return <div>No offers found for this seller.</div>;
  }
  console.log(matchedOffers);
 return (
  <div className="container mx-auto px-0">
    <NavBarSeller />
    <div className="container mx-auto px-6 p-4 ">
      <h1 className="mt-8 text-3xl font-bold text-green-500">Your Offers</h1>
      <p className="mt-4 text-gray-600">Find the offers you posted so far.</p>
      <div className="p-8 flex flex-wrap justify-start">
        {matchedOffers.map((offer) => (
          <div
            key={offer.offer_id}
            className="max-w-xs mx-2 my-4 rounded-md shadow-md overflow-hidden bg-white"
          >
            <div className="flex items-center justify-center h-110"> {/* Increase the height to 56 (or adjust as needed) */}
              <div className="bg-green-500 p-2">
                <img
                  src="/icons/restaurant.png"
                  alt="Offer"
                  className="object-cover object-center h-30 w-30 transform transition-all duration-500 hover:scale-110"
                />
              </div>
            </div>
            <div className="p-6">
              <p className="mt-2 -gray-600 mt-2">
                <strong>Offer ID</strong>:  {offer.offer_id}
              </p>
              <p className="mt-2 -gray-600 mt-2">
              <strong>Price</strong>:  DH {offer.price.toString()}
              </p>
              <p className="mt-2 -gray-600 mt-2">
              <strong>Description</strong>:  {offer.description}
              </p>
              <p className="mt-2 mr-2 -gray-600 mt-2">
              <strong >Number of Boxes</strong >:  {offer.numberofboxes}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

};

export default OffersPage;