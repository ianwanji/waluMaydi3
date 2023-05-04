/* eslint-disable */
/* eslint-disable */
/* eslint-disable */

import { useUser } from "@clerk/nextjs";
import Link from "next/link";
import Image from "next/image";
import { user_acc } from "@prisma/client";
import router, { useRouter } from "next/router";
import { useState } from "react";

export function NavBarCus() {
  const [isNavbarCusOpen, setIsNavbarCusOpen] = useState(false);
  const handleLogout = () => {
    // clear the user session here
    router.push("/"); // redirect to the sign-in page
  };

  const toggleNavbarCus = () => {
    setIsNavbarCusOpen(!isNavbarCusOpen);
  };
  return (
    <div className="container mx-auto px-0">
      <header className="bg-green-500 py-0 text-white">
        <nav className="flex items-center justify-between">
          <div className="flex items-center">
            <div className="icon ml-6 mr-0">
              <Image src="/iconnav.ico" alt="Icon" width={80} height={80} />
            </div>
            <Link href="/" className="flex items-center">
              <span className="font-newromatimes ml-0 mt-8 whitespace-nowrap text-2xl font-bold dark:text-white">
                Walu Maydi3
              </span>
            </Link>
          </div>
          <button
            type="button"
            className="ml-3 inline-flex items-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 md:hidden"
            aria-controls="navbar-default"
            aria-expanded={isNavbarCusOpen ? "true" : "false"}
            aria-label="Toggle navigation menu"
            onClick={toggleNavbarCus}
          >
            <span className="sr-only">Toggle navigation</span>
            <svg
              className="h-6 w-6"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
          <div
            className={`${
              isNavbarCusOpen ? "block" : "hidden"
            } w-full transition-all duration-300 md:block md:w-auto`}
            id="navbar-default"
          >
            <ul className="mt-4 flex flex-col space-x-4 text-lg font-medium text-white md:flex-row">
              <li>
                <Link
                  href="/offersPage"
                  aria-current="page"
                  className="hover:text-gray-300"
                >
                  Offers
                </Link>
              </li>
              <li>
                <Link
                  href="/Sellers"
                  aria-current="page"
                  className="hover:text-gray-300"
                >
                  Seller
                </Link>
              </li>
              <li>
                <button onClick={handleLogout} className="hover:text-gray-300">
                  Logout
                </button>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    </div>
  );
}
