/* eslint-disable */
/* eslint-disable @typescript-eslint/consistent-type-imports */
/* eslint-disable @typescript-eslint/no-floating-promises */




import { NextPage } from "next";
import Head from "next/head";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
import { api } from "../utils/api";
import { FaPlusCircle, FaMoneyBillWave, FaBoxes } from "react-icons/fa";
import { useState, useEffect } from "react";
import { NavBarSeller } from "~/components/NavBarSeller";

const CreateAnOffer: NextPage = () => {
  type CreateOfferForm = {
    offer_id: string;
    seller_id: string;
    offer_description: string;
    price: string;
    numberofboxes: string;
  };

  const [showNotification, setShowNotification] = useState(false);
  const [descriptionLength, setDescriptionLength] = useState(0);

  const handleDescriptionChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setDescriptionLength(event.target.value.length);
  };


  const createOffer = api.offers.createOffers.useMutation();
  const router = useRouter();

  const { register, handleSubmit } = useForm<CreateOfferForm>();
  const onSubmit = (formData: CreateOfferForm) => {
    createOffer.mutateAsync({
      ...formData,
      price: parseFloat(formData.price),
      numberofboxes: parseInt(formData.numberofboxes),
      seller_id: parseInt(formData.seller_id),
    }).then(() => {
      setShowNotification(true);
      setTimeout(() => setShowNotification(false), 5000);
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
      <NavBarSeller/>


      <div className="bg-gray-100 py-8">
        <div className="container mx-auto px-4 rounded-lg">
        
          <div className="text-center mb-12">
          
            <h2 className="text-3xl font-bold text-yellow-500 uppercase">
             
              Create an Offer
            </h2>
          </div>

          <div className="max-w-lg mx-auto">
            {showNotification && (
              <div
                className="relative px-6 py-4 mb-4 text-green-700 bg-green-100 border border-green-400 rounded"
                role="alert"
              >
                <strong className="font-bold">Success!</strong>
                <span className="block sm:inline">
                  {" "}
                  Offer has been successfully created.
                </span>
              </div>
            )}

            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="mb-4">
                <label htmlFor="seller_id" className="block mb-2 font-bold">
                  Seller ID
                </label>
                <div className="relative">
                  <input
                    type="number"
                    id="seller_id"
                    className="block w-full px-4 py-2 mb-2 border rounded focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent rounded-lg"
                    placeholder="Enter Seller ID"
                    {...register("seller_id", { required: true })}
                  />
                  <div className="absolute top-0 right-0 flex items-center h-full pr-2">
                    <FaPlusCircle className="text-green-500" />
                  </div>
                </div>
              </div>

          <div className="mb-4">
            <label htmlFor="offer_description" className="block mb-2 font-bold">
              Offer Description
            </label>
            <div className="relative">
              <textarea
                id="offer_description"
                className="block w-full px-4 py-2 mb-2 border rounded focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent rounded-lg"
                placeholder="Enter Offer Description"
                {...register("offer_description", { required: true })}
                                    maxLength={100}
                                    onChange={handleDescriptionChange}


              />
              <div className="absolute top-0 right-0 flex items-center h-full pr-2">
                <FaPlusCircle className="text-green-500" />
              </div>
            </div>
            <p className="text-sm text-gray-500">{descriptionLength} / 100 characters</p>


          </div>

          <div className="mb-4">
            <label htmlFor="price" className="block mb-2 font-bold">
              Price
            </label>
            <div className="relative">
              <input
                type="number"
                id="price"
                className="block w-full px-4 py-2 mb-2 border rounded focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent rounded-lg"
                placeholder="Enter Price"
                {...register("price", { required: true, min: 0 })}
              />
              <div className="absolute top-0 right-0 flex items-center h-full pr-2">
                <FaMoneyBillWave className="text-green-500" />
              </div>
            </div>
          </div>

          <div className="mb-4">
            <label htmlFor="numberofboxes" className="block mb-2 font-bold">
              Number of Boxes
            </label>
            <div className="relative">
              <input
                type="number"
                id="numberofboxes"
                className="block w-full px-4 py-2 mb-2 border rounded focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent rounded-lg"
                placeholder="Enter Number of Boxes"
                {...register("numberofboxes", { required: true, min: 1 })}
              />
              <div className="absolute top-0 right-0 flex items-center h-full pr-2">
                <FaBoxes className="text-green-500" />
              </div>
            </div>
          </div>

          <div className="text-center">
            <button
              type="submit"
              className="px-4 py-2 font-bold text-white bg-green-500 rounded hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 disabled:opacity-50"
              disabled={createOffer.isLoading}
            >
              {createOffer.isLoading ? "Creating..." : "Create"}
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</>
);
};export default CreateAnOffer;