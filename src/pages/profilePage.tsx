/* eslint-disable */
/* eslint-disable @typescript-eslint/consistent-type-imports */
/* eslint-disable @typescript-eslint/no-floating-promises */





import { user_acc } from "@prisma/client";
import { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { FaArrowCircleRight } from "react-icons/fa";
import { api } from "~/utils/api";

type CardProps = {
  user: user_acc;
};
function Card({ user }: CardProps) {
  return (
    <Link
      href={`/users/${user.user_id}`}
      className="flex flex-col items-center rounded-lg bg-white shadow-md px-4 py-6 text-center text-sm font-medium text-gray-800 hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-green-300 transition duration-300 ease-in-out"
    >
      <div className="relative w-24 h-24 rounded-full overflow-hidden">
      <Image
          src="/icons/face-scan.gif"
          alt="Image of food waste"
          className="mb-4 h-auto w-full rounded-lg"
        /> 
      </div>
      <h3 className="mt-4 text-lg font-bold">{user.user_id}</h3>
      <div className="flex items-center justify-center mt-6">
        <span>View profile</span>
        <FaArrowCircleRight className="ml-2 animate-bounce" />
      </div>
    </Link>
  );
}


const ListOfUsersPage: NextPage = () => {
  const usersList = api.users.listUsers.useQuery();

  return (
    <>
      <Head>
        <title>List of Users</title>
        <meta
          name="description"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="container mx-auto my-8 px-4">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">List of Users</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {usersList?.data?.map((user) => (
            <Card key={user.user_id} user={user} />
          ))}
        </div>
      </main>
    </>
  );
};

export default ListOfUsersPage;