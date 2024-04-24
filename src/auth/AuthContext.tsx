"use client";

import { useEffect } from "react";

import { initializeApp } from "@firebase/app";
import { getAuth as getFirebaseAuth } from "@firebase/auth";

const app = initializeApp({
  apiKey: "these-dont-matter",
  authDomain: "for-the-issue",
});
const auth = getFirebaseAuth(app);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  // This component would be a React.Context provider,
  // with logic to see if user is authenticated, and
  // provide auth-related functions etc

  useEffect(() => {
    console.log(auth);
  }, []);

  return children;
};
