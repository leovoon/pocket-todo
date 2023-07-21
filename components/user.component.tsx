"use client";

import { useSession } from "next-auth/react";
import Image from "next/image";

export const User = () => {
  const { data: session } = useSession();

  return (
    <>
      <h1>Client Session</h1>
      <pre>{JSON.stringify(session)}</pre>
    </>
  );
};

export const UserProfileImage = () => {
  const { data: session } = useSession();

  return (
    <div className="rounded-full bg-gray-100 dark:bg-gray-800">
      <Image
        src={session?.user.image ?? "/icon1.png"}
        width={24}
        height={24}
        alt="user profile"
        className="rounded-full grayscale"
      />
    </div>
  );
};
