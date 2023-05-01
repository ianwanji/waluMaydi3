import { useRouter } from 'next/router';
import { api } from '~/utils/api';
import { NextPage } from "next";
import Head from "next/head";
import { useForm } from "react-hook-form";
import { FaBoxes, FaMoneyBillWave, FaPlusCircle } from 'react-icons/fa';

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
  
    const { register, handleSubmit } = useForm<CreateCusForm>();
    const onSubmit = (formData: CreateCusForm) => {
      createCus
        .mutateAsync({
          cus_id: parseInt(user_id),
          fname: formData.fname,
          lname: formData.lname,
          dob: new Date(formData.dob),
          gender: formData.gender,
        })
        .then(() => {
          router.push('/');
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
      <div className="w-full max-w-sm bg-blue-50 rounded-lg shadow-lg p-6 font-serif">
          <h1 className="text-4xl text-green-500 font-bold text-center mb-8">
            Sign Up As Customer
          </h1>
          <form className="flex flex-col gap-4 items-center" onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-col gap-2 w-full">
              <label htmlFor="fname" className="text-lg font-medium text-black">
                <FaMoneyBillWave className="inline-block mr-2 mb-1" />
                fname
              </label>
              <div className="relative w-full">
                <input
                  id="fname"
                  type="string"
                  className="block w-full rounded-lg border border-black-200 bg-white p-2.5 text-sm text-gray-900 focus:border-green-500 focus:ring-green-500"
                  style={{ fontFamily: 'Times New Roman' }}
                  {...register("fname", { required: true })}
                />
                <div className="absolute top-2 right-2 text-green-700">
                  <FaPlusCircle size={20} />
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-2 w-full">
              <label htmlFor="lname" className="text-lg font-medium text-green-500">
                <FaMoneyBillWave className="inline-block mr-2 mb-1" />
                lname
              </label>
              <div className="relative w-full">
                <input
                  id="lname"
                  type="string"
                  className="block w-full rounded-lg border border-green-200 bg-white p-2.5 text-sm text-gray-900 focus:border-black-500 focus:ring-black-500"
                  style={{ fontFamily: 'Times New Roman' }}
                  {...register("lname", { required: false })}
                />
                <div className="absolute top-2 right-2 text-black-700">
                  <FaPlusCircle size={20} />
                </div>
              </div>
            </div> 
            


            <div className="flex flex-col gap-2 w-full">
              <label htmlFor="dob" className="text-lg font-medium text-green-500">
                <FaMoneyBillWave className="inline-block mr-2 mb-1" />
                dob
              </label>
              <input
                id="dob"
                type="string"
                className="block w-full rounded-lg border border-green-200 bg-white p-2.5 text-sm text-gray-900 focus:border-black-500 focus:ring-black-500"
                style={{ fontFamily: 'Times New Roman' }}
                {...register("dob", { required: true })}
              />
            </div>

            <div className="flex flex-col gap-2 w-full">
              <label htmlFor="gender" className="text-lg font-medium text-green-500">
                <FaMoneyBillWave className="inline-block mr-2 mb-1" />
                gender
              </label>
              <input
                id="gender"
                type="string"
                className="block w-full rounded-lg border border-green-200 bg-white p-2.5 text-sm text-gray-900 focus:border-black-500 focus:ring-black-500"
                style={{ fontFamily: 'Times New Roman' }}
                {...register("gender", { required: true })}
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

export default SignUpCus;