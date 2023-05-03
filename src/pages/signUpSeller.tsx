

/* eslint-disable */



import React, { useState, ChangeEvent } from 'react';
import { useRouter } from 'next/router';
import { api } from '~/utils/api';
import { NextPage } from "next";
import Head from "next/head";
import { useForm } from "react-hook-form";

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
      router.push("/createanOffer");
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

      <main className="flex min-h-screen items-center justify-center bg-cover bg-center bg-gray-100">
      <div className="w-full max-w-xl bg-white rounded-lg shadow-lg p-12">
          <h1 className="text-4xl text-black font-bold text-center mb-8">
            Sign Up
          </h1>

          <form className="flex flex-col gap-4 items-center" onSubmit={handleSubmit(onSubmit)}>
           


          
         
            <div className="flex flex-col gap-2 w-full">
              <label htmlFor="seller_name" className="text-lg font-medium text-black">
                
                Seller Name
              </label>
              <div className="relative w-full">
                <input
                  id="seller_name"
                  type="string"
                  className="block w-full rounded-lg border border-black-200 bg-white p-2.5 text-sm text-gray-900 focus:border-green-500 focus:ring-green-500"
                  style={{ fontFamily: 'Times New Roman' }}
                  {...register("seller_name", { required: true })}
                />
                <div className="absolute top-2 left-5 text-gray-400">
                 
                </div>
              </div>
            </div>
  
            <div className="flex flex-col gap-2 w-full">
              <label htmlFor="seller_description" className="text-lg font-medium text-black">
                
                Seller Description
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
                
                </div>
              </div>
            </div>
  
            <div className="flex flex-col gap-2 w-full">
              <label htmlFor="location" className="text-lg font-medium text-black">
               
                Address
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
              <label htmlFor="category_id" className="text-lg font-medium text-black">
            
                Category ID
</label>
<input
id="category_id"
type="number"
className="block w-full rounded-lg border border-green-200 bg-white p-2.5 text-sm text-gray-900 focus:border-black-500 focus:ring-black-500"
style={{ fontFamily: 'Times New Roman' }}
{...register("category_id", { required: true })}
/>
</div>      <div className="flex justify-center sm:col-span-2 mt-4">
  <button className="mx-auto rounded bg-green-500 px-8 py-4 font-bold text-white text-lg hover:bg-green-700 transition-colors duration-300">
    <div className="flex items-center justify-center">
      <span className="text-sm text-white">Sign Up</span>
    </div>
  </button>
</div>
    </form>
  </div>
</main>
</>
);};
  

export default SignUpSeller;

/* function register(arg0: string, arg1: { required: boolean; }): JSX.IntrinsicAttributes & React.ClassAttributes<HTMLInputElement> & React.InputHTMLAttributes<HTMLInputElement> {
  throw new Error("Function not implemented.");
} */