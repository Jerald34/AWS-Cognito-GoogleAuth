import { useAuth } from "react-oidc-context";
import AuthButtons from "./AuthButtons";

export default function EnhancedDashboard() {
  const auth = useAuth();
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-900 to-indigo-900 text-white">
      <h1 className="text-3xl font-bold">Welcome to Your Dashboard</h1>
      <p className="my-4">You have successfully signed in with Google.</p>
      <p className="mb-4">
        Logged in as{" "}
        {`${auth?.user?.profile?.given_name} ${auth?.user?.profile?.family_name}` ||
          "Unknown User"}
        .
      </p>
      <AuthButtons />
    </div>
  );
}
