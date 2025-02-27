"use client";
import { useAuth } from "react-oidc-context";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { ClipLoader } from "react-spinners";

export default function AuthCallback() {
  const auth = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!auth.isLoading) {
      if (auth.isAuthenticated) {
        router.push("/dashboard"); // Redirect to dashboard after login
      } else if (auth.error) {
        console.error("Authentication error:", auth.error.message);
      }
    }
  }, [auth, router]);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        backgroundColor: "#f9f9f9",
      }}
    >
      <ClipLoader size={64} />
      <p style={{ marginTop: "20px", fontSize: "18px", color: "#333" }}>
        Processing login...
      </p>
    </div>
  );
}
