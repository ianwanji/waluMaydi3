
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

const OfferView: NextPage = () => {
  const router = useRouter();

  const offer = api.offers.getOffer.useQuery(
    {
      offerid: router.query.offer_id as string,
    },
    {
      enabled: !!router.query.offer_id,
    }
  );

  if (offer.error) {
    // Render error state
    return <div>Error: {offer.error.message}</div>;
  }

  const offerItem = offer.data;

  if (!offerItem) {
    return null;
  }

  return (
    <>
      <div className="bg-gray-100 py-8"></div>
      <main className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <div className="flex justify-center items-center">
            <Image
              className="rounded-lg shadow-md w-full max-w-md"
              src="/icons/cooking.png"
              alt="Restaurant"
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
            <div className="mb-8">
              <p className="mb-2 text-2xl font-bold text-green-500">
                <FaMoneyBillAlt className="mr-2 inline-block text-xl" />
                DH{offerItem.price.toString()}
              </p>
              <p className="text-xl font-bold text-gray-600">
                {offerItem.numberofboxes} Boxes Available
              </p>
            </div>
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
                <FaTwitter
                  className="mr-4 cursor-pointer text-2xl text-blue-400"
                  onClick={() =>
                    window.open(
                      'https://twitter.com/intent/tweet?text=Check out this offer: ' +
                        window.location.href
                    )
                  }
                />
                <FaLinkedin
                  className="cursor-pointer text-2xl text-blue-700"
                  onClick={() =>
                    window.open(
                      'https://www.linkedin.com/sharing/share-offsite/?url=' +
                        window.location.href
                    )
                  }
                />
              </div>
            </div>
            <button
              className="w-full md:w-auto rounded-full bg-green-500 px-8 py-4 font-bold text-white transition duration-300 hover:bg-green-600 hover:text-gray-100"
              aria-label="Add to cart button"
            >
              <AiOutlineShoppingCart className="mr-2 inline-block text-xl" />
Reserve             </button>
          </div>
        </div>
      </main>
    </>
  );
};
export default OfferView;
