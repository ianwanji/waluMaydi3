import React from 'react';
import { FaEnvelope, FaPhone, FaBriefcase, FaComment, FaCalendarAlt, FaStar, FaTools, FaLock, FaWrench, FaInstagram, FaTwitter, FaFacebook } from 'react-icons/fa';

const ServicesPage = () => {
  return (
    <div className="container mx-auto">
      <section className="py-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Services Overview</h1>
          <p className="text-gray-600">
            Welcome to our Services page! We offer a range of services to enhance your experience on our platform.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center mb-4">
              <FaBriefcase className="text-xl text-green-500 mr-2" />
              <h2 className="text-xl font-bold mb-2">Business Profile Creation</h2>
            </div>
            <p className="text-gray-600">
              We offer businesses the ability to register and create a profile on our website.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center mb-4">
              <FaComment className="text-xl text-green-500 mr-2" />
              <h2 className="text-xl font-bold mb-2">Messaging System</h2>
            </div>
            <p className="text-gray-600">
              Our messaging system allows for direct communication between businesses and customers.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center mb-4">
              <FaCalendarAlt className="text-xl text-green-500 mr-2" />
              <h2 className="text-xl font-bold mb-2">Reservation Management System</h2>
            </div>
            <p className="text-gray-600">
              Our reservation management system allows businesses to manage and schedule reservations.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center mb-4">
              <FaStar className="text-xl text-green-500 mr-2" />
              <h2 className="text-xl font-bold mb-2">Ratings and Reviews System</h2>
            </div>
            <p className="text-gray-600">
              Our ratings and reviews system allows customers to leave feedback and rate their experiences with businesses.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center mb-4">
              <FaTools className="text-xl text-green-500 mr-2" />
              <h2 className="text-xl font-bold mb-2">Maintenance and Support</h2>
            </div>
            <p className="text-gray-600">
              We offer maintenance and support services to ensure that businesses can operate smoothly on our platform.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center mb-4">
              <FaLock className="text-xl text-green-500 mr-2" />
              <h2 className="text-xl font-bold mb-2">Security and Privacy</h2>
            </div><p className="text-gray-600">
              We take security and privacy very seriously on our platform and offer various measures to ensure that user data is protected.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center mb-4">
              <FaWrench className="text-xl text-green-500 mr-2" />
              <h2 className="text-xl font-bold mb-2">Customization</h2>
            </div>
            <p className="text-gray-600">
              We offer customization services to businesses to make their profiles and pages stand out on our platform.
            </p>
          </div>
        </div>
      </section>
      <footer className="bg-gray-800 py-6 mt-12">
        <div className="flex justify-center">
          <a href="#" className="text-white hover:text-green-500 mx-3"><FaEnvelope className="text-xl" /></a>
          <a href="#" className="text-white hover:text-green-500 mx-3"><FaPhone className="text-xl" /></a>
          <a href="#" className="text-white hover:text-green-500 mx-3"><FaFacebook className="text-xl" /></a>
          <a href="#" className="text-white hover:text-green-500 mx-3"><FaTwitter className="text-xl" /></a>
          <a href="#" className="text-white hover:text-green-500 mx-3"><FaInstagram className="text-xl" /></a>
        </div>
      </footer>
    </div>
  );
};
export default ServicesPage;