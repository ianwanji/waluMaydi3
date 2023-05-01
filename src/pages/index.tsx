import React from "react";
import {  useUser } from "@clerk/nextjs";
import { useRouter } from "next/router";

const Homepage: React.FC = () => {
  const router = useRouter();
  const user = useUser();

  const handleWelcomeClick = () => {
    router.push("/afterwlc");
  };

  const handleLearnMoreClick = () => {
    router.push("/about");
  };

  return (
    <div className="container mx-auto px-4">
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center justify-center text-center">
            <h1
              className="mb-2 text-4xl font-bold"
              style={{ fontFamily: "Times New Roman" }}
            >
              Welcome to Walu maydi3!
            </h1>
            <p className="mb-5 text-sm italic text-gray-700">
              Don't waste your money, don't waste your food - Walu Maydi3 is
              here to change your mood!
            </p>

            <button
              className="mb-8 rounded-full bg-green-500 px-4 py-2 text-white hover:bg-green-600"
              onClick={handleLearnMoreClick}
            >
              Learn More
            </button>
          </div>
        </div>
      </section>

      <section className="bg-gray-200 py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="rounded-lg bg-white p-8 shadow-lg">
              <img
                className="mx-auto mb-4 h-24 w-24"
                src="/icons/fresh.png"
                alt="icons"
              />
              <h2
                className="mb-2 text-xl font-semibold"
                style={{ fontFamily: "Times New Roman" }}
              >
                Fresh food at affordable prices
              </h2>
              <p className="text-gray-700">
                We enable businesses to offer fresh food at affordable prices by
                selling them in the form of a box during specific times.
                Customers can discover these offers later.
              </p>
            </div>
            <div className="rounded-lg bg-white p-8 shadow-lg">
              <img className="mx-auto mb-4 h-24 w-24" src="/icons/apple.png" />
              <h2
                className="mb-2 text-xl font-semibold"
                style={{ fontFamily: "Times New Roman" }}
              >
                Reduce food waste
              </h2>
              <p className="text-gray-700">
                We help businesses reduce food waste by providing them with a
                platform to sell surplus food before it goes to waste.
              </p>
            </div>
            <div className="rounded-lg bg-white p-8 shadow-lg">
              <img
                className="mx-auto mb-4 h-24 w-24"
                src="/icons/restaurant.png"
                alt="icon"
              />
              <h2
                className="mb-2 text-xl font-semibold"
                style={{ fontFamily: "Times New Roman" }}
              >
                {" "}
                Easy-to-use web application
              </h2>
              <p className="text-gray-700">
                Our user-friendly web application allows customers to browse
                available food boxes, place orders, and make payments
                effortlessly. .
              </p>
            </div>
          </div>
        </div>
      </section>

      {!user.isSignedIn && (
        <section className="py-8">
          <div className="container mx-auto px-4">
            <div className="flex flex-col items-center justify-center text-center">
              <h2 className="mb-2 text-2xl font-bold"></h2>
              <button
                className="mb-8 rounded-full bg-green-500 px-4 py-2 text-white hover:bg-green-600"
                onClick={handleWelcomeClick}
              >
                Let's get started
              </button>
            </div>
          </div>
        </section>
      )}
      <footer className="text-semibold w-full bg-green-500 py-1 text-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Walu maydi3. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default Homepage;
