import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/pages/api/auth/[...nextauth]";

export async function PUT(
  req: Request,
  { params }: { params: { id: string } }
) {
  const session = await getServerSession({ req, ...authOptions });
  if (!session) {
    return NextResponse.json({ error: "Not authenticated" }, { status: 401 });
  }

  const body = await req.json();
  const { id } = params;
  try {
    const updatedTodo = await prisma.todo.update({
      where: {
        id: id,
      },
      data: {
        title: body.title,
        completed: body.completed,
      },
    });
    return NextResponse.json(updatedTodo, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error }, { status: 500 });
  }
}
