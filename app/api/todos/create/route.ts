import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { getSessionOrReject } from "@/lib/auth";

export async function POST(req: Request) {
  const session = await getSessionOrReject(req);

  const body = await req.json();

  try {
    if ("user" in session) {
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
    }
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error }, { status: 500 });
  }
}
