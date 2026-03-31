//import metadata from "./metadata";
import type { Metadata } from "next";
import LoginForm from "./LoginForm";

export const metadata: Metadata = {
  title: "Sign In",
  description: "Sign In to your account",
  keywords: ["Sign In", "Login", "Account"],
  authors: [{ name: "AI Native App Team", url: "https://ai-native-app.com" }],
};

// import React from "react";

const SignInPage = () => {
  return <LoginForm />;
};

export default SignInPage;
