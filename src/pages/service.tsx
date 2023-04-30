import React from 'react';
import { FaEnvelope, FaPhone, FaBriefcase, FaUser, FaUtensils, FaComment, FaCalendarAlt, FaStar, FaTools, FaLock, FaWrench } from 'react-icons/fa';

const ServicesPage = () => {
    return (
        <div className="container mx-auto">
          <header className="flex justify-between items-center py-4">
          </header>
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
                  <h2 className="text-xl font-bold">Business Profile Creation</h2>
                </div>
                <p>
                  We offer businesses the ability to register and create a profile on our website. This profile will showcase information about their establishment, such as their name, location, and offerings.
                </p>
              </div>
              <div className="bg-white rounded-lg shadow p-6">
                <div className="flex items-center mb-4">
                  <FaUser className="text-xl text-green-500 mr-2" />
                  <h2 className="text-xl font-bold">Customer Profile Creation</h2>
                </div>
                <p>
                  Customers can create a profile on our website, allowing them to personalize their experience. They can provide their personal information and preferences to enhance their interaction with the platform.
                </p>
              </div>
              <div className="bg-white rounded-lg shadow p-6">
                <div className="flex items-center mb-4">
                  <FaUtensils className="text-xl text-green-500 mr-2" />
                  <h2 className="text-xl font-bold">Food Offer Creation and Availability System</h2>
                </div>
                <p>
                  Businesses can create attractive offers that include details about their food offerings, such as the type of food, quantity, price, and expiry date. Our system ensures that the availability of food items is accurately updated when offers are created.
                </p>
              </div>
              {/* Add more service cards as needed */}
            </div>
          </section>
          <section className="py-8">
            <div className="text-center">
              <h1 className="text-4xl font-bold mb-4">Additional Services</h1>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              <div className="bg-white rounded-lg shadow p-6">
                <div className="flex items-center mb-4">
                  <FaComment className="text-xl text-green-500 mr-2" />
                  <h2 className="text-xl font-bold">Messaging System</h2>
                </div>
                <p>
                  We provide a convenient messaging system that facilitates communication between customers and businesses. This feature allows users to address any questions, concerns, or



                  issues in real-time.
</p>
</div>
<div className="bg-white rounded-lg shadow p-6">
<div className="flex items-center mb-4">
<FaCalendarAlt className="text-xl text-green-500 mr-2" />
<h2 className="text-xl font-bold">Food Reservation and Cancellation</h2>
</div>
<p>
Customers have the option to reserve food boxes in advance. Our system allows for easy reservation and cancellation, ensuring a seamless experience. The availability of food items is automatically adjusted based on reservations.
</p>
</div>
<div className="bg-white rounded-lg shadow p-6">
<div className="flex items-center mb-4">
<FaStar className="text-xl text-green-500 mr-2" />
<h2 className="text-xl font-bold">Reviews and Ratings</h2>
</div>
<p>
Customers can leave reviews and ratings for the food they have reserved. These reviews and ratings contribute to the overall reputation and credibility of the businesses. We display reviews on the business profiles and calculate average ratings based on customer feedback.
</p>
</div>
{/* Add more service cards as needed */}
</div>
</section>
<section className="py-8">
<div className="text-center">
<h1 className="text-4xl font-bold mb-4">Key Features</h1>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6">
<div className="flex items-center bg-white rounded-lg shadow p-6">
<FaTools className="text-4xl text-green-500 mr-2" />
<div>
<h2 className="text-2xl font-bold mb-2">Usability</h2>
<p>
Our website features a user-friendly interface that is easy to navigate for both businesses and customers. We strive to provide a seamless and intuitive experience.
</p>
</div>
</div>
<div className="flex items-center bg-white rounded-lg shadow p-6">
<FaLock className="text-4xl text-green-500 mr-2" />
<div>
<h2 className="text-2xl font-bold mb-2">Security</h2>
<p>
Ensuring the security of our users' personal information is of utmost importance to us. We have implemented robust security measures to protect user data and prevent unauthorized access.
</p>
</div>
</div>
<div className="flex items-center bg-white rounded-lg shadow p-6">
<FaWrench className="text-4xl text-green-500 mr-2" />
<div>
<h2 className="text-2xl font-bold mb-2">Maintainability</h2>
<p>
We have taken measures to ensure that our website is easily maintainable and updatable. Our well-documented code structure and clear design facilitate future enhancements and improvements to the platform.
</p>
</div>
</div>
<div className="flex items-center bg-white rounded-lg shadow p-6">
<FaStar className="text-4xl text-green-500 mr-2" />
<div>
<h2 className="text-2xl font-bold mb-2">Reliability</h2>
<p>
The website should be reliable and free from errors or bugs that could impact the user experience, ensuring consistent and dependable performance.
</p>
</div>
</div>
</div>
</section>
<footer className="py-4 text-center bg-gray-200">
<p className="text-sm mt-2">© {new Date().getFullYear()} Walu Maydi3. All rights reserved.</p>
</footer>
</div>

);
};
export default ServicesPage;