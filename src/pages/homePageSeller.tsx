// import { NextPage } from 'next';
// import Head from 'next/head';
// import { Reservation, Offer } from '../types';

// interface Props {
//   reservations: Reservation[];
//   offers: Offer[];
// }

// const SellerHomePage: NextPage<Props> = ({ reservations, offers }) => {

//   return (
//     <>
//       <Head>
//         <title>Seller Home | Walu Maydi3</title>
//         <meta name="description" content="Your seller home page on Walu Maydi3" />
//         <link rel="icon" href="/favicon.ico" />
//       </Head>

//       <main className="flex flex-col items-center justify-center h-screen" style={{backgroundImage: "url('https://example.com/background-image.jpg')", backgroundSize: "cover"}}>
//         <div className="max-w-4xl w-full px-4 sm:px-6 lg:px-8">
//           <div className="flex flex-col items-center justify-center py-16 md:py-32">
//             <h1 className="text-6xl font-bold text-white mb-8" style={{ fontFamily: "Open Sans", textShadow: "2px 2px 4px #000000" }}>
//               My Seller Home
//             </h1>

//             <div className="flex flex-col items-center justify-center gap-8">
//               <h2 className="text-3xl font-semibold text-white mb-4">My Reservations</h2>
//               {reservations.length > 0 ? (
//                 <ul className="w-full max-w-md bg-white shadow-md rounded-lg divide-y divide-gray-200">
//                   {reservations.map(reservation => (
//                     <li key={reservation.id} className="px-4 py-4 sm:px-6">
//                       <div className="flex items-center justify-between">
//                         <h3 className="text-lg font-medium text-gray-900">{reservation.title}</h3>
//                         <p className="text-s:m font-medium text-gray-500">{reservation.date}</p>
//                       </div>
//                       <p className="mt-1 max-w-2xl text-sm text-gray-500">{reservation.description}</p>
//                     </li>
//                   ))}
//                 </ul>
//               ) : (
//                 <p className="text-white">You have no reservations yet.</p>
//               )}

//               <h2 className="text-3xl font-semibold text-white mt-8 mb-4">My Offers</h2>
//               {offers.length > 0 ? (
//                 <ul className="w-full max-w-md bg-white shadow-md rounded-lg divide-y divide-gray-200">
//                   {offers.map(offer => (
//                     <li key={offer.id} className="px-4 py-4 sm:px-6">
//                     </li>
//                   ))}
//                 </ul>
//               ) : (
//                 <p className="text-white">You have no offers yet.</p>
//               )}
//             </div>
//           </div>
//         </div>
//       </main>
//     </>
//   )
// }

// export default SellerHomePage;
