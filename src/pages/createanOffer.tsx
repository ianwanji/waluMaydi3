import { NextPage } from "next";
import Head from "next/head";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
import { api } from "../utils/api";
import { FaPlusCircle, FaMoneyBillWave, FaBoxes } from "react-icons/fa";
import { useState, useEffect } from 'react';



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
    createOffer
      .mutateAsync({
        ...formData,
        price: parseFloat(formData.price),
        numberofboxes: parseInt(formData.numberofboxes),
        seller_id: parseInt(formData.seller_id),
        offer_id: parseInt(formData.offer_id),

      })
      setShowNotification(true);

        router.push("/");
      }
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
  
        <div className="py-8 bg-gray-100">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="lg:text-center">
              <h2 className="text-lg text-yellow-500 font-semibold tracking-wide uppercase " style={{ fontFamily: "times new roman" }}>Create an Offer</h2>
            </div>
            {showNotification && (
            <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative" role="alert">
              <strong className="font-bold">Success!</strong>
              <span className="block sm:inline"> Offer has been successfully created.</span>
            </div>
          )}

  
            <div className="mt-10">
              <form className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-8" onSubmit={handleSubmit(onSubmit)}>
              <div className="flex items-center mb-2">
                  <label htmlFor="offer_id" className="block text-lg font-medium text-gray-700 mr-4">
                    Offer ID
                  </label>
                  <div className="mt-1 relative rounded-md shadow-sm">
                    <input
                      type="number"
                      id="offer_id"
                      className="focus:ring-green-500 focus:border-green-500 block w-full px-4 py-2 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      placeholder="Enter Offer ID"
                      {...register("offer_id", { required: true })}
                    />
                    <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                      <FaPlusCircle className="h-6 w-6 text-green-500 animate-pulse" aria-hidden="true" />
                    </div>
                  </div>
                </div>
  
                <div className="flex items-center mb-2">
                  <label htmlFor="seller_id" className="block text-lg font-medium text-gray-700 mr-4">
                    Seller ID
                  </label>
                  <div className="mt-1 relative rounded-md shadow-sm">
                    <input
                      type="number"
                      id="seller_id"
                      className="focus:ring-green-500 focus:border-green-500 block w-full px-4 py-2 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"                      placeholder="Enter Seller ID"
                      {...register("seller_id", { required: true })}
                    />
                    <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                      <FaPlusCircle className="h-6 w-6 text-green-500 animate-pulse" aria-hidden="true" />
                    </div>
                  </div>
                </div>
  
                <div className="flex items-center mb-2">
                  <label htmlFor="offer_description" className="block text-lg font-medium text-gray-700 mr-4">
                    Description
                  </label> 
  <div className="mt-1">
                    <textarea
                      id="offer_description"
                      rows="3"
                      className="focus:ring-green-500 focus:border-green-500 block w-full px-4 py-2 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      placeholder="Enter Offer Description"
                      {...register("offer_description", { required: true })}
                    ></textarea>
                  </div>
                </div>
                <div className="flex items-center mb-2">
              <label htmlFor="price" className="block text-lg font-medium text-gray-700 mr-4">
                Price
              </label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <input
                  type="number"
                  id="price"
                  className="focus:ring-green-500 focus:border-green-500 block w-full px-4 py-2 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  placeholder="Enter Price"
                  {...register("price", { required: true })}
                />
                <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                  <FaMoneyBillWave className="h-6 w-6 text-green-500 animate-pulse" aria-hidden="true" />
                </div>
              </div>
            </div>
  
            <div className="flex items-center mb-2">
              <label htmlFor="quantity" className="block text-lg font-medium text-gray-700 mr-4">
                Quantity
              </label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <input
                  type="number"
                  id="quantity"
                  className="focus:ring-green-500 focus:border-green-500 block w-full px-4 py-2 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  placeholder="Enter Quantity"
                  {...register("numberofboxes", { required: true })}
                />
                <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                  <FaBoxes className="h-6 w-6 text-green-400 animate-pulse" aria-hidden="true" />
                </div>
              </div>
            </div>
  
            <div className="sm:col-span-2 flex justify-center">
            <button className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-1 px-3 rounded mx-auto">
  
  <div className="flex items-center justify-center">
    <span>Submit</span>
    <FaPlusCircle className="h-6 w-6 ml-2 animate-pulse" />
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