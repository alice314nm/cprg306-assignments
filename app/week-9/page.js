"use client";

import { useUserAuth } from "./_utils/auth-context"; // Adjust the path as needed
import React from 'react';

export default function Page() {
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth(); // Access the user object and auth functions
  const router = useRouter(); // Initialize the router for navigation

  const handleLogin = async () => {
    try {
      await gitHubSignIn(); // Sign in the user with GitHub
      router.push('/week-9/shopping-list'); // Redirect to the shopping list after logging in
    } catch (error) {
      console.error("Error signing in:", error);
    }
  };

  const handleLogout = async () => {
    try {
      await firebaseSignOut(); // Log out the user
      router.push('/'); // Redirect to the landing page or home after logging out
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  return (
    <main className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-3xl font-bold mb-5">Welcome to the Shopping List App</h1>
      {user ? (
        <div className="flex flex-col items-center">
          <p className="mb-2">
            Welcome, {user.displayName} ({user.email})
          </p>
          <button onClick={handleLogout} className="rounded bg-rose-600 p-2 hover:bg-rose-800 text-white">
            Logout
          </button>
          <button onClick={() => router.push('/week-9/shopping-list')} className="rounded bg-rose-600 p-2 hover:bg-rose-800 text-white mt-2">
            Go to Shopping List
          </button>
        </div>
      ) : (
        <button onClick={handleLogin} className="rounded bg-rose-600 p-2 hover:bg-rose-800 text-white">
          Login with GitHub
        </button>
      )}
    </main>
  );
}
