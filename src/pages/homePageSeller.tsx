import React from 'react';
import { useEffect } from "react";
import { SignIn, useUser } from "@clerk/nextjs";
import { useRouter } from "next/router";
import { NextPage } from "next";

const Homepage: React.FC = () => {

//   const router = useRouter();
//   const user = useUser();

//   useEffect(() => {
//     if (user.isSignedIn) {
//       router.push("/homePageSeller");
//     }
//   }, [user, router]);

//   return (
//     <>
//       <SignIn />
//     </>
//   );
// };

  return (
    <div className="bg-gray-100">
      {/* Header */}
      <header className="bg-white">
        <nav className="container mx-auto py-4 px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a href="/" className="text-xl font-bold text-gray-800">
              My Business
            </a>

            {/* Navigation links */}
            <ul className="flex space-x-4">
              <li>
                <a href="/" className="text-gray-600 hover:text-gray-800">
                  Home
                </a>
              </li>
              <li>
                <a href="/" className="text-gray-600 hover:text-gray-800">
                  About Us
                </a>
              </li>
              <li>
                <a href="/" className="text-gray-600 hover:text-gray-800">
                  Services
                </a>
              </li>
              <li>
                <a href="/" className="text-gray-600 hover:text-gray-800">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </header>

      {/* Hero section */}
      <section className="bg-blue-500 py-16">
        <div className="container mx-auto px-8 text-center">
          <h1 className="text-4xl font-bold text-white mb-4">
            Welcome to My Business!
          </h1>
          <p className="text-lg text-white">
            We offer innovative solutions for your business needs.
          </p>
          <button className="bg-white text-blue-500 font-semibold py-2 px-4 mt-8 rounded-full">
            Learn More
          </button>
        </div>
      </section>

      {/* Features section */}
      <section className="bg-gray-200 py-16">
        <div className="container mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg p-8 shadow">
              <h2 className="text-2xl font-semibold mb-4">Feature 1</h2>
              <p className="text-gray-700">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Curabitur hendrerit mollis justo sed egestas. Proin eu mi
                mattis, consequat ex eu, rutrum odio.
              </p>
            </div>
            <div className="bg-white rounded-lg p-8 shadow">
              <h2 className="text-2xl font-semibold mb-4">Feature 2</h2>
              <p className="text-gray-700">
                Nulla facilisi. Aliquam mattis felis id ligula laoreet, id
                sagittis lectus ultricies. Fusce fermentum erat neque, sed
                tempus dui euismod in.
              </p>
            </div>
            <div className="bg-white rounded-lg p-8 shadow">
              <h2 className="text-2xl font-semibold mb-4">Feature 3</h2>
              <p className="text-gray-700">
                Phasellus sodales eros a est pharetra sollicitudin.
                Pellentesque habitant morbi tristique senectus et netus et
                malesuada fames ac turpis egestas.
              </p>
            </div>
          </div>
          <div className="bg-white rounded-lg p-8 shadow">
          <h2 className="text-2xl font-semibold mb-4">Feature 4</h2>
          <p className="text-gray-700">
            Sed quis lectus sit amet diam tincidunt accumsan eget ac orci.
            Integer vitae consequat arcu, at fringilla magna.
          </p>
        </div>
      </div>
  </section>

  {/* Call to Action */}
  <section className="bg-blue-600 py-16">
    <div className="container mx-auto px-8 text-center">
      <h2 className="text-4xl font-bold text-white mb-4">
        Ready to get started?
      </h2>
      <p className="text-lg text-white mb-6">
        Contact us today for a free consultation.
      </p>
      <button className="bg-white text-blue-600 font-semibold py-2 px-4 rounded-full">
        Contact Us
      </button>
    </div>
  </section>

  {/* Footer */}
  <footer className="bg-gray-800 py-8">
    <div className="container mx-auto px-8 text-white text-center">
      <p>&copy; 2023 My Business. All rights reserved.</p>
    </div>
  </footer>
</div>
);
};

export default Homepage;