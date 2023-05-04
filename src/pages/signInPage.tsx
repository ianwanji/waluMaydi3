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
import Link from 'next/link';
import { NavBar } from '~/components/NavBar';


type UserForm = {
  username: string;
  Password: string;
};

type LinkedUser = {
  user: user_acc;
  next: LinkedUser | null;
};

type CardProps = {
  user: user_acc;
};

let matchedUser: user_acc | null = null;
const SignIn: NextPage = () => {

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
          if (current.user.password === formData.Password) {
            console.log(`Welcome! User ID: ${current.user.user_id}`);
           
           if(current.user.usertype=='S'){
            router.push({
              pathname: '/test',
              query: { user_id: current.user.user_id }})}
              else 
                router.push("/offersPage");
              }
              
      
            
          else {
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
      <div>
        <NavBar/>
      
      <div className="bg-gray-50 py-8">
        <div className="mx-auto max-w-2xl px-4 sm:px-4 ">
          <div className="flex justify-center mt-0">
            <h2 className="text-3xl font-bold uppercase tracking-wide text-black text-center mt-20">
          
              Sign In
            </h2>
          </div>
    
          <div className="mt-16">
            <form
              className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-8"
              onSubmit={handleSubmit(onSubmit)}
            >
              <div className="mb-10">
                <label
                  htmlFor="username"
                  className="block text-lg font-medium text-black mb-2"
                >
                  Username
                </label>
                <div className="relative rounded-lg shadow-sm">
                  <input
                    type="text"
                    id="username"
                    className="block w-full px-4 py-3 rounded-lg focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm border-gray-300"
                    placeholder="Enter User ID"
                    {...register("username", { required: true })}
                  />
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
                    
                  </div>
                </div>
              </div>
    
              <div className="mb-6">
                <label
                  htmlFor="password"
                  className="block text-lg font-medium text-black mb-2"
                >
                  Password
                </label>
                <div className="relative rounded-lg shadow-sm">
                  <input
                    type="password"
                    id="password"
                    className="block w-full px-4 py-3 rounded-lg focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm border-gray-300"
                    placeholder="Enter password"
                    {...register("Password", { required: true })}
                  />
                </div>
              </div>
    
              <div className="flex justify-center sm:col-span-2 mt-7">
                <button className="rounded bg-green-500 px-8 py-3 font-bold text-white text-lg hover:bg-green-700 transition-colors duration-300">
                  Sign In
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      </div>
    );
    
    
  };
  
  export default SignIn;