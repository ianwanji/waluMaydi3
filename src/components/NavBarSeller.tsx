
/* eslint-disable */


import { UserButton, useUser } from "@clerk/nextjs";
import Link from "next/link";
import Image from "next/image";

export function NavBar() {
  const user = useUser();

  return (
    <div className="container mx-auto px-0">
      <header className="bg-green-500 text-white py-0">
        <nav className="flex justify-between items-center">
          <div className="flex items-center">
            <div className="icon mr-0 ml-6"> {/* Adjusted margin */}
              <Image src="/iconnav.ico" alt="Icon" width={80} height={80} />
            </div>
            
            <Link href="/" className="flex items-center">
              <span className="whitespace-nowrap text-2xl font-bold dark:text-white ml-0 mt-8 font-newromatimes">
                Walu Maydi3
              </span>
            </Link>
          </div>



          <button
            data-collapse-toggle="navbar-default"
            type="button"
            className="ml-3 inline-flex items-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 md:hidden"
            aria-controls="navbar-default"
            aria-expanded="false"
          >
            <span className="sr-only">Welcome</span>
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
            className="hidden w-full md:block md:w-auto"
            id="navbar-default"
          >
            <ul className="mt-4 flex flex-row space-x-4 font-medium text-white text-0xl">
              <li>
                <Link
                  href="/profilePage"
                  
                  aria-current="page"
                >
                  Profile
                </Link>
              </li>
              <li>
                <Link
                  href="/offersPage"
                 
                  aria-current="page"
                >
                  My offers
                </Link>
              </li>
              <li>
                <Link
                  href="/reservations"
                 
                  aria-current="page"
                >
                  Reservations
                </Link>
              </li>
              <Link
                  href="/createanOffer"
                 
                  aria-current="page"
                >
                  Create an offer
                </Link>
                
              
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