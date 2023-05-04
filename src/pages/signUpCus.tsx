


/* eslint-disable */


/* eslint-disable */





import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { api } from '~/utils/api';
import { NextPage } from "next";
import Head from "next/head";
import { useForm } from "react-hook-form";
import { FaBoxes, FaMoneyBillWave, FaUser } from 'react-icons/fa';
import { NavBar } from '~/components/NavBar';

interface Props {
  user_id: string;
}

interface CreateCusForm {
  cus_id: string;
  fname: string;
  lname: string;
  dob: string;
  gender: string; 
}

const SignUpCus: NextPage = () => {
  const router = useRouter();
  const { user_id } = router.query as unknown as Props;
  const createCus = api.customers.createCus.useMutation();

  const { register, handleSubmit, formState: { errors } } = useForm<CreateCusForm>();

  const onSubmit = (formData: CreateCusForm) => {
    createCus.mutateAsync({
      cus_id: parseInt(user_id),
      fname: formData.fname,
      lname: formData.lname,
      dob: new Date(formData.dob),
      gender: formData.gender,
    }).then(() => {
      router.push("/signInPage");
    });
  };
  
  return (
    <>
    
      <Head>
        <title>Sign Up Customer</title>
        <meta name="description" content="Walu Maydi3" />
        <link rel="icon" href="/iconnav.ico" />
        <link rel="stylesheet" href="/styles.css" />
        <meta name="keywords" content="offer, sell, description" />
      </Head>
      <div>
        <NavBar/>

      <main className="flex min-h-screen items-center justify-center bg-cover bg-center bg-gray-100">
        <div className="w-full max-w-xl bg-white rounded-lg shadow-lg p-12">
          <h1 className="text-4xl text-black font-bold text-center mb-8">
            Sign Up 
          </h1>
          <form onSubmit={handleSubmit(onSubmit)}>
            <fieldset>
              <legend className="text-xl font-bold text-black mb-4">
                Personal Information
              </legend><div className="flex flex-col mb-4">
  <label htmlFor="fname" className="text-lg font-medium mb-2">
    First Name
  </label>
  <div className="flex">
    <span className="rounded-l-md inline-flex items-center px-3 border-t bg-white border-l border-b border-gray-300 text-gray-500 shadow-sm text-sm">
      <FaUser />
    </span>
    <input
      type="text"
      id="fname"
      {...register("fname", { required: true })}
      className="rounded-r-md flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
    />
  </div>
  {errors.fname && (
    <span className="text-red-500 text-sm mt-1">This field is required</span>
  )}
</div>
<div className="flex flex-col mb-4">
  <label htmlFor="lname" className="text-lg font-medium mb-2">
    Last Name
  </label>
  <div className="flex">
    <span className="rounded-l-md inline-flex items-center px-3 border-t bg-white border-l border-b border-gray-300 text-gray-500 shadow-sm text-sm">
      <FaUser />
    </span>
    <input
      type="text"
      id="lname"
      {...register("lname", { required: true })}
      className="rounded-r-md flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
    />
  </div>
  {errors.lname && (
    <span className="text-red-500 text-sm mt-1">This field is required</span>
  )}
</div>
<div className="flex flex-col mb-4">
  <label htmlFor="dob" className="text-lg font-medium mb-2">
    Date of Birth
  </label>
  <div className="flex">
    <span className="rounded-l-md inline-flex items-center px-3 border-t bg-white border-l border-b border-gray-300 text-gray-500 shadow-sm text-sm">
      <FaBoxes />
    </span>
    <input
      type="date"
      id="dob"
      {...register("dob", { required: true })}
      className="rounded-r-md flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
    />
  </div>
  {errors.dob && (
    <span className="text-red-500 text-sm mt-1">This field is required</span>
  )}
</div>
<div className="flex flex-col mb-4">
  <label htmlFor="gender" className="text-lg font-medium mb-2">
    Gender
  </label>
  <div className="flex">
    <span className="rounded-l-md inline-flex items-center px-3 border-t bg-white border-l border-b border-gray-300 text-gray-500 shadow-sm text-sm">
      <FaMoneyBillWave />
    </span><select
  id="gender"
  {...register("gender", { required: true })}
  className="rounded-r-md flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
>
  <option value="" disabled>
    Select gender
  </option>
  <option value="M">Male</option>
  <option value="F">Female</option>
 
</select>
  </div>
  {errors.gender && (
    <span className="text-red-500 text-sm mt-1">This field is required</span>
  )}
</div>
<div className="flex justify-center sm:col-span-2 mt-10">
  <button className="mx-auto rounded bg-green-500 px-8 py-4 font-bold text-white text-lg hover:bg-green-700 transition-colors duration-300">
    <div className="flex items-center justify-center">
      <span className="text-sm text-white">Sign Up</span>
    </div>
  </button>
</div>
</fieldset>
</form>
</div>
</main>
</div>
</>
);
};
export default SignUpCus;