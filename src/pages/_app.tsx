import { type AppType } from "next/app";
import { type Session } from "next-auth";
import { ClerkProvider } from '@clerk/nextjs';
import { NavBar } from "~/components/NavBar";

import { api } from "~/utils/api";

import "~/styles/globals.css";

const MyApp: AppType=({ Component,pageProps}) => {
 
  return (
    <ClerkProvider {...pageProps} >
      <NavBar/>
    <Component {...pageProps} />;
  </ClerkProvider>

  );
};

export default api.withTRPC(MyApp);
