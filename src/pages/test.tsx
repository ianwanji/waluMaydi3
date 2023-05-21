import { offer } from '@prisma/client';
import { Decimal } from '@prisma/client/runtime';
import { NextPage } from 'next';
import { Head } from 'next/document'; // Correct import statement
import { useRouter } from 'next/router';
import { Key, ReactNode } from 'react';
import { useQuery } from 'react-query';
import { NavBarSeller } from '~/components/NavBarSeller';
import { api } from "~/utils/api";

import { useState } from "react";
import { FaSyncAlt, FaTrash } from 'react-icons/fa';

interface Offer {
  description: React.ReactNode;
  numberofboxes: React.ReactNode;
  offer_id: number;
  price: Decimal;
}

interface LinkedOffer {
  offer: offer;
  next: LinkedOffer | null;
}

const OffersPage: NextPage = () => {
  const deleteOfferMutation = api.offers.deleteOffer.useMutation();

  const router = useRouter();
  const { user_id } = router.query;
  const { data: offersList, refetch } = api.offers.listOffers.useQuery();
  const [deleteOfferId, setDeleteOfferId] = useState<number | null>(null);

  if (!offersList || offersList.length === 0) {
    return <div>No offers found for this seller.</div>;
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
        numberofboxes: current.offer.numberofboxes,
        description: current.offer.offer_description,
      });
    }
    current = current.next;
  }

  if (matchedOffers.length === 0) {
    router.push("/createanOffer");
    return null;
  }


  const handleDeleteOffer = async (offerId: number) => {
    try {
      deleteOfferMutation.mutateAsync({ offerId });
      setDeleteOfferId(offerId);
    } catch (error) {
      console.error("Error deleting offer:", error);
    }
  };

  const handleRefreshOffers = () => {
    refetch();
    setDeleteOfferId(null);
  };
  return (
    <div className="container mx-auto px-0">
      <NavBarSeller />
      <div className="container mx-auto px-6 p-4">
        <h1 className="mt-8 text-3xl font-bold text-green-500">Your Offers</h1>
        <p className="mt-4 text-gray-600">Find the offers you posted so far.</p>
        <div className="p-8 flex flex-wrap justify-start">
          {matchedOffers.map((offer) => (
            <div
              key={offer.offer_id}
              className="max-w-xs mx-2 my-4 rounded-md shadow-md overflow-hidden bg-white"
            >
              <div className="flex items-center justify-center h-110">
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
                  <strong>Offer ID</strong>: {offer.offer_id}
                </p>
                <p className="mt-2 -gray-600 mt-2">
                  <strong>Price</strong>: DH {offer.price.toString()}
                </p>
                <p className="mt-2 -gray-600 mt-2">
                  <strong>Description</strong>: {offer.description}
                </p>
                <p className="mt-2 mr-2 -gray-600 mt-2">
                  <strong>Number of Boxes</strong>: {offer.numberofboxes}
                </p>
                {deleteOfferId === offer.offer_id ? (
                  <p className="text-red-500">Offer deleted.</p>
                ) : (
                  <div className="relative">
                    <div className="flex items-center bg-red-500 px-4 py-2 rounded-md transition-colors duration-300 ease-in-out transform hover:bg-red-700">
                      <FaTrash className="mr-2 text-white" />
                      <button
                        className="text-white hover:text-red-200"
                        onClick={() => handleDeleteOffer(offer.offer_id)}
                      >
                        Delete
                      </button>
                    </div>
                    <div className="absolute right-0 bottom-0 bg-red-500 w-0 h-0 rounded-full transition-all duration-300 ease-in-out group-hover:w-6 group-hover:h-6 group-hover:opacity-0">
                      <FaTrash className="absolute inset-0 m-auto text-white" />
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-4 space-x-4">
          <button
            className="flex items-center justify-center px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition-colors duration-300 ease-in-out"
            onClick={handleRefreshOffers}
          >
            <FaSyncAlt className="mr-2" />
            Refresh Offers
          </button>
        </div>
      </div>
    </div>
  );
};

export default OffersPage;
