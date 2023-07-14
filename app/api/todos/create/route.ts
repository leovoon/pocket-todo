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

  try {
    const todo = await prisma.todo.create({
      data: {
        author: {
          connect: {
            id: session.user.id,
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
