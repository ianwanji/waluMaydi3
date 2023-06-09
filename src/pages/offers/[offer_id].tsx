/* eslint-disable @typescript-eslint/consistent-type-imports */
/* eslint-disable @typescript-eslint/no-floating-promises */
/* eslint-disable react/no-unescaped-entities */



/* eslint-disable @typescript-eslint/consistent-type-imports */
/* eslint-disable @typescript-eslint/no-floating-promises */
/* eslint-disable react/no-unescaped-entities */



import Image from 'next/image'
import { useRouter } from "next/router";
import { api } from "~/utils/api";
import { NextPage } from "next";
import {
  FaMoneyBillAlt,
  FaFacebook,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";
import { IoMdInformationCircle } from "react-icons/io";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useState } from 'react';
import { NavBarCus } from '~/components/NavBarCus';


const OfferView: NextPage = () => {
  const router = useRouter();
  const [reserved, setReserved] = useState(false);
  const updateOffer = api.offers.updateOffer.useMutation();

  const [RemainingBoxes, setRemainingBoxes] = useState<number | undefined>(undefined);
  const offer = api.offers.getOffer.useQuery(
    {
      offerid: router.query.offer_id as string,
    }
  );
  const offerItem = offer.data;
  const handleReserveClick = async () => {
    const offer = await updateOffer.mutateAsync({
      offerId: parseInt(router.query.offer_id as string),
    });
  
    if (typeof offer.numberofboxes === "number") {
      setRemainingBoxes(offer.numberofboxes);
      setReserved(true);
    }
  };


  return (
    <>
 
      <div className="bg-gray-100 py-8">
      <NavBarCus /> 

      </div>
      <main className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <div className="flex justify-center items-center">
            <Image
              className="rounded-lg shadow-md w-full max-w-md"
              src="/icons/cooking.png"
              alt="Restaurant"
              width={200}
              height={200}
            />
          </div>
          <div className="flex flex-col justify-center">
            <h2 className="mb-4 text-3xl font-bold">Product Details</h2>
            <p className="mb-6 text-lg text-gray-600">
              <IoMdInformationCircle className="mr-2 inline-block text-xl" />
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
              vel nibh sit amet tellus vulputate posuere. Suspendisse potenti.
              Donec quis ipsum sed elit gravida suscipit. Ut facilisis malesuada
              blandit. Nam posuere augue vel sem dignissim lobortis. Aliquam nec
              nibh dolor.
            </p>
            {offerItem && (
            <div className="mb-8">
              <p className="mb-2 text-2xl font-bold text-green-500">
                <FaMoneyBillAlt className="mr-2 inline-block text-xl" />
                DH{offerItem.price.toString()}
              </p>
              <p className="text-xl font-bold text-gray-600">
              {offerItem.numberofboxes} Boxes Available
              </p>
            </div>
            )}
            <div className="mb-8">
              <p className="mb-2 text-xl font-bold text-gray-600">
                Share:
              </p>
              <div className="flex items-center">
                <FaFacebook
                  className="mr-4 cursor-pointer text-2xl text-blue-500"
                  onClick={() =>
                    window.open(
                      'https://www.facebook.com/sharer/sharer.php?u=' +
                        window.location.href
                    )
                  }
                /> 


{/* continue the code */}


   {offerItem && (
            <FaTwitter
              className="mr-4 cursor-pointer text-2xl text-blue-400"
              onClick={() =>
                window.open(
                  'https://twitter.com/intent/tweet?url=' +
                    encodeURIComponent(window.location.href) +
                    '&text=' +
                    encodeURIComponent(
                      `Check out this amazing offer: ${offerItem.offer_id}!`
                    )
                )
              }
            />)}
            {offerItem && (
            <FaLinkedin
              className="mr-4 cursor-pointer text-2xl text-blue-700"
              onClick={() =>
                window.open(
                  'https://www.linkedin.com/shareArticle?url=' +
                    encodeURIComponent(window.location.href) +
                    '&title=' +
                    encodeURIComponent(offerItem.offer_id)
                )
              }
            />)}
          </div>
        </div>
        {offerItem && offerItem.numberofboxes && !reserved && (
  <button
    className="bg-green-500 py-2 px-4 rounded-lg text-white font-bold shadow-lg hover:bg-green-600 transition-colors duration-300"
    onClick={handleReserveClick}
  >
    Reserve now
  </button>
)}

{reserved && (
  <p className="text-xl text-green-500 font-bold mt-4">
    Reserved!
  </p>
)}
{offerItem && RemainingBoxes === 0 && (
  <p className="text-xl text-red-500 font-bold mt-4">
    Out of stock
  </p>
)}
      </div>
    </div>
  </main>
</>
);
}

export default OfferView;