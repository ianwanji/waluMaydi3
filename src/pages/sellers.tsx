import { seller } from "@prisma/client";
import { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { api } from "~/utils/api";
import { useState, useEffect } from 'react';

type CardProps = {
  seller: seller;
};

const SellerCard: React.FC<CardProps> = ({ seller }) => {
  const [showDetails, setShowDetails] = useState(false);

  const handleShowDetails = () => {
    setShowDetails(!showDetails);
  };

  return (
    <div className="bg-gray-100 p-4 rounded-md">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold">{seller.seller_name}</h2>
        <button
          className="px-3 py-1 text-sm rounded-md bg-green-500 text-white hover:bg-green-600"
          onClick={handleShowDetails}
        >
          {showDetails ? "Hide Details" : "Show Details"}
        </button>
      </div>
      {showDetails && (
        <div className="mb-4">
          <p className="text-gray-500">{seller.seller_description}</p>
          <p className="text-gray-500">{seller.location}</p>
          <p className="text-gray-500">{seller.usertype}</p>
        </div>
      )}
    </div>
  );
};

const SellersPage: NextPage = () => {
  const sellersList = api.sellers.listSellers.useQuery();

  return (
    <>
      <Head>
        <title>Walu Maydi3 | Our Sellers</title>
        <meta name="description" content="OUR SELLERS" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="container mx-auto flex flex-col gap-12 bg-gray-100 p-4">
        <h1 className="text-4xl text-green-500 font-bold mb-1" style={{ fontFamily: "Times New Roman"} }>Sellers</h1>
        <p className="text-sm text-gray-500 mb-2 italic"> Best sellers.</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
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
