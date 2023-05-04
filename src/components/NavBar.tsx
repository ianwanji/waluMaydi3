
/* eslint-disable */


import { useState } from "react";
import { UserButton } from "@clerk/nextjs";
import Link from "next/link";
import Image from "next/image";

export function NavBar() {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
     <div className="container mx-auto px-0">
      <header className="bg-green-500 text-white py-0">
        <nav className="flex justify-between items-center">
          <div className="flex items-center">
            <div className="icon mr-0 ml-6">
              <Image src="/iconnav.ico" alt="Icon" width={80} height={80} />
            </div>

              <span className="whitespace-nowrap text-2xl font-bold dark:text-white ml-0 mt-8 font-newromatimes">
                Walu Maydi3
              </span>
          </div>

          <button
            type="button"
            className="ml-3 inline-flex items-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 md:hidden"
            aria-controls="navbar-default"
            aria-expanded={showMenu}
            onClick={toggleMenu}
          >
            <span className="sr-only">Menu</span>
            {showMenu ? (
              <svg
                className="h-6 w-6"
                aria-hidden="true"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
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
            )}
          </button>
          <div
            className={`${
              showMenu ? "block" : "hidden"
            } w-full md:block md:w-auto`}
            id="navbar-default"
          >
            <ul className="mt-4 flex flex-col md:flex-row space-x-4 font-medium text-white text-0xl md:space-x-8 md:text-lg">
              <li>
                <Link href="/about" aria-current="page" onClick={toggleMenu}>
                  About Us
                </Link> 
          </li>
          <li>
            <Link href="/services" onClick={toggleMenu}>
              Services
            </Link>
          </li>
        
          <li>
            <UserButton />
          </li>
        </ul>
      </div>
    </nav>
  </header>
</div>
);
}