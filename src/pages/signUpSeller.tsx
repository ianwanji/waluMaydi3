import React, { useState, ChangeEvent } from 'react';
import { useRouter } from 'next/router';
import { api } from '~/utils/api';
import { NextPage } from "next";
import Head from "next/head";
import { useForm } from "react-hook-form";
import { FaBoxes, FaMoneyBillWave, FaPlusCircle } from 'react-icons/fa';


interface CreateSellerForm {
  seller_id: string;
  seller_name: string;
  seller_description: string;
  location: string;
  category_id: string;
}

interface Props {
  user_id: string;
}

interface CreateSellerForm {
  user_id: string;
  seller_name: string;
  seller_description: string;
  location: string;
  category_id: string;
}

const SignUpSeller: NextPage = () => {
  const router = useRouter();
  const { user_id } = router.query as unknown as Props;
  const createSeller = api.sellers.createSeller.useMutation();

  const { register, handleSubmit } = useForm<CreateSellerForm>();
  const onSubmit = (formData: CreateSellerForm) => {
    createSeller.mutateAsync({
      seller_id: parseInt(user_id),
      seller_name: formData.seller_name,
      seller_description: formData.seller_description,
      location: formData.location,
      category_id: parseInt(formData.category_id),
    }).then(() => {
      router.push("/");
    });
  };
  
  return (
    <>
        <Head>
        <title>Sign Up Seller</title>
        <meta name="description" content="Walu Maydi3" />
        <link rel="icon" href="/iconnav.ico" />
        <link rel="stylesheet" href="/styles.css" />
        <meta name="keywords" content="offer, sell, description" />
      </Head>

      <main className="flex min-h-screen items-center justify-center bg-cover bg-center bg-gray-200">
      <div className="w-full max-w-sm bg-blue-50 rounded-lg shadow-lg p-6 font-serif">
          <h1 className="text-4xl text-green-500 font-bold text-center mb-8">
            Sign Up As Seller
          </h1>
          <form className="flex flex-col gap-4 items-center" onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-col gap-2 w-full">
              <label htmlFor="seller_name" className="text-lg font-medium text-black">
                <FaMoneyBillWave className="inline-block mr-2 mb-1" />
                seller_name
              </label>
              <div className="relative w-full">
                <input
                  id="seller_name"
                  type="string"
                  className="block w-full rounded-lg border border-black-200 bg-white p-2.5 text-sm text-gray-900 focus:border-green-500 focus:ring-green-500"
                  style={{ fontFamily: 'Times New Roman' }}
                  {...register("seller_name", { required: true })}
                />
                <div className="absolute top-2 right-2 text-green-700">
                  <FaPlusCircle size={20} />
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-2 w-full">
              <label htmlFor="seller_description" className="text-lg font-medium text-green-500">
                <FaMoneyBillWave className="inline-block mr-2 mb-1" />
                seller_description
              </label>
              <div className="relative w-full">
                <input
                  id="seller_description"
                  type="string"
                  className="block w-full rounded-lg border border-green-200 bg-white p-2.5 text-sm text-gray-900 focus:border-black-500 focus:ring-black-500"
                  style={{ fontFamily: 'Times New Roman' }}
                  {...register("seller_description", { required: false })}
                />
                <div className="absolute top-2 right-2 text-black-700">
                  <FaPlusCircle size={20} />
                </div>
              </div>
            </div> 
            <div className="flex flex-col gap-2 w-full">
  <label htmlFor="location" className="text-lg font-medium text-black">
    <FaBoxes className="inline-block mr-2 mb-1" />
    location
  </label>
  <input
    id="location"
    type="string"
    className="block w-full rounded-lg border border-black-200 bg-white p-2.5 text-sm text-gray-900 focus:border-green-500 focus:ring-green-500"
    style={{ fontFamily: 'Times New Roman' }}
    {...register("location", { required: true })}
    value="I"
    readOnly
  />
</div>


            <div className="flex flex-col gap-2 w-full">
              <label htmlFor="category_id" className="text-lg font-medium text-green-500">
                <FaMoneyBillWave className="inline-block mr-2 mb-1" />
                category_id
              </label>
              <input
                id="category_id"
                type="number"
                className="block w-full rounded-lg border border-green-200 bg-white p-2.5 text-sm text-gray-900 focus:border-black-500 focus:ring-black-500"
                style={{ fontFamily: 'Times New Roman' }}
                {...register("category_id", { required: true })}
              />
            </div>

            <button
              type="submit"
              className="bg-green-500 text-white rounded-lg py-2.5 px-5 font-medium hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
            >
              Sign Up
            </button>
          </form>
        </div>
      </main>
    </>
  );
}
;

export default SignUpSeller;

/* function register(arg0: string, arg1: { required: boolean; }): JSX.IntrinsicAttributes & React.ClassAttributes<HTMLInputElement> & React.InputHTMLAttributes<HTMLInputElement> {
  throw new Error("Function not implemented.");
} */