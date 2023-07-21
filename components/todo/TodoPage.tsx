import { getServerSession } from "next-auth";
import TodoDialog from "./TodoDialog";
import TodoList from "./TodoList";
import { LogoutButton } from "@/components/buttons.component";
import { UserProfileImage } from "@/components/user.component";
import { authOptions } from "@/lib/auth";
import { redirect } from "next/navigation";

export default async function TodoPage() {
  const session = await getServerSession(authOptions);
  if (!session) {
    redirect("/api/auth/signin");
  }
  return (
    <>
      <TodoList authorId={session.user.id} />
      <TodoDialog />
      <div className="fixed bottom-0 left-0 flex gap-2 p-2 m-2 bg-stone-300 rounded-md">
        <UserProfileImage />
        <LogoutButton className="hover:underline" />
      </div>
    </>
  );
}
