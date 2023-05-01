import React, { useState, ChangeEvent } from 'react';
import { useRouter } from 'next/router';
import { api } from '~/utils/api';
import { NextPage } from "next";
import Head from "next/head";
import { useForm } from "react-hook-form";
import { FaBoxes, FaMoneyBillWave, FaPlusCircle } from 'react-icons/fa';
import zxcvbnModule from 'zxcvbn';




  const SignUpUser: NextPage = () => {
    type createUserForm = {
    user_id: string;
    username: string;
    password: string;
    phonenumber: string;
    emailaddress: string;
    usertype: string;
    };

  const createUser = api.users.createUser.useMutation();
  const router = useRouter();

  const { register, handleSubmit } = useForm<createUserForm>();
  const onSubmit = (formData: createUserForm) => {
    const passwordStrength = zxcvbnModule(formData.password);
    
    if (passwordStrength.score < 2) {
      // If password is weak, show error message and prevent form submission
      alert('Your password is too weak. Please choose a stronger password.');
      return;
    }

    if (formData.usertype === 'S') {
      router.push({
        pathname: '/signUpSeller',
        query: { user_id: formData.user_id },
      });
    } else if (formData.usertype === 'C') {
      router.push({
        pathname: '/signUpCus',
        query: { user_id: formData.user_id },
      });
    }
    createUser
  .mutateAsync({
    user_id: parseInt(formData.user_id),
    username: formData.username,
    password: formData.password,
    phonenumber: formData.phonenumber,
    emailaddress: formData.emailaddress,
    usertype: formData.usertype,
  })
  /* .then(() => {
    router.push("/");
  }); */
  };
  
  
  return (
    <>
        <Head>
        <title>Sign Up </title>
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
Sign Up             </h2>
          </div>
          
       
           <div className="mt-10">
            <form
              className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-8"
              onSubmit={handleSubmit(onSubmit)}
            >
              <div className="mb-2 flex items-center">
                <label
                  htmlFor="user_id"
                  className="mr-4 block text-lg font-medium text-gray-700"
                >
                 User ID 
                </label>
                <div className="relative mt-1 rounded-md shadow-sm">
                  <input
                    type="number"
                    id="user_id"
                    className="block w-full px-4 py-2 focus:border-green-500 focus:border-indigo-500 focus:outline-none focus:ring-green-500 focus:ring-indigo-500 sm:text-sm"
                    placeholder="Enter User ID"
                    {...register("user_id", { required: true })}
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
                  htmlFor="username"
                  className="mr-4 block text-lg font-medium text-gray-700"
                >
                  Username
                </label>
                <div className="relative mt-1 rounded-md shadow-sm">
                  <input
                    type="string"
                    id="username"
                    className="block w-full px-4 py-2 focus:border-green-500 focus:border-indigo-500 focus:outline-none focus:ring-green-500 focus:ring-indigo-500 sm:text-sm"
                    placeholder="Enter Username"
                    {...register("username", { required: true })}
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
                  htmlFor="passwoed"
                  className="mr-4 block text-lg font-medium text-gray-700"
                >
                  Password
                </label>
                <div className="relative mt-1 rounded-md shadow-sm">
                  <input
                    type="string"
                    id="username"
                    className="block w-full px-4 py-2 focus:border-green-500 focus:border-indigo-500 focus:outline-none focus:ring-green-500 focus:ring-indigo-500 sm:text-sm"
                    placeholder="Enter Password"
                    {...register("password", { required: true })}
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
                  htmlFor="phone number"
                  className="mr-4 block text-lg font-medium text-gray-700"
                >
Phone Number                </label>
                <div className="relative mt-1 rounded-md shadow-sm">
                  <input
                    type="string"
                    id="username"
                    className="block w-full px-4 py-2 focus:border-green-500 focus:border-indigo-500 focus:outline-none focus:ring-green-500 focus:ring-indigo-500 sm:text-sm"
                    placeholder="Enter Phone Number"
                    {...register("phonenumber", { required: true })}
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
                  htmlFor="email address"
                  className="mr-4 block text-lg font-medium text-gray-700"
                >
                  Email Address
                </label>
                <div className="relative mt-1 rounded-md shadow-sm">
                  <input
                    type="string"
                    id="email address"
                    className="block w-full px-4 py-2 focus:border-green-500 focus:border-indigo-500 focus:outline-none focus:ring-green-500 focus:ring-indigo-500 sm:text-sm"
                    placeholder="Enter Email Address"
                    {...register("emailaddress", { required: true })}
                  />
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
                    <FaPlusCircle
                      className="h-6 w-6 animate-pulse text-green-500"
                      aria-hidden="true"
                    />
                  </div>
                </div>
              </div>

            <div className="flex flex-col gap-2 w-full">
  <label htmlFor="usertype" className="text-lg font-medium text-black">
    <FaBoxes className="inline-block mr-2 mb-1" />
    User Type
  </label>
  <select
    id="usertype"
    className="block w-full rounded-lg border border-black-200 bg-white p-2.5 text-sm text-gray-900 focus:border-green-500 focus:ring-green-500"
    style={{ fontFamily: 'Times New Roman' }}
    {...register("usertype", { required: true })}
  >
    <option value="">Select user type</option>
    <option value="S">Seller</option>
    <option value="C">Customer</option>
    </select>
    </div>


    <div className="flex justify-center sm:col-span-2">
                <button className="mx-auto rounded bg-yellow-500 px-3 py-1 font-bold text-white hover:bg-yellow-700">
                  <div className="flex items-center justify-center">
                    <span>Sign Up </span>
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

export default SignUpUser;

