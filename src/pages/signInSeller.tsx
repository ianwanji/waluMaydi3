import { useEffect } from "react";
import { SignIn, SignUp, useUser } from "@clerk/nextjs";
import { useRouter } from "next/router";
import { NextPage } from "next";

const SignInPage: NextPage = () => {
  const router = useRouter();
  const user = useUser();

  useEffect(() => {
    if (user.isSignedIn) {
      router.replace("/homePageSeller");
    }
  }, [user, router]);

  return (
    <>
      <SignUp redirectUrl="/moreInfos" />
    </>
  );
};

export default SignInPage;
