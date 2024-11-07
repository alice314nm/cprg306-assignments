"use client";

import { useUserAuth } from "./_utils/auth-context"; // Adjust the path as needed
import React from 'react';
import Link from "next/link";

export default function Page() {
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

  return (
    <main className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-3xl font-bold mb-5">Welcome to the Shopping List App</h1>
      {user ? (
        <div className="flex flex-col items-center">
          <Link href="/week-9/shopping-list" className="rounded bg-rose-600 p-2 hover:bg-rose-800 text-white mb-2">Go to Shopping List</Link>
          <button onClick={firebaseSignOut} className="rounded bg-rose-600 p-2 hover:bg-rose-800 text-white">Logout</button>
        </div>
      ) : (
        <button onClick={gitHubSignIn} className="rounded bg-rose-600 p-2 hover:bg-rose-800 text-white">Login with GitHub</button>
      )}
    </main>
  );
}
