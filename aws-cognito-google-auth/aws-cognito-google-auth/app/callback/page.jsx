"use client";
import { useAuth } from "react-oidc-context";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

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

    return <p className="text-center text-lg">Processing login...</p>;
}
