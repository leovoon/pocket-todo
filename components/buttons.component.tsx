"use client";

import { signIn, signOut } from "next-auth/react";

export const LoginButton = () => {
  return (
    <button
      onClick={() =>
        signIn("google", {
          callbackUrl: "/todos",
        })
      }
    >
      Sign in
    </button>
  );
};

export const LogoutButton = ({ className }: { className: string }) => {
  return (
    <button className={className} onClick={() => signOut()}>
      Sign Out
    </button>
  );
};
