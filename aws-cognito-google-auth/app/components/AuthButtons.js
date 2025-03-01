"use client";
import Image from "next/image";
import { useAuth } from "react-oidc-context";
import { ClipLoader } from "react-spinners";
import { oidcConfigSignOutConfig } from "src/utils/oidcConfigSignOutConfig";

export default function AuthButtons() {
  const auth = useAuth();

  if (auth.isLoading) {
    return (
      <button className="flex gap-3 items-center justify-center px-4 py-2 text-white bg-[#48cae4] rounded-md cursor-not-allowed w-full">
        <ClipLoader size={24} color="white" />
        Processing…
      </button>
    );
  }

  if (auth.isAuthenticated) {
    return (
      <button
        onClick={() => oidcConfigSignOutConfig()}
        className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded"
      >
        Sign Out
      </button>
    );
  }

  return (
    <>
      <button
        className="px-4 py-2 border border-gray-300 w-full flex items-center justify-center gap-2 text-black bg-white rounded-md hover:border-gray-400 transition"
        onClick={() => auth.signinRedirect()}
      >
        <Image
          src="/images/google.png"
          alt="Google Logo"
          width={20}
          height={20}
        />
        Continue with Google
      </button>
    </>
  );
}  