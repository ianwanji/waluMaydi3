import React, { useState } from "react";
import axios from "axios";
import { IoMdPerson, IoMdPhonePortrait, IoMdMail, IoMdBriefcase } from "react-icons/io";
import { BsGeoAlt } from "react-icons/bs";
import { FiUser, FiPhone, FiMail, FiBriefcase } from "react-icons/fi";

import { RiCheckboxCircleFill } from "react-icons/ri";

const SignUp: React.FC = () => {
  const [username, setUsername] = useState("");
  const [sellerName, setSellerName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [emailAddress, setEmailAddress] = useState("");
  const [usertype, setUsertype] = useState("");
  const [sellerDescription, setSellerDescription] = useState("");
  const [location, setLocation] = useState("");
  const [categoryID, setCategoryID] = useState("");

  const handleSignUp = async () => {
    try {
      const response = await axios.post("/api/signup/createUser", {
        username,
        sellerName,
        phoneNumber,
        emailAddress,
        usertype,
        sellerDescription,
        location,
        categoryID,
      });

      console.log(response.data);
      // Handle success or redirect to a success page
    } catch (error) {
      console.error(error);
      // Handle error
    }
  };

  return (
    <div className="max-w-md mx-auto bg-white p-8 mt-8 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-6 text-gray-800">Sign Up</h2>
      <div className="mb-4">
        <label htmlFor="username" className="block mb-2 text-gray-800 font-semibold">
          Username
        </label>
        <div className="input-container">
          <FiUser className="input-icon" />
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="input"
          />
        </div>
      </div>
      <div className="mb-4">
        <label htmlFor="sellerName" className="block mb-2 text-gray-800 font-semibold">
          Company Name
        </label>
        <div className="input-container">
          <FiBriefcase className="input-icon" />
          <input
            type="text"
            id="sellerName"
            value={sellerName}
            onChange={(e) => setSellerName(e.target.value)}
            className="input"
          />
        </div>
      </div>
      <div className="mb-4">
        <label htmlFor="phoneNumber" className="block mb-2 text-gray-800 font-semibold">
          Phone Number
        </label>
        <div className="input-container">
          <FiPhone className="input-icon" />
          <input
            type="text"
            id="phoneNumber"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            className="input"
          />
        </div>
      </div>
      <div className="mb-4">
        <label htmlFor="emailAddress" className="block mb-2 text-gray-800 font-semibold">
          Email Address
        </label>
        <div className="input-container">
          <FiMail className="input-icon" />
          <input
            type="text"
            id="emailAddress"
            value={emailAddress}
            onChange={(e) => setEmailAddress(e.target.value)}
            className="input"
          />
        </div>
      </div>
      <div className="mb-4">
        <label htmlFor="usertype" className="block mb-2 text-gray-800 font-semibold">
          User Type
        </label>
        <div className="input-container">
          <RiCheckboxCircleFill className="input-icon" />
          <select
            id="usertype"
            value={usertype}
            onChange={(e) => setUsertype(e.target.value)}
            className="input"
          >
            <option value="">Select User Type</option>
            <option value="C">Customer</option>
            <option value="S">Seller</option>
          </select>
        </div>
      </div>
      {usertype === "S" && (
        <div className="mb-4">
          <label htmlFor="sellerDescription" className="block mb-2 text-gray-800 font-semibold">
            Company Description
          </label>
          <div className="input-container">
            <FiBriefcase className="input-icon" />
            <input
              type="text"
              id="sellerDescription"
              value={sellerDescription}
              onChange={(e) => setSellerDescription(e.target.value)}
              className="input"
            />
          </div>
        </div>
      )}
      <div className="mb-4">
        <label htmlFor="location" className="block mb-2 text-gray-800 font-semibold">
          Location
        </label>
        <div className="input-container">
          <BsGeoAlt className="input-icon" />
          <input
            type="text"
            id="location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="input"
          />
        </div>
      </div>
      <div className="mb-4">
        <label htmlFor="categoryID" className="block mb-2 text-gray-800 font-semibold">
          Category ID (Optional)
        </label>
        <div className="input-container">
          <RiCheckboxCircleFill className="input-icon" />
          <input
            type="text"
            id="categoryID"
            value={categoryID}
            onChange={(e) => setCategoryID(e.target.value)}
            className="input"
          />
        </div>
      </div>
      <button
              type="submit"
              className="mb-2 mr-2 rounded-lg bg-blue-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Sign U
            </button>
    </div>
  );
};

export default SignUp;