import { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import { FaUserAlt } from "react-icons/fa";

const WelcomePage: NextPage = () => {
  const router = useRouter();

  const handleCustomerClick = () => {
    router.push("/signInPageCus");
  };

  const handleSellerClick = () => {
    router.push("/signInSeller");
  };

  return (
    <>
      <Head>
        <title>Welcome to Walu Maydi3</title>
        <meta
          name="description"
          content="Choose if you are a customer or seller"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main
        className="flex h-screen flex-col items-center justify-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1545312721-565f1db90498?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YnJvd3NlcnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80')",
          backgroundSize: "cover",
        }}
      >
        <div className="w-full max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-center py-16 md:py-32">
            <h1
              className="mb-8 text-6xl font-bold text-white"
              style={{
                fontFamily: "Open Sans",
                textShadow: "2px 2px 4px #000000",
              }}
            >
              Welcome to <span className="text-green-500">Walu Maydi3</span>
            </h1>

            <p className="mb-8 text-center font-serif text-2xl text-gray-200">
              A place where you can find the best deals on the products you
              love.
            </p>

            <div className="flex items-center justify-center gap-8">
              <button
                className="flex transform items-center justify-center rounded-lg border-2 border-white bg-white px-6 py-3 text-gray-800 shadow-lg transition duration-500 ease-in-out hover:-translate-y-1 hover:scale-110 hover:border-green-500 hover:text-green-500"
                onClick={handleCustomerClick}
              >
                <FaUserAlt className="mr-2 text-xl" /> Customer
              </button>

              <button
                className="flex transform items-center justify-center rounded-lg border-2 border-white bg-white px-6 py-3 text-gray-800 shadow-lg transition duration-500 ease-in-out hover:-translate-y-1 hover:scale-110 hover:border-green-500 hover:text-green-500"
                onClick={handleSellerClick}
              >
                <FaUserAlt className="mr-2 text-xl" /> Seller
              </button>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default WelcomePage;
