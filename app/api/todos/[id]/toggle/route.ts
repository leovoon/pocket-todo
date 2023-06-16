import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function PATCH(
  req: Request,
  { params }: { params: { id: number } }
) {
  const body = await req.json();
  const { id } = params;
  try {
    const updatedTodo = await prisma.todo.update({
      where: {
        id: +id,
      },
      data: {
        completed: body.completed,
      },
    });
    return NextResponse.json(updatedTodo, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error }, { status: 500 });
  }
}
