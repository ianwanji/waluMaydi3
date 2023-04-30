import { UserButton } from '@clerk/nextjs';
import Link from 'next/link';
import { FaEnvelope, FaPhone } from 'react-icons/fa';

const NavBar = ({ user }: { user: boolean }) => {
  return (
    <nav className="flex items-center justify-between bg-green-700 py-4 px-6 shadow">
      <Link href="/">
        <a className="text-white text-3xl font-bold">Walu Maydi3</a>
      </Link>

      <div className="flex items-center">
        {user ? (
          <Link href="/dashboard">
            <a className="text-white text-base mr-4 hover:text-gray-300">Dashboard</a>
          </Link>
        ) : (
          <Link href="/login">
            <a className="text-white text-base mr-4 hover:text-gray-300">Login</a>
          </Link>
        )}

        <UserButton />
      </div>
    </nav>
  );
};

const Footer = () => {
  return (
    <footer className="bg-green-500 py-1 px-2 text-white text-center">
      <p className="text-base">&copy; {new Date().getFullYear()} Walu Maydi3. All rights reserved.</p>
    </footer>
  );
};

const AboutUs = () => {
  return (
    <div className="container mx-auto px-4 py-8">
  <div className="bg-yellow-500 h-40 flex items-center justify-center">
    <h1 className="text-4xl font-bold text-white">About Us</h1>
  </div>
  
  <div className="bg-white p-6 rounded-lg shadow-lg mt-8">
    <h2 className="text-2xl font-bold mb-4 text-orange-500">Our Mission</h2>
    <p className="text-lg text-gray-700 leading-relaxed mb-4"style={{ fontFamily: "Roboto Slab" }}>
      At Walu Maydi3, our mission is to fight food waste in Ifrane and create a sustainable food ecosystem by connecting local businesses with customers in need.
    </p>
    <img src="/icons/wastefood.gif" alt="Image of food waste" className="w-full h-auto rounded-lg mb-4" />
  </div>

  <div className="bg-white p-6 rounded-lg shadow-lg mt-8">
    <h2 className="text-2xl font-bold mb-4 text-orange-500">Our Objectives</h2>
    <div className="mb-4">
      <img src="/icons/recycling.png" alt="Reduce food waste icon" className="w-6 h-6 inline-block mr-3" />
      <p className="text-lg text-gray-700 leading-relaxed inline-block">Reduce food waste in the city of Ifrane.</p>
    </div>
    <div className="mb-4">
      <img src="/icons/food.png" alt="Provide affordable meals icon" className="w-6 h-6 inline-block mr-3" />
      <p className="text-lg text-gray-700 leading-relaxed inline-block">Provide affordable meals to customers.</p>
    </div>
    <div className="mb-4">
      <img src="/icons/business.png" alt="Prevent business losses icon" className="w-6 h-6 inline-block mr-3" />
      <p className="text-lg text-gray-700 leading-relaxed inline-block">Prevent business losses.</p>
    </div>
    <div>
      <img src="/icons/environmental-protection.png" alt="Promote environmental sustainability icon" className="w-6 h-6 inline-block mr-3" />
      <p className="text-lg text-gray-700 leading-relaxed inline-block">Promote environmental sustainability.</p>
    </div>
  </div>

  <div className="bg-white p-4 rounded-lg shadow-lg mt-4">
  <h2 className="text-2xl font-bold mb-2 text-green-700" style={{ fontFamily: "Times New Roman"}}>Our Team</h2>
  <div className="flex flex-wrap justify-center -mx-4">
    <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 px-4 mb-6">
      <div className="bg-gray-100 rounded-lg p-4 hover:shadow-xl transition duration-300">
        <div className="w-32 h-32 mx-auto mb-4 overflow-hidden rounded-full border-4 border-green-700">
          <img src="../icons/optimist.png" alt="Team member" className="object-cover w-full h-full" />
        </div>
        <h3 className="text-lg font-bold mb-2">John Doe</h3>
        <p className="text-base text-gray-800 leading-relaxed mb-4">Co-founder and CEO</p>
        <div className="flex justify-center space-x-4">
          <a href="#" className="text-gray-600 hover:text-gray-900 transition duration-300">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 7.172a4 4 0 00-5.656 0M12 2a10 10 0 00-9.95 10.539l.007.383a8 8 0 0015.872 0l.007-.383A10 10 0 0012 2zM3 12a9 9 0 0111.95-8.539l.007-.383a7 7 0 00-13.872 0l.007.383A9 9 0 013 12zm18 0a9 9 0 01-11.95 8.539l-.007.383a7 7 0 0013.872 0l-.007-.383A9 9 0 0121 12z" />
            </svg>
          </a>
          <a href="#" className="text-gray-600 hover:text-gray-900 transition duration-300">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h16M4 14h16M4 18h16" />
            </svg>
          </a>
        </div>
      </div>
    </div>
        </div>
      </div>
    </div>
  );
};
export default AboutUs;