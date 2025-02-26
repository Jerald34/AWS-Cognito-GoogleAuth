"use client";
import { useState } from "react";
import AuthButtons from "../components/AuthButtons";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const [modal, setModal] = useState(null);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const openModal = (type) => setModal(type);
  const closeModal = () => setModal(null);
  const startLoading = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
      setTimeout(() => setSuccess(false), 2000);
    }, 2000);
  };
  const failLogin = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setError(true);
      setTimeout(() => setError(false), 2000);
    }, 2000);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-900 to-indigo-900 text-white">
      {/* Navigation Header */}
      <header className="w-full bg-white text-black fixed top-0 left-0 shadow-md flex justify-around py-4">
        {["Home", "Marketplace", "About Us", "Contact Us"].map((item) => (
          <Link key={item} href={`#${item.toLowerCase().replace(" ", "")}`} className="hover:bg-gray-200 px-4 py-2 rounded">
            {item}
          </Link>
        ))}
      </header>

      {/* Main Content */}
      <main className="mt-24 flex justify-center items-center w-full">
        <div className="w-1/2 flex justify-center">
          <Image src="/images/banner.jpeg" alt="banner Illustration" width={500} height={500} />
        </div>

        <div className="w-1/2 flex flex-col items-center">
          <h1 className="text-3xl font-bold mb-6">Welcome</h1>
          <div className="flex gap-6">
            <div onClick={() => openModal("signUp")} className="cookieCard transform transition-transform hover:scale-105 bg-blue text-white p-6 rounded-lg shadow-lg cursor-pointer">
              <span className="cookieHeading font-bold text-lg">Sign Up</span>
              <p className="cookieDescription mt-2">Create a new account and join us.</p>
            </div>
            <div onClick={() => openModal("signIn")} className="cookieCard transform transition-transform hover:scale-105 p-6 rounded-lg shadow-lg cursor-pointer">
              <span className="cookieHeading font-bold text-lg">Log In</span>
              <p className="cookieDescription mt-2">Access your account.</p>
            </div>
          </div>
        </div>
      </main>

      {/* Sign-In Modal */}
      {modal && (
        <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50">
          <div className="bg-white text-black p-6 rounded shadow-md w-80 relative">
            <button className="absolute top-2 right-2 text-2xl" onClick={closeModal}>
              &times;
            </button>
            <h2 className="text-lg font-bold mb-4">{modal === "signUp" ? "Create an Account" : "Continue with Google"}</h2>
            <button className="google-btn w-full flex items-center justify-center gap-2" onClick={() => openModal("account")}>
              <Image src="/images/google.png" alt="Google Logo" width={20} height={20} />
              Sign in with Google
            </button>
          </div>
        </div>
      )}

      {/* Choose an Account Modal */}
      {modal === "account" && (
        <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50">
          <div className="bg-white text-black p-6 rounded shadow-md w-80 relative">
            <button className="absolute top-2 right-2 text-2xl" onClick={closeModal}>
              &times;
            </button>
            <h2 className="text-lg font-bold mb-4">Choose an Account</h2>
            <button className="account-btn w-full flex items-center gap-3 mb-2" onClick={startLoading}>
              <Image src="/images/profile.png" alt="User Avatar" width={30} height={30} className="rounded-full" />
              <span>Juan Dela Cruz</span>
            </button>
            <button className="account-btn w-full flex items-center gap-3 mb-2" onClick={failLogin}>
              <Image src="/images/profile.png" alt="User Avatar" width={30} height={30} className="rounded-full" />
              <span>Mike Lim</span>
            </button>
            <button className="account-btn w-full flex items-center gap-3" onClick={() => openModal("signIn")}>
              <Image src="/images/profile.png" alt="Add Account" width={30} height={30} />
              <span>Add Account</span>
            </button>
          </div>
        </div>
      )}

      {/* Loading Modal */}
      {loading && (
        <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50">
          <div className="bg-white text-black p-6 rounded shadow-md w-80 text-center">
            <div className="loader mx-auto"></div>
            <p className="mt-2">Signing in...</p>
          </div>
        </div>
      )}

      {/* Success Modal with Animation */}
      {success && (
        <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50">
          <div className="bg-white text-black p-6 rounded shadow-md w-80 text-center animate-fade-in animate-scale-up">
            <p className="text-green-500 text-4xl font-bold animate-pop">✅</p>
            <p className="text-lg font-bold mt-2">Success!</p>
          </div>
        </div>
      )}

      {/* Error Modal */}
      {error && (
        <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50">
          <div className="bg-white text-black p-6 rounded shadow-md w-80 text-center">
            <p className="text-red-500 text-4xl font-bold">❌</p>
            <p className="text-lg font-bold mt-2">Login Failed</p>
          </div>
        </div>
      )}
    </div>
  );
}
