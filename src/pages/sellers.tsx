
/* eslint-disable */





import { seller } from "@prisma/client";
import Head from "next/head";
import { api } from "~/utils/api";
import { useState } from 'react';
import { NavBarCus } from "~/components/NavBarCus";


type CardProps = {
  seller: seller;
};

const SellerCard: React.FC<CardProps> = ({ seller }) => {
  const [showDetails, setShowDetails] = useState(false);

  const handleShowDetails = () => {
    setShowDetails(!showDetails);
  };

  return (
    <div className="bg-white shadow-md rounded-md p-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold text-gray-800">{seller.seller_name}</h2>
        <button
          className="px-3 py-2 text-sm rounded-md bg-green-500 text-white hover:bg-green-600 focus:outline-none"
          onClick={handleShowDetails}
          aria-label={showDetails ? "Hide Details" : "Show Details"}
        >
          {showDetails ? "Hide Details" : "Show Details"}
        </button>
      </div>
      {showDetails && (
        <div className="mb-4">
          <p className="text-gray-600 text-sm">{seller.seller_description}</p>
          <p className="text-gray-600 text-sm">{seller.location}</p>
          <p className="text-gray-600 text-sm">{seller.usertype}</p>
        </div>
      )}
    </div>
  );
};

const SellersPage = () => {
  const sellersList = api.sellers.listSellers.useQuery();

  return (
    <>
      <Head>
        <title>Walu Maydi3 | Our Sellers</title>
        <meta name="description" content="Discover the best sellers on Walu Maydi3." />
        <link rel="icon" href="/iconnav.ico" />
      </Head>
      <NavBarCus user_id={""} />

      <main className="container mx-auto flex flex-col gap-8 bg-gray-100 p-4">
        <h1 className="text-4xl text-green-500 font-bold mb-2">Our Sellers</h1>
        <p className="text-gray-600 text-sm mb-6">Discover the best sellers on Walu Maydi3.</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {sellersList.isSuccess &&
            sellersList.data.map((seller) => (
              <SellerCard key={seller.seller_id} seller={seller} />
            ))}
        </div>
      </main>
    </>
  );
};

export default SellersPage;