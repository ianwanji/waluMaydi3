import { useRouter } from "next/router";
import Head from "next/head";
import { api } from "~/utils/api";
import { NextPage } from "next";
import { FaMoneyBillAlt } from "react-icons/fa";
import { IoMdInformationCircle } from "react-icons/io";
import { AiOutlineShoppingCart } from "react-icons/ai";
import Image from "next/image";

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
          <div>
            <Image
              className="rounded-lg shadow-md"
              src="/icons/cooking.png"
              alt="Restaurant"
              width={500}
              height={100}
            />
          </div>
          <div className="flex flex-col justify-center">
            <h2
              className="mb-4 text-2xl font-bold"
              style={{ fontFamily: "Times New Roman" }}
            >
              Product details
            </h2>
            <p className="mb-4 text-gray-600" style={{ fontFamily: "serif" }}>
              <IoMdInformationCircle className="mr-2 inline-block text-lg" />
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
              vel nibh sit amet tellus vulputate posuere. Suspendisse potenti.
              Donec quis ipsum sed elit gravida suscipit. Ut facilisis malesuada
              blandit. Nam posuere augue vel sem dignissim lobortis. Aliquam nec
              nibh dolor.
            </p>
            <div className="mb-4 flex items-center">
              <div className="mt-8">
                <p className="text-sm text-gray-800">
                  <FaMoneyBillAlt className="mr-2 inline-block text-lg text-green-500" />
                  Price: DH{offerItem.price.toString()}
                </p>
                <p
                  className="mt-4 text-center text-gray-600"
                  style={{ fontFamily: "Times New Roman" }}
                >
                  {offerItem.numberofboxes} boxes available
                </p>
              </div>
            </div>
            <button className="w-auto rounded-full bg-green-500 px-0 py-2 font-bold text-white transition duration-300 hover:bg-green-600 hover:text-gray-100">
              <AiOutlineShoppingCart className="mr-2 inline-block text-lg" />
              Reserve now
            </button>
          </div>
        </div>
      </main>
    </>
  );
};

export default OfferView;
