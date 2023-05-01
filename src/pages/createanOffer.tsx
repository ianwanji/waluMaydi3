import { NextPage } from "next";
import Head from "next/head";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
import { api } from "../utils/api";
import { FaPlusCircle, FaMoneyBillWave, FaBoxes } from "react-icons/fa";
import { useState, useEffect } from "react";

const createanOffer: NextPage = () => {
  type createOfferForm = {
    offer_id: string;
    seller_id: string;
    offer_description: string;
    price: string;
    numberofboxes: string;
  };

  const [showNotification, setShowNotification] = useState(false);

  const createOffer = api.offers.createOffers.useMutation();
  const router = useRouter();

  const { register, handleSubmit } = useForm<createOfferForm>();
  const onSubmit = (formData: createOfferForm) => {
    createOffer.mutateAsync({
      ...formData,
      price: parseFloat(formData.price),
      numberofboxes: parseInt(formData.numberofboxes),
      seller_id: parseInt(formData.seller_id),
      offer_id: parseInt(formData.offer_id),
    });
    setShowNotification(true);

    router.push("/");
  };
  useEffect(() => {
    let timeout: NodeJS.Timeout;
    if (showNotification) {
      timeout = setTimeout(() => {
        setShowNotification(false);
      }, 100000);
    }
    return () => clearTimeout(timeout);
  }, [showNotification]);

  return (
    <>
      <Head>
        <title>Create an Offer</title>
        <meta name="description" content="Walu Maydi3" />
        <link rel="icon" href="/iconnav.ico" />
        <link rel="stylesheet" href="/styles.css" />
        <meta name="keywords" content="offer, sell, description" />
      </Head>

      <div className="bg-gray-100 py-8">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2
              className="text-lg font-semibold uppercase tracking-wide text-yellow-500 "
              style={{ fontFamily: "times new roman" }}
            >
              Create an Offer
            </h2>
          </div>
          {showNotification && (
            <div
              className="relative rounded border border-green-400 bg-green-100 px-4 py-3 text-green-700"
              role="alert"
            >
              <strong className="font-bold">Success!</strong>
              <span className="block sm:inline">
                {" "}
                Offer has been successfully created.
              </span>
            </div>
          )}

          <div className="mt-10">
            <form
              className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-8"
              onSubmit={handleSubmit(onSubmit)}
            >
              <div className="mb-2 flex items-center">
                <label
                  htmlFor="offer_id"
                  className="mr-4 block text-lg font-medium text-gray-700"
                >
                  Offer ID
                </label>
                <div className="relative mt-1 rounded-md shadow-sm">
                  <input
                    type="number"
                    id="offer_id"
                    className="block w-full px-4 py-2 focus:border-green-500 focus:border-indigo-500 focus:outline-none focus:ring-green-500 focus:ring-indigo-500 sm:text-sm"
                    placeholder="Enter Offer ID"
                    {...register("offer_id", { required: true })}
                  />
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
                    <FaPlusCircle
                      className="h-6 w-6 animate-pulse text-green-500"
                      aria-hidden="true"
                    />
                  </div>
                </div>
              </div>

              <div className="mb-2 flex items-center">
                <label
                  htmlFor="seller_id"
                  className="mr-4 block text-lg font-medium text-gray-700"
                >
                  Seller ID
                </label>
                <div className="relative mt-1 rounded-md shadow-sm">
                  <input
                    type="number"
                    id="seller_id"
                    className="block w-full px-4 py-2 focus:border-green-500 focus:border-indigo-500 focus:outline-none focus:ring-green-500 focus:ring-indigo-500 sm:text-sm"
                    placeholder="Enter Seller ID"
                    {...register("seller_id", { required: true })}
                  />
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
                    <FaPlusCircle
                      className="h-6 w-6 animate-pulse text-green-500"
                      aria-hidden="true"
                    />
                  </div>
                </div>
              </div>

              <div className="mb-2 flex items-center">
                <label
                  htmlFor="offer_description"
                  className="mr-4 block text-lg font-medium text-gray-700"
                >
                  Description
                </label>
                <div className="mt-1">
                  <textarea
                    id="offer_description"
                    rows="3"
                    className="block w-full px-4 py-2 focus:border-green-500 focus:border-indigo-500 focus:outline-none focus:ring-green-500 focus:ring-indigo-500 sm:text-sm"
                    placeholder="Enter Offer Description"
                    {...register("offer_description", { required: true })}
                  ></textarea>
                </div>
              </div>
              <div className="mb-2 flex items-center">
                <label
                  htmlFor="price"
                  className="mr-4 block text-lg font-medium text-gray-700"
                >
                  Price
                </label>
                <div className="relative mt-1 rounded-md shadow-sm">
                  <input
                    type="number"
                    id="price"
                    className="block w-full px-4 py-2 focus:border-green-500 focus:border-indigo-500 focus:outline-none focus:ring-green-500 focus:ring-indigo-500 sm:text-sm"
                    placeholder="Enter Price"
                    {...register("price", { required: true })}
                  />
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
                    <FaMoneyBillWave
                      className="h-6 w-6 animate-pulse text-green-500"
                      aria-hidden="true"
                    />
                  </div>
                </div>
              </div>

              <div className="mb-2 flex items-center">
                <label
                  htmlFor="quantity"
                  className="mr-4 block text-lg font-medium text-gray-700"
                >
                  Quantity
                </label>
                <div className="relative mt-1 rounded-md shadow-sm">
                  <input
                    type="number"
                    id="quantity"
                    className="block w-full px-4 py-2 focus:border-green-500 focus:border-indigo-500 focus:outline-none focus:ring-green-500 focus:ring-indigo-500 sm:text-sm"
                    placeholder="Enter Quantity"
                    {...register("numberofboxes", { required: true })}
                  />
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
                    <FaBoxes
                      className="h-6 w-6 animate-pulse text-green-400"
                      aria-hidden="true"
                    />
                  </div>
                </div>
              </div>

              <div className="flex justify-center sm:col-span-2">
                <button className="mx-auto rounded bg-yellow-500 px-3 py-1 font-bold text-white hover:bg-yellow-700">
                  <div className="flex items-center justify-center">
                    <span>Submit</span>
                    <FaPlusCircle className="ml-2 h-6 w-6 animate-pulse" />
                  </div>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
export default createanOffer;
