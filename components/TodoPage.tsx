import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import TodoDialog from "./TodoDialog";
import TodoList from "./TodoList";

export default function TodoPage() {
  const { data: session } = useSession();
  if (!session) return;
  return (
    <>
      <TodoList />
      <TodoDialog />
      {session && (
        <div className="fixed bottom-0 left-0 flex gap-2 p-2 m-2">
          <div className="rounded-full bg-gray-100 dark:bg-gray-800">
            <Image
              src={session.user.image!}
              width={24}
              height={24}
              alt="user profile"
              className="rounded-full grayscale"
            />
          </div>
          <button onClick={() => signOut()} className="hover:underline">
            Log out
          </button>
        </div>
      )}
    </>
  );
}
