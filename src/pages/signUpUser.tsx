/* eslint-disable */







import React from 'react';
import { useRouter } from 'next/router';
import { api } from '~/utils/api';
import { NextPage } from "next";
import Head from "next/head";
import { useForm } from "react-hook-form";
//import { FaPlusCircle } from 'react-icons/fa';
import zxcvbnModule from 'zxcvbn';

type createUserForm = {
  username: string;
  password: string;
  phonenumber: string;
  emailaddress: string;
  usertype: string;
};

const SignUpUser: NextPage = () => {
  const createUser = api.users.createUser.useMutation();
  const router = useRouter();

  const { register, handleSubmit } = useForm<createUserForm>();
  const onSubmit = async (formData: createUserForm) => {
    const passwordStrength = zxcvbnModule(formData.password);

    if (passwordStrength.score < 2) {
      // If password is weak, show error message and prevent form submission
      alert('Your password is too weak. Please choose a stronger password.');
      return;
    }

    try {
      const createdUser = await createUser.mutateAsync({
        username: formData.username,
        password: formData.password,
        phonenumber: formData.phonenumber,
        emailaddress: formData.emailaddress,
        usertype: formData.usertype,
      });

      if (formData.usertype === 'S') {
        router.push({
          pathname: '/signUpSeller',
          query: { user_id: createdUser.user_id },
        });
      } else if (formData.usertype === 'C') {
        router.push({
          pathname: '/signUpCus',
          query: { user_id: createdUser.user_id },
        });
      }
    } catch (error) {
      console.error(error);
    }
  };
  
  return (
    <>
      <Head>
        {/* Head content */}
      </Head>
  
      <div className="bg-gray-50 py-8">
        <div className="mx-auto max-w-6xl px-4 sm:px-10 lg:px-10">
          <div className="flex justify-center">
            <h2
              className="text-3xl font-bold uppercase tracking-wide text-black text-center"
              style={{ fontFamily: "YourFontName, sans-serif" }}
            >
              Sign Up
            </h2>
          </div>
  
          <div className="mt-10">
            <form
              className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-8"
              onSubmit={handleSubmit(onSubmit)}
            >
              <div className="mb-2 flex items-center form-field">
  <label
    htmlFor="phoneNumber"
    className="mr-0 ml-50 block text-lg font-medium text-black"
    style={{ minWidth: "145px" }}
  >
    Phone Number
  </label>
  <div className="relative mt-1 rounded-lg shadow-sm">
    <input
      type="number"
      id="phonenumber"
      className="block w-full px-4 py-4 rounded-lg focus:border-green-500 focus:border-indigo-500 focus:outline-none focus:ring-green-500 focus:ring-indigo-500 sm:text-sm text-left w-full"
      style={{ width: "300px" }} // Set the desired width here (e.g., 300px)
      placeholder="Enter phone number"
      {...register("phonenumber", { required: true })}
    />
    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3"></div>
  </div>
</div>

  
              {/* Username */}
              <div className="mb-2 flex items-center form-field">
                <label
                  htmlFor="username"
                  className="mr-0 ml-0 block text-lg font-medium text-black"
                  style={{ minWidth: "145px" }}
                >
                  Username
                </label>
                <div className="relative mt-1 rounded-lg shadow-sm">
                  <input
                    type="text"
                    id="username"
                    className="block w-full px-4 py-4 rounded-lg focus:border-green-500 focus:border-indigo-500 focus:outline-none focus:ring-green-500 focus:ring-indigo-500 sm:text-sm text-left w-full"
                    style={{ width: "300px" }} 
                    placeholder="
                    Enter username"
                    {...register("username", { required: true })}
                    />
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3"></div>
                    </div>
                    </div>
                            {/* Password */}
        <div className="mb-2 flex items-center form-field">
          <label
            htmlFor="password"
            className="mr-0 ml-0 block text-lg font-medium text-black"
            style={{ minWidth: "145px" }}
          >
            Password
          </label>
          <div className="relative mt-1 rounded-lg shadow-sm">
            <input
              type="password"
              id="password"
              className="block w-full px-4 py-4 rounded-lg focus:border-green-500 focus:border-indigo-500 focus:outline-none focus:ring-green-500 focus:ring-indigo-500 sm:text-sm text-left w-full"
              style={{ width: "300px" }} 
              placeholder="Enter password"
              {...register("password", { required: true })}
            />
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3"></div>
          </div>
        </div>

        {/* Email Address */}
        <div className="mb-2 flex items-center form-field">
          <label
            htmlFor="email_address"
            className="mr-0 ml-0 block text-lg font-medium text-black"
            style={{ minWidth: "145px" }}
          >
            Email Address
          </label>
          <div className="relative mt-1 rounded-lg shadow-sm">
            <input
              type="email"
              id="email_address"
              className="block w-full px-4 py-4 rounded-lg focus:border-green-500 focus:border-indigo-500 focus:outline-none focus:ring-green-500 focus:ring-indigo-500 sm:text-sm text-left w-full"
              style={{ width: "300px" }} 
              placeholder="Enter Email Address"
              {...register("emailaddress", { required: true })}
            />
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-0"></div>
          </div>
        </div>

        {/* User Type */}
        <div className="mb-2 flex items-center form-field">
  <label
    htmlFor="usertype"
    className="mr-0 ml-0 block text-lg font-medium text-black"
    style={{ minWidth: "145px" }}
  >
    User Type
  </label>
  <div className="relative mt-1 rounded-lg shadow-sm">
    <select
      id="usertype"
      className="block w-full px-4 py-4 rounded-lg focus:border-green-500 focus:border-indigo-500 focus:outline-none focus:ring-green-500 focus:ring-indigo-500 sm:text-sm text-left w-64 h-15" // Updated className and height
      style={{ fontFamily: "Times New Roman", fontSize: "16px" }} // Added fontSize
      {...register("usertype", { required: true })}
    >
      <option value="">Select user type</option>
      <option value="S">Seller</option>
      <option value="C">Customer</option>
    </select>
  </div>
</div>


        {/* Sign Up Button */}
        <div className="flex justify-center sm:col-span-2 mt-4">
  <button className="mx-auto rounded bg-green-500 px-8 py-4 font-bold text-white text-lg hover:bg-green-700 transition-colors duration-300">
    <div className="flex items-center justify-center">
      <span className="text-sm text-white">Next</span>
    </div>
  </button>
</div>

      </form>
    </div>
  </div>
</div>
</>
)};
  
export default SignUpUser;