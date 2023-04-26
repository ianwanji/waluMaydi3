import { RedirectToUserProfile, SignIn, UserButton, UserProfile, useUser } from "@clerk/nextjs";
import { NextPage } from "next";

const SignInPage: NextPage = () => {
  const user = useUser();

  if (user.isSignedIn) {

    window.open('/homePageCus', '_blank');
  }

  return (
    <>
      <SignIn />
    </>
  );
};

export default SignInPage;