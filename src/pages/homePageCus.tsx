import React from "react";

const HomePage = () => {
  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4 text-center text-blue-500">Welcome to our online store!</h1>
      <p className="mb-2 text-lg font-semibold text-gray-800">Here are some of our featured products:</p>
      <ul className="list-disc ml-4 mb-4 text-lg" style={{ fontFamily: "Arial", color: "red" }}>
        <li><a href="product1.html" className="text-blue-500 hover:underline">Product 1</a></li>
        <li><a href="product2.html" className="text-blue-500 hover:underline">Product 2</a></li>
        <li><a href="product3.html" className="text-blue-500 hover:underline">Product 3</a></li>
      </ul>
      <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-2 text-blue-500">About Us</h2>
        <p className="mb-4 text-lg text-gray-800">We are a company that specializes in selling high-quality products at affordable prices. Our mission is to make shopping easy and convenient for our customers.</p>
      </div>
      <div className="bg-gray-100 p-6 rounded-lg shadow-lg mt-4">
        <h2 className="text-2xl font-bold mb-2 text-blue-500">Contact Us</h2>
        <p className="mb-2 text-lg text-gray-800">If you have any questions or concerns, please feel free to contact us at:</p>
        <ul className="list-disc ml-4 text-lg">
          <li>Email: <a href="mailto:info@ourstore.com" className="text-blue-500 hover:underline">info@ourstore.com</a></li>
          <li>Phone: <a href="tel:5555555555" className="text-blue-500 hover:underline">555-555-5555</a></li>
          <li>Address: 123 Main St, Anytown USA</li>
        </ul>
      </div>
    </div>
  );
};

export default HomePage;