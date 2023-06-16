import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(req: Request) {
  const body = await req.json();
  try {
    const todo = await prisma.todo.create({
      data: {
        title: body.title,
        completed: body.completed,
      },
    });
    console.log("eerr?", todo);
    return NextResponse.json(todo, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
