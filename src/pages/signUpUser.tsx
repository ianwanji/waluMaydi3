import React, { useState, ChangeEvent } from 'react';
import { useRouter } from 'next/router';
import { api } from '~/utils/api';
import { NextPage } from "next";
import Head from "next/head";
import { useForm } from "react-hook-form";
import { FaBoxes, FaMoneyBillWave, FaPlusCircle } from 'react-icons/fa';


const SignUpUser: NextPage = () => {
  type createUserForm = {
    user_id: string;
    username: string;
    phonenumber: string;
    emailaddress: string;
    usertype: string;
  };

  const createUser = api.users.createUser.useMutation();
  const router = useRouter();

  const { register, handleSubmit } = useForm<createUserForm>();
  const onSubmit = (formData: createUserForm) => {
    
    if (formData.usertype === 'S') {
      router.push('/signUpSeller');
    } else if (formData.usertype === 'C') {
      router.push('/signUpCus');
    }
    createUser
      .mutateAsync({
        user_id: parseInt(formData.user_id),
        username: formData.username,
        phonenumber: formData.phonenumber,
        emailaddress: formData.emailaddress,
        usertype: formData.usertype,
      })
      .then(() => {
        router.push("/");
      });
  
  };
  
  return (
    <>
            <Head>
        <title>Sign Up</title>
        <meta name="description" content="Walu Maydi3" />
        <link rel="icon" href="/iconnav.ico" />
        <link rel="stylesheet" href="/styles.css" />
        <meta name="keywords" content="offer, sell, description" />
      </Head>

      <main className="flex min-h-screen items-center justify-center bg-cover bg-center bg-gray-200">
      <div className="w-full max-w-sm bg-blue-50 rounded-lg shadow-lg p-6 font-serif">
          <h1 className="text-4xl text-green-500 font-bold text-center mb-8">
            Sign Up
          </h1>
          <form className="flex flex-col gap-4 items-center" onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-col gap-2 w-full">
              <label htmlFor="user_id" className="text-lg font-medium text-black">
                <FaMoneyBillWave className="inline-block mr-2 mb-1" />
                USER ID
              </label>
              <div className="relative w-full">
                <input
                  id="user_id"
                  type="number"
                  className="block w-full rounded-lg border border-black-200 bg-white p-2.5 text-sm text-gray-900 focus:border-green-500 focus:ring-green-500"
                  style={{ fontFamily: 'Times New Roman' }}
                  {...register("user_id", { required: true })}
                />
                <div className="absolute top-2 right-2 text-green-700">
                  <FaPlusCircle size={20} />
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-2 w-full">
              <label htmlFor="username" className="text-lg font-medium text-green-500">
                <FaMoneyBillWave className="inline-block mr-2 mb-1" />
                username
              </label>
              <div className="relative w-full">
                <input
                  id="username"
                  type="string"
                  className="block w-full rounded-lg border border-green-200 bg-white p-2.5 text-sm text-gray-900 focus:border-black-500 focus:ring-black-500"
                  style={{ fontFamily: 'Times New Roman' }}
                  {...register("username", { required: true })}
                />
                <div className="absolute top-2 right-2 text-black-700">
                  <FaPlusCircle size={20} />
                </div>
              </div>
            </div> 
            <div className="flex flex-col gap-2 w-full">
              <label htmlFor="phonenumber" className="text-lg font-medium text-black">
                <FaBoxes className="inline-block mr-2 mb-1" />
                phonenumber
              </label>
              <input
                id="phonenumber"
                type="string"
                className="block w-full rounded-lg border border-black-200 bg-white p-2.5 text-sm text-gray-900 focus:border-green-500 focus:ring-green-500"
                style={{ fontFamily: 'Times New Roman' }}
                {...register("phonenumber", { required: true })}
              />
            </div>

            <div className="flex flex-col gap-2 w-full">
              <label htmlFor="emailaddress" className="text-lg font-medium text-green-500">
                <FaMoneyBillWave className="inline-block mr-2 mb-1" />
                emailaddress
              </label>
              <input
                id="emailaddress"
                type="string"
                className="block w-full rounded-lg border border-green-200 bg-white p-2.5 text-sm text-gray-900 focus:border-black-500 focus:ring-black-500"
                style={{ fontFamily: 'Times New Roman' }}
                {...register("emailaddress", { required: true })}
              />
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
};

export default SignUpUser;