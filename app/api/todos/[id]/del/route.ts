import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/pages/api/auth/[...nextauth]";

export async function DELETE(
  req: Request,
  { params }: { params: { id: string } }
) {
  const session = await getServerSession({ req, ...authOptions });
  if (!session) {
    return NextResponse.json({ error: "Not authenticated" }, { status: 401 });
  }

  const { id } = params;
  try {
    const deleted = await prisma.todo.delete({
      where: {
        id: id,
      },
    });
    revalidatePath("/");
    return NextResponse.json(deleted, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error }, { status: 500 });
  }
}
