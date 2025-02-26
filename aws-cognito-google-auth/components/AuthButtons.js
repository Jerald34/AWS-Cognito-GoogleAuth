// AuthButtons.js
"use client";
import { useState } from "react";
import Image from "next/image";
import { useAuth } from "react-oidc-context";

export default function AuthButtons() {
  const [modal, setModal] = useState("");
  const auth = useAuth();

  const openModal = (id) => setModal(id);
  const closeModal = () => setModal("");

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <button
        onClick={() => openModal("signIn")}
        className="bg-blue-600 text-white px-4 py-2 rounded shadow hover:bg-blue-700"
      >
        Sign In with Google
      </button>

      {modal && (
        <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50">
          <div className="bg-white text-black p-6 rounded shadow-md w-80 relative">
            <button className="absolute top-2 right-2 text-2xl" onClick={closeModal}>
              &times;
            </button>
            <h2 className="text-lg font-bold mb-4">Continue with Google</h2>
            <button
              className="google-btn w-full flex items-center justify-center gap-2 bg-gray-100 px-4 py-2 rounded shadow"
              onClick={() => auth.signinRedirect()}
            >
              <Image src="/images/google.png" alt="Google Logo" width={20} height={20} />
              Sign in with Google
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
