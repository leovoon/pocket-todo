import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/pages/api/auth/[...nextauth]";

export async function GET(req: Request) {
  const session = await getServerSession({ req, ...authOptions });
  if (!session) {
    return NextResponse.json({ error: "Not authenticated" }, { status: 401 });
  }

  try {
    const todos = await prisma.todo.findMany({
      where: {
        author: {
          email: session.user.email,
        },
      },
    });

    return NextResponse.json(todos, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
