import { useEffect } from "react";
import { SignIn, useUser } from "@clerk/nextjs";
import { useRouter } from "next/router";
import { NextPage } from "next";

const SignInPage: NextPage = () => {
  const router = useRouter();
  const user = useUser();

  useEffect(() => {
    if (user.isSignedIn) {
      router.replace("/offersPage");
    }
  }, [user, router]);

  return (
    <>
      <SignIn />
      
    </>
  );
};

export default SignInPage;