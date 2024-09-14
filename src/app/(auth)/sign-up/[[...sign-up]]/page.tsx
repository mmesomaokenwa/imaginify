import { SignUp } from '@clerk/nextjs';
import React from 'react'
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Sign Up",
  description: "Sign up to Imaginify",
}

const SignUpPage = () => {
  return <SignUp />;
}

export default SignUpPage;
