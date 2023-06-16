import { NextApiRequest } from "next";
import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET(req: NextApiRequest) {
  try {
    const todos = prisma.todo.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });

    return NextResponse.json(todos, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
