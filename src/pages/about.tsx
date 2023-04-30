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
    <footer className="bg-green-700 py-4 px-6 text-white text-center">
      <p className="text-base">&copy; {new Date().getFullYear()} Walu Maydi3. All rights reserved.</p>
    </footer>
  );
};

const AboutUs = () => {
  return (
    <div className="container mx-auto px-4 py-6">
      <h1 className="text-3xl font-bold mb-4 mt-2 text-center text-green-700">About Us</h1>
      <div className="bg-white p-4 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-2 text-green-700">Our Mission</h2>
        <p className="text-base text-gray-800 leading-relaxed">
          At Walu Maydi3, our mission is to fight food waste in Ifrane and create a sustainable food ecosystem by connecting local businesses with customers in need.
        </p>
      </div>
      <div className="bg-white p-4 rounded-lg shadow-lg mt-4">
        <h2 className="text-2xl font-bold mb-2 text-green-700">Our Objectives</h2>
        <ul className="list-disc ml-6 mb-4 text-base text-gray-800">
          <li>Reduce food waste in the city of Ifrane.</li>
          <li>Provide affordable meals to customers.</li>
          <li>Prevent business losses.</li>
          <li>Promote environmental sustainability.</li>
        </ul>
      </div>
      <div className="bg-white p-4 rounded-lg shadow-lg mt-4">
        <h2 className="text-2xl font-bold mb-2 text-green-700">Our Value Proposition</h2>
        <p className="text-base text-gray-800 leading-relaxed">
          Walu Maydi3 is the first initiative of its kind in Morocco, aiming to solve the problem of food waste in local restaurants and hotels in Ifrane. Our platform offers a solution that benefits society, the environment, and businesses in multiple ways:
        </p>
        <ul className="list-disc ml-6 mb-4 text-base text-gray-800">
          <li>Reduces food waste by allowing businesses to offer unsold fresh food at affordable prices.</li>
          <li>Provides affordable meals to customers, contributing to food security and accessibility.</li>
          <li>Helps businesses avoid losses by converting food surplus into
          revenue.</li>
<li>Promotes environmental sustainability by reducing food waste and its negative impacts on the environment.</li>
</ul>
</div>
<div className="bg-white p-4 rounded-lg shadow-lg mt-4">
<h2 className="text-2xl font-bold mb-2 text-green-700">Contact Us</h2>
<p className="mb-2 text-base text-gray-800">
If you have any questions or concerns, feel free to contact us at:
</p>
<ul className="list-disc ml-6 mb-4 text-base text-gray-800">
<li>
<span className="flex items-center">
<FaEnvelope className="h-5 w-5 text-green-700 mr-2" />
<a href="mailto:info@walumaydi3.com" className="text-green-700 hover:underline">info@walumaydi3.com</a>
</span>
</li>
<li>
<span className="flex items-center">
<FaPhone className="h-5 w-5 text-green-700 mr-2" />
<a href="tel:+1234567890" className="text-green-700 hover:underline">+123-456-7890</a>
</span>
</li>
<li>
<span className="flex items-center">
<svg className="h-5 w-5 text-green-700 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
</svg>
123 Main St, Ifrane, Morocco
</span>
</li>
</ul>
</div>
<Footer />
</div>
);
};

export default AboutUs;