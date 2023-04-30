import { offer } from "@prisma/client";
import { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { api } from "~/utils/api";
import { useState, useEffect } from 'react';
import { FaCheckCircle, FaTimes,FaArrowCircleRight } from 'react-icons/fa';

type NotificationProps = {
  message: string;
  duration: number;
  color: string;
};

function Notification({ message, duration, color }: NotificationProps) {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setVisible(false);
    }, duration - 10000);
  
    return () => clearTimeout(timeout);
  }, [duration, setVisible]);

  useEffect(() => {
    const interval = setInterval(() => {
      const newOpacity = parseFloat((visible ? 1 : 0).toFixed(1)) - 0.1;
      if (newOpacity >= 0 && newOpacity <= 1) {
        setVisible(newOpacity > 0);
      } else {
        clearInterval(interval);
      }
    }, 500);
  
    return () => clearInterval(interval);
  }, [visible]);

  return (
    <div
      className={`fixed bottom-4 right-4 p-2 rounded-lg text-white ${
        visible ? `bg-${color}-500` : `bg-${color}-300 opacity-0 pointer-events-none`
      }`}
      style={{
        backgroundColor: color,
        transition: 'all 0.9s ease',
        transform: visible ? 'scale(1)' : 'scale(0.8)',
        opacity: visible ? 1 : 0,
      }}
    >
      <div className="flex justify-between items-center">
        <span className="flex items-center">
          <FaCheckCircle className={`mr-2 ${visible ? 'animate-bounce' : ''}`} />
          {message}
        </span>
        <button
          className="text-white hover:text-gray-200 ml-2 focus:outline-none"
          onClick={() => setVisible(false)}
        >
          <FaTimes />
        </button>
      </div>
    </div>
  );
}


type CardProps = {
  Offer: offer;
};

function Card({ Offer }: CardProps) {
  const [showNotification, setShowNotification] = useState(false);
  const isFinished = Offer.numberofboxes === 0;

  const handleAddToCart = () => {
    setShowNotification(true);
  };

  return (
     <div className="max-w-sm rounded-lg border border-gray-200 bg-white shadow-lg dark:border-gray-700 dark:bg-gray-700 transition-all duration-300 hover:border-green-500 hover:shadow-xl">
      <div className={`relative h-32 w-full ${Offer.numberofboxes === 0 ? 'bg-gray-400' : 'bg-gradient-to-b from-green-400 to-green-600'}`}>
        <Image className="object-cover transform transition-all duration-500 hover:rotate-3" src="/icons/restaurant.png" alt="" fill />
        {isFinished && (
          <img
            className="absolute top-0 right-0 w-12 h-12 animate-bounce"
            src="/icons/sales.gif"
            alt="Sold out"
          />
        )}
      </div>
      <div className="p-5 text-green-800 dark:text-green-300">
        <a href="/offersPage">
          <h2 className="mb-2 text-xl font-bold">
            {Offer.seller_id} - DH {Offer.price}
          </h2>
        </a>
        {isFinished ? (
          <p className="mb-3 text-red-500 text-sm font-medium">Sold Out</p>
        ) : (
          <p className="mb-3 text-gray-500 text-sm font-medium">{Offer.numberofboxes} boxes available</p>
        )}
                       {!isFinished && (
          <button
            onClick={handleAddToCart}
            className="inline-flex items-center rounded-lg bg-green-500 px-4 py-2 text-center text-sm font-medium text-white hover:bg-green-600 focus:outline-none focus:ring-4 focus:ring-green-300 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
          >
            Reserve
            <span className="ml-2">
              <FaArrowCircleRight className="animate-bounce" />
            </span>
          </button>
        )}

        {showNotification && (
          <Notification message="Offer reserved successfully" duration={2000} color="green" />
        )}
      </div>
    </div>
  );
}
  
  const OffersPage: NextPage = () => {
    const offersList = api.offers.listOffers.useQuery();
  
    return (
      <>
        <Head>
          <title>Walu Maydi3 | Offers for Sale</title>
          <meta name="description" content="Find the latest offers for sale on Walu Maydi3" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <main className="container mx-auto flex flex-col gap-12 bg-gray-100 p-4">
          <h1 className="text-4xl text-green-500 font-bold mb-1" style={{ fontFamily: "Times New Roman"} }>Offers for Sale</h1>
          <p className="text-sm text-gray-500 mb-2 italic"> Discover great deals on a variety of products and services! Our offers range from discounts on local restaurants and shops to exclusive deals on luxury travel and experiences. Check back often to see our latest offers.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            {offersList?.data?.map((offer) => (
              <Card key={offer.offer_id} Offer={offer} />
            ))}
          </div>
        </main>
      </>
    );
  };
    export default OffersPage;