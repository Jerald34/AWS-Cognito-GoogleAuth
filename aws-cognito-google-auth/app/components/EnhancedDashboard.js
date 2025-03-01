import { useAuth } from "react-oidc-context";
import AuthButtons from "./AuthButtons";

export default function EnhancedDashboard() {
  const auth = useAuth();

  const handleSignOut = () => {
    auth.signoutRedirect();
  };

  return (
    <div className="flex min-h-screen bg-[#F3F4F6] text-[#000000]">
      {/* Sidebar */}
      <aside className="fixed left-0 top-0 h-full w-64 bg-[#023e8a] text-[#caf0f8] p-4 shadow-lg">
        <h2 className="text-xl font-bold mb-4">Dashboard</h2>
        <nav>
          <ul className="space-y-2">
            <li><a href="#" className="block p-2 hover:bg-[#0077b6] rounded">Home</a></li>
            <li><a href="#" className="block p-2 hover:bg-[#0077b6] rounded">Profile</a></li>
            <li><a href="#" className="block p-2 hover:bg-[#0077b6] rounded">Settings</a></li>
            <button onClick={handleSignOut} className="block w-3/4 mx-auto mt-2 bg-[#caf0f8] hover:bg-red-600 text-black px-2 py-1 text-sm rounded">
            Sign Out
           </button>
           </ul>
           </nav>
           </aside>
           <AuthButtons />
      
      {/* Main Content */}
      <div className="flex-1 flex flex-col items-center justify-center min-h-screen ml-64">
        <header className="fixed top-0 left-0 w-full flex items-center justify-between p-4 bg-[#023e8a] text-[#caf0f8] shadow-md z-10">
          <h2 className="text-lg ml-72">Hi {`${auth?.user?.profile?.given_name} ${auth?.user?.profile?.family_name}` || "Unknown User"}</h2>
         
        </header>
        
        <div className="flex flex-col items-center justify-center text-center w-full max-w-2xl">
          <h1 className="text-3xl font-bold">Welcome to Your Dashboard</h1>
          <p className="my-4">You have successfully signed in with Google.</p>

          {/* Profile Card */}
          <div className="bg-white shadow-md rounded-lg p-4 w-full max-w-sm text-center">
            <img src={auth?.user?.profile?.picture || "https://via.placeholder.com/150"} alt="Profile" className="w-24 h-24 mx-auto rounded-full border-2 border-[#023e8a]" />
            <h3 className="text-xl font-semibold mt-2">{`${auth?.user?.profile?.given_name} ${auth?.user?.profile?.family_name}` || "Unknown User"}</h3>
            <p className="text-gray-600">{auth?.user?.profile?.email || "No email available"}</p>
          </div>   
     
        </div>
      </div>
    </div>
  );
}
