"use client";
import Image from "next/image";
import { useAuth } from "react-oidc-context";

export default function AuthButtons() {
  const auth = useAuth();

  if (auth.isLoading) {
    return (
      <button className="flex items-center justify-center px-4 py-2 text-white bg-indigo-500 rounded-md cursor-not-allowed">
        <svg
          className="w-5 h-5 mr-2 text-white animate-spin"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          ></circle>
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8v4l3-3-3-3v4a8 8 0 018 8h-4l3 3 3-3h-4a8 8 0 01-8 8V8l-3 3 3 3V12z"
          ></path>
        </svg>
        Processing…
      </button>
    );
  }

  if (auth.isAuthenticated) {
    return (
      <button onClick={() => auth.signoutRedirect()} className="text-red-600">
        Sign Out
      </button>
    );
  }

  return (
    <>
      <button
        className="google-btn w-full flex items-center justify-center gap-2"
        onClick={() => auth.signinRedirect()}
      >
        <Image
          src="/images/google.png"
          alt="Google Logo"
          width={20}
          height={20}
        />
        Sign in with Google
      </button>
    </>
  );
}
