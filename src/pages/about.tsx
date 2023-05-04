/* eslint-disable */

// const NavBar = ({ user }: { user: boolean }) => {
//   return (
//     <nav className="flex items-center justify-between bg-green-700 px-6 py-4 shadow">
//       <Link href="/">
//         <a className="text-3xl font-bold text-white">Walu Maydi3</a>
//       </Link>

//       <div className="flex items-center">
//         {user ? (
//           <Link href="/dashboard">
//             <a className="mr-4 text-base text-white hover:text-gray-300">
//               Dashboard
//             </a>
//           </Link>
//         ) : (
//           <Link href="/login">
//             <a className="mr-4 text-base text-white hover:text-gray-300">
//               Login
//             </a>
//           </Link>
//         )}
//       </div>
//     </nav>
//   );
// };
import { NavBar } from "~/components/NavBar";

const Footer = () => {
  return (
    <footer className="bg-green-500 px-2 py-1 text-center text-white">
      <p className="text-base">
        &copy; {new Date().getFullYear()} Walu Maydi3. All rights reserved.
      </p>
    </footer>
  );
};

const AboutUs = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <NavBar />
      <div className="flex h-40 items-center justify-center bg-yellow-500">
        <h1 className="text-4xl font-bold text-white">About Us</h1>
      </div>

      <div className="mt-8 rounded-lg bg-white p-6 shadow-lg">
        <h2 className="mb-4 text-2xl font-bold text-orange-500">Our Mission</h2>
        <p
          className="mb-4 text-lg leading-relaxed text-gray-700"
          style={{ fontFamily: "Roboto Slab" }}
        >
            At Walu Maydi3, Our mission is to tackle food waste in Ifrane by connecting customers with restaurants,hotels, 
          and groceries that have excess food at the end of the day. Our mission is to reduce food waste in Ifrane
          city, provide affordable meals to customers, prevent businesses from losses, and promote environmental sustainability. 

        </p>
        <img
          src="/icons/wastefood.gif"
          alt="Image of food waste"
          className="mb-4 h-auto w-full rounded-lg"
        />
      </div>

      <div className="mt-8 rounded-lg bg-white p-6 shadow-lg">
        <h2 className="mb-4 text-2xl font-bold text-orange-500">
          Our Objectives
        </h2>
        <div className="mb-4">
          <img
            src="/icons/recycling.png"
            alt="Reduce food waste icon"
            className="mr-3 inline-block h-6 w-6"
          />
          <p className="inline-block text-lg leading-relaxed text-gray-700">
            Reduce food waste in the city of Ifrane.
          </p>
        </div>
        <div className="mb-4">
          <img
            src="/icons/food.png"
            alt="Provide affordable meals icon"
            className="mr-3 inline-block h-6 w-6"
          />
          <p className="inline-block text-lg leading-relaxed text-gray-700">
            Provide affordable meals to customers.
          </p>
        </div>
        <div className="mb-4">
          <img
            src="/icons/business.png"
            alt="Prevent business losses icon"
            className="mr-3 inline-block h-6 w-6"
          />
          <p className="inline-block text-lg leading-relaxed text-gray-700">
            Prevent business losses.
          </p>
        </div>
        <div>
          <img
            src="/icons/environmental-protection.png"
            alt="Promote environmental sustainability icon"
            className="mr-3 inline-block h-6 w-6"
          />
          <p className="inline-block text-lg leading-relaxed text-gray-700">
            Promote environmental sustainability.
          </p>
        </div>
      </div>

     
              
                <a
                  href="#"
                  className="text-gray-600 transition duration-300 hover:text-gray-900"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                   
                  </svg>
                </a>
              </div>
  );
};
export default (AboutUs);
