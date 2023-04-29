import { NextPage } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { FaUserAlt } from 'react-icons/fa';

const WelcomePage: NextPage = () => {
  const router = useRouter();

  const handleCustomerClick = () => {
    router.push('/signInPageCus');
  };

  const handleSellerClick = () => {
    router.push('/signInSeller');
  };

  return (
    <>
      <Head>
        <title>Welcome to Walu Maydi3</title>
        <meta name="description" content="Choose if you are a customer or seller" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center justify-center h-screen" style={{backgroundImage: "url('https://images.unsplash.com/photo-1545312721-565f1db90498?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YnJvd3NlcnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80')", backgroundSize: "cover"}}>
        <div className="max-w-4xl w-full px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-center py-16 md:py-32">
            <h1 className="text-6xl font-bold text-white mb-8" style={{ fontFamily: "Open Sans", textShadow: "2px 2px 4px #000000" }}>
              Welcome to <span className="text-green-500">Walu Maydi3</span>
            </h1>

            <p className="text-2xl font-serif text-gray-200 text-center mb-8">
              A place where you can find the best deals on the products you love.
            </p>

            <div className="flex items-center justify-center gap-8">
              <button
                className="bg-white text-gray-800 py-3 px-6 rounded-lg flex items-center justify-center shadow-lg transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 hover:text-green-500 hover:border-green-500 border-2 border-white"
                onClick={handleCustomerClick}
              >
                <FaUserAlt className="text-xl mr-2" /> Customer
              </button>

              <button
                className="bg-white text-gray-800 py-3 px-6 rounded-lg flex items-center justify-center shadow-lg transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 hover:text-green-500 hover:border-green-500 border-2 border-white"
                onClick={handleSellerClick}
              >
                <FaUserAlt className="text-xl mr-2" /> Seller
              </button>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

export default WelcomePage;
