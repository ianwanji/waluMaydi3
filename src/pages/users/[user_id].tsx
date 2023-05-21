
/* eslint-disable */
/* eslint-disable @typescript-eslint/consistent-type-imports */
/* eslint-disable @typescript-eslint/no-floating-promises */
/* eslint-disable react/no-unescaped-entities */



import Image from "next/image";
import { useRouter } from "next/router";
import { api } from "~/utils/api";
import { NextPage } from "next";
import { FaFacebook, FaMoneyBillAlt, FaTwitter, FaUser } from "react-icons/fa";
import { user_acc, seller, customer } from "@prisma/client";
import { NavBarCus } from "~/components/NavBarCus";
import { NavBarSeller } from "~/components/NavBarSeller";



const Profileview: NextPage = () => {
    const router = useRouter();
  
    const profile = api.users.getUser.useQuery(
      {
        userid: router.query.user_id as string,
      },
      {
        enabled: !!router.query.user_id,
      }
    );
  
    if (profile.error) {
      // Render error state
      return <div>Error: {profile.error.message}</div>;
    }
  
    const profileItem = profile.data as
      | { user: user_acc; seller: seller | null; customer?: undefined }
      | { user: user_acc; customer: customer | null; seller?: undefined }
      | undefined;
  
    if (!profileItem) {
      return null;
    }
  
    const { user, seller, customer } = profileItem;
    
    // Define the avatar image based on the customer's gender
    const avatar = customer && customer.gender === 'F'
    ? '/icons/woman.png'
    :customer && customer.gender === 'M'
    ? '/icons/profile.png'
    : '/icons/open-sign.png';
    return (
        <>
              {user.usertype === "C" ? <NavBarCus /> :       <NavBarSeller/>
}
          <div className="bg-gray-100 min-h-102">
            <div className="container mx-auto px-1 py-8 flex flex-col items-center">
              <Image
                className="w-32 h-32 rounded-full border-4 border-white mb-4"
                src={avatar}
                alt="Profile Picture"
                width={200}
         height={200}
              />
              <h1 className="text-3xl font-bold mb-2">{user.username}</h1>
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
                <h2 className="text-2xl font-bold mb-4">Profile Information</h2>
                <div className="mb-4 space-y-2">
                  <p className="text-sm text-gray-800">
                    UserID: {user.user_id}
                  </p>
                  <p className="text-sm text-gray-800">
                    UserType: {user.usertype} ({user.usertype === 'S' ? 'Seller' : 'Customer'})
                  </p>
                  {seller && (
                    <>
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