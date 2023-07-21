import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { getSessionOrReject } from "@/lib/auth";

export async function DELETE(
  req: Request,
  { params }: { params: { id: string } }
) {
  await getSessionOrReject(req);

  const { id } = params;
  try {
    const deleted = await prisma.todo.delete({
      where: {
        id: id,
      },
    });
    revalidatePath("/todos");
    return NextResponse.json(deleted, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error }, { status: 500 });
  }
}
