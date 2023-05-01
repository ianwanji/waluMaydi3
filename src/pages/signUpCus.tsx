import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { api } from '~/utils/api';
import { NextPage } from "next";
import Head from "next/head";
import { useForm } from "react-hook-form";
import { FaBoxes, FaMoneyBillWave, FaUser } from 'react-icons/fa';

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
      router.push("/");
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

      <main className="flex min-h-screen items-center justify-center bg-cover bg-center bg-gray-200">
        <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-6">
          <h1 className="text-4xl text-green-500 font-bold text-center mb-8">
            Sign Up As Customer
          </h1>
          <form onSubmit={handleSubmit(onSubmit)}>
            <fieldset>
              <legend className="text-xl font-bold text-green-500 mb-4">
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
  <option value="male">Male</option>
  <option value="female">Female</option>
  <option value="other">Other</option>
</select>
  </div>
  {errors.gender && (
    <span className="text-red-500 text-sm mt-1">This field is required</span>
  )}
</div>
<div className="flex justify-end">
  <button
    type="submit"
    className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-400 focus:outline-none focus:bg-green-400"
  >
    Sign Up
  </button>
</div>
</fieldset>
</form>
</div>
</main>
</>
);
};
export default SignUpCus;