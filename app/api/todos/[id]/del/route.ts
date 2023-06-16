import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export async function DELETE(
  req: Request,
  { params }: { params: { id: number } }
) {
  const { id } = params;
  console.log("DELETE", id);
  try {
    const deleted = await prisma.todo.delete({
      where: {
        id: +id,
      },
    });
    revalidatePath("/");
    return NextResponse.json(deleted, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error }, { status: 500 });
  }
}
