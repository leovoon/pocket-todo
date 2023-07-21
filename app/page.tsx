import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { redirect } from "next/navigation";
import Link from "next/link";

export default async function Home() {
  const session = await getServerSession(authOptions);

  if (!session) {
    return (
      <div className="min-h-[80vh] grid place-items-center">
        <h1>
          Welcome!{" "}
          <Link
            href="/api/auth/signin"
            className="underline underline-offset-2"
          >
            Sign in
          </Link>{" "}
          to use this app
        </h1>
      </div>
    );
  }

  redirect("/todos");
}
