"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import AuthButtons from "./components/AuthButtons";

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
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#F3F4F6] text-[#000000]">
      {/* Navigation Header */}
      <header className="w-full bg-[#023e8a] text-[#caf0f8] fixed top-0 left-0 shadow-md flex justify-around py-4 font-montserrat">
        {["Home", "Marketplace", "About Us", "Contact Us"].map((item) => (
          <Link
            key={item}
            href={`#${item.toLowerCase().replace(" ", "")}`}
            className="hover:bg-[#00b4d8]  px-4 py-2 rounded transition-colors"
          >
            {item}
          </Link>
        ))}
      </header>

      {/* Main Content */}
      <main className="mt-24 flex justify-center items-center w-full">
        <div className="w-1/2 flex justify-center relative">
          {/* Animated Image */}
          <div className="animate-slide-in">
            <Image
              src="/images/banner.jpeg"
              alt="banner Illustration"
              width={500}
              height={500}
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>

        <div className="w-1/2 flex flex-col items-center">
          <h1 className="text-5xl font-extrabold mb-4 text-center text-[#0096c7] animate-typing overflow-hidden whitespace-nowrap border-r-4 border-indigo-500">
            The Ultimate Marketplace <br /> for Digital Marketing!{" "}
          </h1>
          <p className="text-xl font-bold text-gray-800 text-center mt-6 animate-fade-in">
            "Buy and sell with confidence—seamlessly connect <br /> with trusted
            sellers and buyers."
          </p>

          <div className="flex flex-col min-w-px gap-6 mt-8">
            <div
              onClick={() => openModal("signUp")}
              className="cookieCard transform transition-transform hover:scale-105 bg-[#023e8a] text-white p-6 rounded-md shadow-lg cursor-pointer w-full hover:bg-[#0353a4] hover:shadow-xl"
            >
              <span className="cookieHeading font-bold text-lg">
                Get Started
              </span>
              <p className="cookieDescription mt-2">
                Sign in with Google to continue.
              </p>
            </div>
          </div>
        </div>
      </main>

      {/* Sign-In Modal */}
      {modal && (
        <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50">
          <div className="bg-white text-black p-6 rounded shadow-md w-80 relative">
            <button
              className="absolute top-2 right-2 text-2xl"
              onClick={closeModal}
            >
              {" "}
              &times;
            </button>
            <h2 className="text-lg font-bold mb-2">
              {modal === "signUp"
                ? "Sign in with Google"
                : "Continue with Google"}
            </h2>
            <p className="text-sm text-gray-600 mb-4">
              Quick and easy login—no extra passwords needed!
            </p>
            <AuthButtons />
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
