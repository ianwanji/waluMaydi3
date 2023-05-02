/* eslint-disable */

// const NavBar = ({ user }: { user: boolean }) => {
//   return (
//     <nav className="flex items-center justify-between bg-green-700 px-6 py-4 shadow">
//       <Link href="/">
//         <a className="text-3xl font-bold text-white">Walu Maydi3</a>
//       </Link>

//       <div className="flex items-center">
//         {user ? (
//           <Link href="/dashboard">
//             <a className="mr-4 text-base text-white hover:text-gray-300">
//               Dashboard
//             </a>
//           </Link>
//         ) : (
//           <Link href="/login">
//             <a className="mr-4 text-base text-white hover:text-gray-300">
//               Login
//             </a>
//           </Link>
//         )}
//       </div>
//     </nav>
//   );
// };

const Footer = () => {
  return (
    <footer className="bg-green-500 px-2 py-1 text-center text-white">
      <p className="text-base">
        &copy; {new Date().getFullYear()} Walu Maydi3. All rights reserved.
      </p>
    </footer>
  );
};

const AboutUs = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex h-40 items-center justify-center bg-yellow-500">
        <h1 className="text-4xl font-bold text-white">About Us</h1>
      </div>

      <div className="mt-8 rounded-lg bg-white p-6 shadow-lg">
        <h2 className="mb-4 text-2xl font-bold text-orange-500">Our Mission</h2>
        <p
          className="mb-4 text-lg leading-relaxed text-gray-700"
          style={{ fontFamily: "Roboto Slab" }}
        >
          At Walu Maydi3, our mission is to fight food waste in Ifrane and
          create a sustainable food ecosystem by connecting local businesses
          with customers in need.
        </p>
        <img
          src="/icons/wastefood.gif"
          alt="Image of food waste"
          className="mb-4 h-auto w-full rounded-lg"
        />
      </div>

      <div className="mt-8 rounded-lg bg-white p-6 shadow-lg">
        <h2 className="mb-4 text-2xl font-bold text-orange-500">
          Our Objectives
        </h2>
        <div className="mb-4">
          <img
            src="/icons/recycling.png"
            alt="Reduce food waste icon"
            className="mr-3 inline-block h-6 w-6"
          />
          <p className="inline-block text-lg leading-relaxed text-gray-700">
            Reduce food waste in the city of Ifrane.
          </p>
        </div>
        <div className="mb-4">
          <img
            src="/icons/food.png"
            alt="Provide affordable meals icon"
            className="mr-3 inline-block h-6 w-6"
          />
          <p className="inline-block text-lg leading-relaxed text-gray-700">
            Provide affordable meals to customers.
          </p>
        </div>
        <div className="mb-4">
          <img
            src="/icons/business.png"
            alt="Prevent business losses icon"
            className="mr-3 inline-block h-6 w-6"
          />
          <p className="inline-block text-lg leading-relaxed text-gray-700">
            Prevent business losses.
          </p>
        </div>
        <div>
          <img
            src="/icons/environmental-protection.png"
            alt="Promote environmental sustainability icon"
            className="mr-3 inline-block h-6 w-6"
          />
          <p className="inline-block text-lg leading-relaxed text-gray-700">
            Promote environmental sustainability.
          </p>
        </div>
      </div>

      <div className="mt-4 rounded-lg bg-white p-4 shadow-lg">
        <h2
          className="mb-2 text-2xl font-bold text-green-700"
          style={{ fontFamily: "Times New Roman" }}
        >
          Our Team
        </h2>
        <div className="-mx-4 flex flex-wrap justify-center">
          <div className="sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 mb-6 w-full px-4">
            <div className="rounded-lg bg-gray-100 p-4 transition duration-300 hover:shadow-xl">
              <div className="mx-auto mb-4 h-32 w-32 overflow-hidden rounded-full border-4 border-green-700">
                <img
                  src="../icons/optimist.png"
                  alt="Team member"
                  className="h-full w-full object-cover"
                />
              </div>
              <h3 className="mb-2 text-lg font-bold">John Doe</h3>
              <p className="mb-4 text-base leading-relaxed text-gray-800">
                Co-founder and CEO
              </p>
              <div className="flex justify-center space-x-4">
                <a
                  href="#"
                  className="text-gray-600 transition duration-300 hover:text-gray-900"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14.828 7.172a4 4 0 00-5.656 0M12 2a10 10 0 00-9.95 10.539l.007.383a8 8 0 0015.872 0l.007-.383A10 10 0 0012 2zM3 12a9 9 0 0111.95-8.539l.007-.383a7 7 0 00-13.872 0l.007.383A9 9 0 013 12zm18 0a9 9 0 01-11.95 8.539l-.007.383a7 7 0 0013.872 0l-.007-.383A9 9 0 0121 12z"
                    />
                  </svg>
                </a>
                <a
                  href="#"
                  className="text-gray-600 transition duration-300 hover:text-gray-900"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 10h16M4 14h16M4 18h16"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AboutUs;
