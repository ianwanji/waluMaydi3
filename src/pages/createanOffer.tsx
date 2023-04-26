import { type NextPage } from "next";
import Head from "next/head";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
import { api } from "../utils/api";




const createanOffer: NextPage = () => {

type createOfferForm = {
    offer_id   : string,
        seller_id      :   string,
        offer_description :string,
        price        :   string,
        numberofboxes :   string
      
  };


  const createOffer = api.offers.createOffers.useMutation();
  const router = useRouter();

  const { register, handleSubmit } = useForm<createOfferForm>();
  const onSubmit = (formData: createOfferForm) => {
    createOffer
      .mutateAsync({
        ...formData,
         
        price: parseFloat(formData.price),
        numberofboxes: parseInt(formData.numberofboxes),
        seller_id: parseInt(formData.seller_id),
        offer_id: parseInt(formData.offer_id),




      })
      .then(() => {
        router.push("/");
      });
  };


  
  return (
    <>
      <Head>
        <title>Create an Offer</title>
        <meta name="description" content="Walu Maydi3" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-center bg-gray-800">
        <div className="container flex flex-col gap-12 px-4 py-16 ">
          <h1 className="text-4xl">Create an Offer</h1>
          <form
            className="flex flex-col gap-4"
            onSubmit={handleSubmit(onSubmit)}
          >
                        <div>
              <label
                htmlFor="offer_id"
                className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
              >
                Offer ID
              </label>
              <input
                id="offerID"
                type="number"
                className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                {...register("offer_id", { required: true })}
              />
            </div>


            <div>
              <label
                htmlFor="seller_id"
                className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
              >
                seller ID
              </label>
              <input
                id="seller ID"
                type="number"
                className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                {...register("seller_id", { required: true })}
              />
            </div>
            <div>
              <label
                htmlFor="offer_description"
                className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
              >
                Description
              </label>
              <textarea
                id="description"
                className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                {...register("offer_description", { required: true })}
              />
            </div>
            <div>
              <label
                htmlFor="numberofboxes"
                className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
              >
                Number of Boxes
              </label>
              <input
                id="numberofboxes"
                type="number"
                className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                {...register("numberofboxes", { required: true })}
              />
            </div>


            <div>
              <label
                htmlFor="price"
                className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
              >
                Price
              </label>
              <input
                id="price"
                type="number"
                step="0.01"
                className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                {...register("price", { required: true })}
              />
            </div>
            

            <button
              type="submit"
              className="mb-2 mr-2 rounded-lg bg-blue-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Create
            </button>
          </form>
        </div>
      </main>
    </>
  );
}
export default createanOffer;



  
