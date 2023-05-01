import { useRouter } from "next/router";
import Head from "next/head";
import { api } from "~/utils/api";
import { NextPage } from "next";
import {
  FaMoneyBillAlt,
  FaFacebook,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";
import { IoMdInformationCircle } from "react-icons/io";
import { AiOutlineShoppingCart } from "react-icons/ai";
import Image from "next/image";

const OfferView: NextPage = () => {
  const router = useRouter();

  const offer = api.offers.getOffer.useQuery(
    {
      offerid: router.query.offer_id as string,
    },
    {
      enabled: !!router.query.offer_id,
    }
  );

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
      <div className="bg-gray-100 min-h-screen bg-pattern" style={{ backgroundImage: `url(${pattern})` }}>
        <div className="container mx-auto px-4 py-8 flex flex-col items-center">
          <img
            className="w-32 h-32 rounded-full border-4 border-white mb-4"
            src={avatar}
            alt="Profile Picture"
          />
          <h1 className="text-4xl font-bold mb-2">{user.username}</h1>
          <p className="text-lg text-gray-600 mb-4">{user.emailaddress}</p>
          <div className="flex space-x-4">
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:text-blue-600 transition duration-300"
            >
              <FaFacebook size={24} />
            </a>
            <a
              href="https://www.twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:text-blue-600 transition duration-300"
            >
              <FaTwitter size={24} />
            </a>
          </div>
        </div>
      </div>
      <main className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <div className="bg-white p-8 rounded-lg shadow">
            <h2 className="text-3xl font-bold mb-4">Profile Information</h2>
            <div className="mb-4 space-y-2">
              <p className="text-lg text-gray-800 font-bold">
                {seller && "Seller Information"}
                {customer && "Customer Information"}
              </p>
              <p className="text-sm text-gray-800">
                UserID: {user.user_id}
              </p>
              {seller && (
                <>
                  <p className="text-sm text-gray-800">
                    UserType: Seller
                  </p>
                  <p className="text-gray-600">
                    Seller Description: {seller.seller_description}
                  </p>
                  <p className="text-gray-600">
                    Location: {seller.location}
                  </p>
                </>
              )}
              {customer && (
                <>
                  <p className="text-sm text-gray-800">
                    UserType: Customer
                  </p>
                  <p className="text-gray-600">
                    Last Name: {customer.lname}
                  </p> 
                  <p className="text-gray-600">
                    First Name: {customer.fname}
                  </p>
                  <p className="text-gray-600">
                    Date of Birth: {customer.dob.toLocaleDateString()}
                  </p>
                  <p className="text-gray-600">
                    Phone Number: {user.phonenumber}
                  </p>
                </>
              )}
            </div>
          </div>
          <div className="bg-white p-8 rounded-lg shadow">
            <h2 className="text-3xl font-bold mb-4">Activity Log</h2>
            <p className="text-gray-600">No recent activity to display.</p>
          </div>
        </div>
      </main>
    </>
  );
};

export default Profileview;