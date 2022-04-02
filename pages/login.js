import React, { useEffect } from "react";
import tw from "tailwind-styled-components";
import { useRouter } from "next/router";
import { signInWithPopup, onAuthStateChanged } from "firebase/auth";
import { auth, provider } from "../firebase";

const Login = () => {
  const router = useRouter();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        router.push("/");
      }
    });
  }, []);

  return (
    <Wrapper>
      <UberLogo src="https://download.logo.wine/logo/Uber/Uber-Logo.wine.png" />
      <Title>Log in to access</Title>
      <HeadImage src="https://www.uber-assets.com/image/upload/q_auto:eco,c_fill,w_956,h_537/v1565734756/assets/fa/dc4e40-8aee-4a48-af4c-0475c1e01d26/original/singup_mobile.svg" />
      <SignInButton onClick={() => signInWithPopup(auth, provider)}>
        Sign in with Google
      </SignInButton>
    </Wrapper>
  );
};

export default Login;

const Wrapper = tw.div`flex flex-col h-screen w-screen bg-gray-200 p-4 overflow-hidden`;

const SignInButton = tw.button`bg-black text-white text-center py-4 mt-8 self-center w-full`;

const UberLogo = tw.img`h-20 w-auto object-contain self-start`;

const Title = tw.div`text-5xl pt-4 text-gray-500`;

const HeadImage = tw.img`object-contain w-auto h-75 mt-3`;
