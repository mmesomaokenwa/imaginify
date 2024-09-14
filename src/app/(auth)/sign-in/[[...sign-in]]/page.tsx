import { SignIn } from '@clerk/nextjs';
import React from 'react'
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Sign In",
  description: "Sign in to Imaginify",
}

const SignInPage = () => {
  return <SignIn />;
}

export default SignInPage;