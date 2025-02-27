"use client";
import { useAuth } from "react-oidc-context";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export function withAuth(Component) {
  return function ProtectedComponent(props) {
    const auth = useAuth();
    const router = useRouter();

    useEffect(() => {
      if (!auth.isLoading && !auth.isAuthenticated) {
        router.push("/");
      }
    }, [auth, router]);

    return auth.isAuthenticated ? <Component {...props} /> : null;
  };
}