/* eslint-disable @typescript-eslint/consistent-type-imports */
/* eslint-disable @typescript-eslint/no-floating-promises */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @typescript-eslint/require-await */
/* eslint-disable @typescript-eslint/no-misused-promises */

import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import { api } from '~/utils/api';
import { NextPage } from "next";
import { useForm } from "react-hook-form";
import { FaPlusCircle } from 'react-icons/fa';
import { user_acc } from '@prisma/client';



type UserForm = {
  username: string;
  password: string;
};

type LinkedUser = {
  user: user_acc;
  next: LinkedUser | null;
};

type CardProps = {
  user: user_acc;
};


export const SignIn: NextPage = () => {

  const { data: usersList } = api.users.listUsers.useQuery();
  const router = useRouter();


  const { register, handleSubmit } = useForm<UserForm>();
  const onSubmit = async (formData: UserForm) => {
    // Fetch all the users from the database

    if (usersList) {
      let head: LinkedUser | null = null;
      let prev: LinkedUser | null = null;
      for (const user of usersList) {
        const linkedUser: LinkedUser = {
          user,
          next: null,
        };
        if (!head) {
          head = linkedUser;
        }
        if (prev) {
          prev.next = linkedUser;
        }
        prev = linkedUser;
      }
    
      // Check if username exists in linked list

            let current = head;
      let userFound = false;
      while (current) {
        if (current.user.username === formData.username) {
          userFound = true;
          // Check if password is correct
          if (current.user.password === formData.password) {
            console.log(`Welcome! User ID: ${current.user.user_id}`);
               router.push(`/users/${current.user.user_id}`);
          } else {
            console.log("Password incorrect.");
          }
          break;
        }
        current = current.next;
      }
    
      if (!userFound) {
        console.log("Account not found.");
      }
    }
    };
  
  
  return (
    <>
      <div className="bg-gray-50 py-8">
        <div className="mx-auto max-w-6xl px-4 sm:px-10 lg:px-10">
          <div className="flex justify-center">
            <h2
              className="text-3xl font-bold uppercase tracking-wide text-black text-center"
              style={{ fontFamily: "YourFontName, sans-serif" }}
            >
              Sign In
            </h2>
          </div>
  
          <div className="mt-10">
            <form
              className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-8"
              onSubmit={handleSubmit(onSubmit)}
            >
              <div className="mb-2 flex items-center form-field">
                <label
                  htmlFor="user_id"
                  className="mr-50 ml-50 block text-lg font-medium text-black"
                  style={{ minWidth: "145px" }}
                >
                  username
                </label>
                <div className="relative mt-1 rounded-lg shadow-sm">
                  <input
                    type="text"
                    id="username"
                    className="block w-full px-4 py-4 rounded-lg focus:border-green-500 focus:border-indigo-500 focus:outline-none focus:ring-green-500 focus:ring-indigo-500 sm:text-sm text-left w-full"
                    style={{ width: "300px" }} 
                    placeholder="Enter User ID"
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
  
              {/* Phone number */}
              <div className="mb-2 flex items-center form-field">
  <label
    htmlFor="password"
    className="mr-0 ml-50 block text-lg font-medium text-black"
    style={{ minWidth: "145px" }}
  >
    password
  </label>
  <div className="relative mt-1 rounded-lg shadow-sm">
    <input
      type="text"
      id="password"
      className="block w-full px-4 py-4 rounded-lg focus:border-green-500 focus:border-indigo-500 focus:outline-none focus:ring-green-500 focus:ring-indigo-500 sm:text-sm text-left w-full"
      style={{ width: "300px" }} // Set the desired width here (e.g., 300px)
      placeholder="Enter phone number"
      {...register("password", { required: true })}
    />
    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3"></div>
  </div>
</div>

 
        <div className="flex justify-center sm:col-span-2 mt-4">
  <button className="mx-auto rounded bg-green-500 px-8 py-4 font-bold text-white text-lg hover:bg-green-700 transition-colors duration-300">
    <div className="flex items-center justify-center">
      <span className="text-sm text-white">sign in</span>
    </div>
  </button>
</div>

      </form>
    </div>
  </div>
</div>
</>
)};
  
export default SignIn;