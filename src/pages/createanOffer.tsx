import { NextPage } from "next";
import Head from "next/head";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
import { api } from "../utils/api";
import { FaPlusCircle, FaMoneyBillWave, FaBoxes } from "react-icons/fa";

const createanOffer: NextPage = () => {
  type createOfferForm = {
    offer_id: string;
    seller_id: string;
    offer_description: string;
    price: string;
    numberofboxes: string;
  };

  const createOffer = api.offers.createOffers.useMutation();
  const router = useRouter();

  const { register, handleSubmit } = useForm<createOfferForm>();
  const onSubmit = (formData: createOfferForm) => {
    createOffer
      .mutateAsync({
        ...formData,
        price: parseFloat(formData.price),
        numberofboxes: parseInt(formData.numberofboxes),
        seller_id: parseInt(formData.seller_id),
        offer_id: parseInt(formData.offer_id),
      })
      .then(() => {
        router.push("/");
      });
  };

  return (
    <>
            <Head>
        <title>Create an Offer</title>
        <meta name="description" content="Walu Maydi3" />
        <link rel="icon" href="/iconnav.ico" />
        <link rel="stylesheet" href="/styles.css" />
        <meta name="keywords" content="offer, sell, description" />
      </Head>

      <main className="flex min-h-screen items-center justify-center bg-cover bg-center bg-gray-200">
      <div className="w-full max-w-sm bg-blue-50 rounded-lg shadow-lg p-6 font-serif">
          <h1 className="text-4xl text-green-500 font-bold text-center mb-8">
            Create an Offer
          </h1>
          <form className="flex flex-col gap-4 items-center" onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-col gap-2 w-full">
              <label htmlFor="offer_id" className="text-lg font-medium text-black">
                <FaMoneyBillWave className="inline-block mr-2 mb-1" />
                Offer ID
              </label>
              <div className="relative w-full">
                <input
                  id="offerID"
                  type="number"
                  className="block w-full rounded-lg border border-black-200 bg-white p-2.5 text-sm text-gray-900 focus:border-green-500 focus:ring-green-500"
                  style={{ fontFamily: 'Times New Roman' }}
                  {...register("offer_id", { required: true })}
                />
                <div className="absolute top-2 right-2 text-green-700">
                  <FaPlusCircle size={20} />
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-2 w-full">
              <label htmlFor="seller_id" className="text-lg font-medium text-green-500">
                <FaMoneyBillWave className="inline-block mr-2 mb-1" />
                Seller ID
              </label>
              <div className="relative w-full">
                <input
                  id="sellerID"
                  type="number"
                  className="block w-full rounded-lg border border-green-200 bg-white p-2.5 text-sm text-gray-900 focus:border-black-500 focus:ring-black-500"
                  style={{ fontFamily: 'Times New Roman' }}
                  {...register("seller_id", { required: true })}
                />
                <div className="absolute top-2 right-2 text-black-700">
                  <FaPlusCircle size={20} />
                </div>
              </div>
            </div> 
            <div className="flex flex-col gap-2 w-full">
              <label htmlFor="offer_description" className="text-lg font-medium text-black">
                <FaBoxes className="inline-block mr-2 mb-1" />
                Offer Description
              </label>
              <textarea
                id="offerDescription"
                rows={3}
                className="block w-full rounded-lg border border-black-200 bg-white p-2.5 text-sm text-gray-900 focus:border-green-500 focus:ring-green-500"
                style={{ fontFamily: 'Times New Roman' }}
                {...register("offer_description", { required: true })}
              />
            </div>

            <div className="flex flex-col gap-2 w-full">
              <label htmlFor="price" className="text-lg font-medium text-green-500">
                <FaMoneyBillWave className="inline-block mr-2 mb-1" />
                Price
              </label>
              <input
                id="price"
                type="number"
                step="0.01"
                className="block w-full rounded-lg border border-green-200 bg-white p-2.5 text-sm text-gray-900 focus:border-black-500 focus:ring-black-500"
                style={{ fontFamily: 'Times New Roman' }}
                {...register("price", { required: true })}
              />
            </div>

            <div className="flex flex-col gap-2 w-full">
              <label htmlFor="numberofboxes" className="text-lg font-medium text-black">
                <FaBoxes className="inline-block mr-2 mb-1" />
                Number of Boxes
              </label>
              <input
                id="numberOfBoxes"
                type="number"
                className="block w-full rounded-lg border border-black-200 bg-white p-2.5 text-sm text-gray-900 focus:border-green-500 focus:ring-green-500"
                style={{ fontFamily: 'Times New Roman' }}
                {...register("numberofboxes", { required: true })}
              />
            </div>

            <button
              type="submit"
              className="bg-green-500 text-white rounded-lg py-2.5 px-5 font-medium hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
            >
              Create Offer
            </button>
          </form>
        </div>
      </main>
    </>
  );
};

export default createanOffer;