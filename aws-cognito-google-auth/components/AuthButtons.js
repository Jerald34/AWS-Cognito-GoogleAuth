"use client";
import { useAuth } from "react-oidc-context";

export function useAuthFunctions() {
  const auth = useAuth();

  const signIn = async () => {
    try {
      console.log("Attempting Google Sign-In...");
      await auth.signinRedirect();
    } catch (error) {
      console.error("Google Sign-In Error:", error);
    }
  };

  const signOut = async () => {
    try {
      console.log("Attempting Sign-Out...");
      await auth.signoutRedirect();
    } catch (error) {
      console.error("Sign-Out Error:", error);
    }
  };

  return { signIn, signOut, auth };
}
