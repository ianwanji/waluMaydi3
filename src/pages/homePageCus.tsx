import React from "react";
const HomePage = () => {
  return (
    <div>
      <h1>Welcome to our online store!</h1>
      <p>Here are some of our featured products:</p>
      <ul>
        <li><a href="product1.html">Product 1</a></li>
        <li><a href="product2.html">Product 2</a></li>
        <li><a href="product3.html">Product 3</a></li>
      </ul>
      <h2>About Us</h2>
      <p>We are a company that specializes in selling high-quality products at affordable prices. Our mission is to make shopping easy and convenient for our customers.</p>
      <h2>Contact Us</h2>
      <p>If you have any questions or concerns, please feel free to contact us at:</p>
      <ul>
        <li>Email: info@ourstore.com</li>
        <li>Phone: 555-555-5555</li>
        <li>Address: 123 Main St, Anytown USA</li>
      </ul>
      <link rel="stylesheet" type="text/css" href="style.css"/>

    </div>
  );
};

export default HomePage;