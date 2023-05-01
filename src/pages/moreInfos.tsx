import React, { useState } from "react";
import axios from "axios";
import { BsGeoAlt } from "react-icons/bs";
import { FiBriefcase } from "react-icons/fi";
import { RiCheckboxCircleFill } from "react-icons/ri";

const SignUp: React.FC = () => {
  const [sellerName, setSellerName] = useState("");
  const [sellerDescription, setSellerDescription] = useState("");
  const [location, setLocation] = useState("");
  const [category, setCategory] = useState("");

  const handleSignUp = async () => {
    try {
      const response = await axios.post("/api/signup/createUser", {
        sellerName,
        sellerDescription,
        location,
        category,
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
      <style>
        {`
          .input-container {
            position: relative;
          }
          
          .input {
            border: 2px solid #000;
            border-radius: 8px;
            padding: 10px;
            padding-left: 35px;
            font-size: 16px;
            width: 100%;
            box-sizing: border-box;
          }
          
          .input-icon {
            position: absolute;
            top: 50%;
            left: 10px;
            transform: translateY(-50%);
          }
        `}
      </style>
      <h2 className="text-2xl font-semibold mb-6 text-gray-800">More Details</h2>
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
            placeholder="Enter company name"
          />
        </div>
      </div>
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
            placeholder="Enter company description"
          />
        </div>
      </div>
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
            placeholder="Enter location"
          />
        </div>
      </div>
      <div className="mb-4">
        <label htmlFor="category" className="block mb-2 text-gray-800 font-semibold">
          Category
        </label>
        <div className="input-container">
          <RiCheckboxCircleFill className="input-icon" />
<select
id="category"
value={category}
onChange={(e) => setCategory(e.target.value)}
className="input"
>
<option value="">Select Category</option>
<option value="restaurant">Restaurant</option>
<option value="bakery">Bakery</option>
<option value="hotel">Hotel</option>
</select>
</div>
</div>
<div className="mb-4 flex justify-center">
  <button
    type="submit"
    onClick={handleSignUp}
    className="rounded-lg bg-blue-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
  >
    Submit
  </button>
</div>
</div>
);
};

export default SignUp;