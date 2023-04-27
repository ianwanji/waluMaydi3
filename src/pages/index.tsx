import { NextPage } from 'next';
import Head from 'next/head';

const Home: NextPage = () => {
  const handleWelcomeClick = () => {

    window.open('/welcomePage');
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
            onClick={handleWelcomeClick}
          >
            Get Started!
          </button>
        </div>
      </main>
    </>
  );
};

export default Home;