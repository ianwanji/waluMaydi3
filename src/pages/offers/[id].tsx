import { useRouter } from "next/router";
import Head from "next/head";
import { api } from "~/utils/api";
import { NextPage } from "next";

const OfferView: NextPage = () => {
  const router = useRouter();

  const offer = api.offers.getOffer.useQuery(
    
    {
      offerid: router.query.offer_id as string  ,
    },
    {
      enabled: !!router.query.offer_id,
    }
  );

  if (offer.isLoading) {
    // Render loading state
    return <div>Loading...</div>;
  }

  if (offer.error) {
    // Render error state
    return <div>Error: {offer.error.message}</div>;
  }

  const offerItem = offer.data;

  if (!offerItem) {
    return null;
  }

  


  return (
    <>
      <Head>
        <title>View Offers</title>
        <meta name="description" content="Walu maydi3" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen flex-col gap-12 bg-gray-800">
        {/* <h1 className="mt-12 text-4xl">{offerItem.offer_id}</h1> */}
      </main>
    </>
  );
};

export default OfferView;
