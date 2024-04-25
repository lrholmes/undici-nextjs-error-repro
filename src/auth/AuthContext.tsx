"use client";

import { initializeApp } from "@firebase/app";
import { getAuth } from "@firebase/auth";
import { useEffect } from "react";

// NOTE: It's the import 👆 that seems to break things
// so for simplicity I've commented out the method invocations below

// const app = initializeApp({
//   apiKey: "these-dont-matter",
//   authDomain: "for-the-issue",
// });

// const auth = getAuth(app);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  // This component would be a React.Context provider,
  // with logic to see if user is authenticated, and
  // provide auth-related functions etc

  useEffect(() => {
    console.log(initializeApp);
    console.log(getAuth);
  }, [])

  return children;
};
