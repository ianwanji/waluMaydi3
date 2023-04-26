import { NextPage } from 'next';
import Head from 'next/head';

const welcomePage: NextPage = () => {
  const handleCustomerClick = () => {
    window.open('/signInPage', '_blank');
  };

  const handleSellerClick = () => {
    window.open('/businessPage', '_blank');
  };

  return (
    <>
      <Head>
        <title>Welcome to Walu Maydi3</title>
        <meta name="description" content="Choose if you are a customer or seller" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="container mx-auto flex flex-col items-center justify-center h-screen">
        <h1 className="text-4xl font-bold mb-8">Welcome to Walu Maydi3</h1>
        <div className="flex flex-col items-center justify-center gap-4">
          <button
            className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded"
            onClick={handleCustomerClick}
          >
            I'm a Customer
          </button>
          <button
            className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded"
            onClick={handleSellerClick}
          >
            I'm a Seller
          </button>
        </div>
      </main>
    </>
  );
};

export default welcomePage;