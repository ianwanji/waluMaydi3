import React from 'react';
import { SignInButton, UserButton, useUser } from "@clerk/nextjs";
import { useRouter } from "next/router";

const Homepage: React.FC = () => {
  const router = useRouter();
  const user = useUser();

  const handleWelcomeClick = () => {
    router.push('/afterwlc');
  };

  const handleLearnMoreClick = () => {
    router.push("/about");
  };

  return (
    <div className="container mx-auto px-4">
           
           
  
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center justify-center text-center">
          <h1 className="text-4xl font-bold mb-2" style={{ fontFamily: "Times New Roman" }}>
  Welcome to Walu maydi3!
</h1>
<p className="text-sm text-gray-700 mb-5 italic">
Don't waste your money, don't waste your food - Walu Maydi3 is here to change your mood!

</p>

            <button className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-full mb-8" onClick={handleLearnMoreClick}>Learn More</button>
          </div>
        </div>
      </section>

      <section className="bg-gray-200 py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <img className="w-24 h-24 mb-4 mx-auto" src="/icons/fresh.png" alt="icons" />
              <h2 className="text-xl font-semibold mb-2" style={{ fontFamily: "Times New Roman" }}>Fresh food at affordable prices</h2>
              <p className="text-gray-700">We enable businesses to offer fresh food at affordable prices by selling them in the form of a box during specific times. Customers can discover these offers later.</p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-8">
              <img className="w-24 h-24 mb-4 mx-auto" src="/icons/apple.png" />
<h2 className="text-xl font-semibold mb-2"style={{ fontFamily: "Times New Roman" }}>Reduce food waste</h2>
<p className="text-gray-700">We help businesses reduce food waste by providing them with a platform to sell surplus food before it goes to waste.</p>
</div>
<div className="bg-white rounded-lg shadow-lg p-8">
<img className="w-24 h-24 mb-4 mx-auto" src="/icons/restaurant.png" alt="icon" />
<h2 className="text-xl font-semibold mb-2"style={{ fontFamily: "Times New Roman" }}>                Easy-to-use web application
</h2>
<p className="text-gray-700">Our user-friendly web application allows customers to browse available food boxes, place orders, and make payments effortlessly.
.</p>
</div>
</div>
</div>
</section>

  {!user.isSignedIn && (
    <section className="py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center text-center">
          <h2 className="text-2xl font-bold mb-2"></h2>
          <button className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-full mb-8" onClick={handleWelcomeClick}>Let's get started</button>
        </div>
      </div>
    </section>
    
    
  )}
<footer className="bg-green-500 text-semibold py-1 text-center w-full">
  <p className="text-sm">&copy; {new Date().getFullYear()} Walu maydi3. All rights reserved.
  </p>
</footer>

</div>
);
};

export default Homepage;





