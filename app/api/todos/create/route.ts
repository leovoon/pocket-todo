import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/pages/api/auth/[...nextauth]";

export async function POST(req: Request) {
  const body = await req.json();
  const session = await getServerSession({ req, ...authOptions });
  if (!session) {
    return NextResponse.redirect("/signin", { status: 302 });
  }
  const user = {
    id: session.user.id,
    name: session.user.name,
    email: session.user.email,
  };

  try {
    const todo = await prisma.todo.create({
      // TODO: Fix type error
      // @ts-ignore
      data: {
        uid: user.id,
        author: {
          connect: {
            id: user.id,
          },
        },
        title: body.title,
        completed: body.completed,
      },
    });
    return NextResponse.json(todo, { status: 201 });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error }, { status: 500 });
  }
}
