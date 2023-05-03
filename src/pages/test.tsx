

import { api } from '~/utils/api';
import { GetServerSidePropsContext, NextPage } from "next";
import { useForm } from "react-hook-form";
import { FaPlusCircle } from 'react-icons/fa';
import { offer } from '@prisma/client';
import { useRouter } from 'next/router';
import { useState } from 'react';


  
  type LinkedOffer = {
    Offer: offer;
    next: LinkedOffer | null;
  };
  
  type OfferPageProps = {
    offersList: offer[];
  };
  
  const OfferPage: NextPage<OfferPageProps> = ({ offersList }) => {
    const router = useRouter();
  
    if (offersList) {
      let head: LinkedOffer | null = null;
      let prev: LinkedOffer | null = null;
  
      for (const Offer of offersList) {
        const linkedOffer: LinkedOffer = {
          Offer,
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
        // Check if seller id exists in linked list
      let current = head;
      let offersFound = false;
      while (current) {
        router.push(`/users/${current.Offer.seller_id}`);
        if (current.Offer.seller_id === parseInt(router.query.seller_id as string)) {
          offersFound = true;
          console.log(`Offer found: ${JSON.stringify(current.Offer)}`);
        }
        current = current.next;
      }
  
      if (!offersFound) {
        console.log("No offers found.");
      }
    }
  
    return <div>Offer Page</div>;
  };
  
  interface OfferCardProps {
    Offer: offer;
  }
  
  const OfferCard: React.FC<OfferCardProps> = ({ Offer }) => {
    return (
      <div key={Offer.offer_id} className="max-w-md mx-auto rounded-md shadow-md overflow-hidden bg-white">
        <div className={`relative h-48 ${Offer.numberofboxes === 0 ? 'bg-gray-400' : 'bg-gradient-to-b from-green-400 to-green-600'}`}>
          <img
            className="object-cover object-center h-full w-full transform transition-all duration-500 hover:scale-110"
            src="/icons/restaurant.png"
            alt=""
          />
          {Offer.numberofboxes === 0 && (
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold">Sold Out</span>
            </div>
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
          {Offer.numberofboxes === 0 ? (
            <p className="mb-3 text-red-500 text-sm font-medium">Sold Out</p>
          ) : (
            <p className="mb-3 text-gray-500 text-sm font-medium">{Offer.numberofboxes} boxes available</p>
          )}
          {Offer.offer_description && (
            <p className="mb-3 text-gray-500 text-sm font-medium">{Offer.offer_description}</p>
          )}
        </div>
      </div>
    );
  };
  
  export default OfferPage;