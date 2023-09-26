"use server";

import { prisma } from "@/lib/prisma";
import { TodoUpsertSchema, TodoCompleteSchema } from "@/prisma/generated/zod";
import { revalidatePath } from "next/cache";
import { z } from "zod";

export const getTodos = async (authorId: string) => {
  try {
    const todos = await prisma.todo.findMany({
      where: {
        author: {
          id: authorId,
        },
      },
    });
    return todos;
  } catch (e) {
    throw new Error("Failed to load todos");
  }
};

export const createTodo = async (data: z.infer<typeof TodoUpsertSchema>, id: string) => {
  try {
    const todo = await prisma.todo.create({
      data: {
        author: {
          connect: {
            id: id,
          },
        },
        title: data.title,
        completed: data.completed,
      },
    });
    revalidatePath("/todos");

    return todo;
  } catch (e) {
    throw new Error("Failed to create todo");
  }
};

export const updateTodo = async (data: z.infer<typeof TodoUpsertSchema>, id: string) => {
  try {
    const updatedTodo = await prisma.todo.update({
      where: {
        id: id,
      },
      data: {
        title: data.title,
        completed: data.completed,
      },
    });
    revalidatePath("/todos");
    return updatedTodo;
  } catch (e) {
    throw new Error("Failed to update todo");
  }
};

export const toggleComplete = async (data: z.infer<typeof TodoCompleteSchema>, id: string) => {
  try {
    const updatedTodo = await prisma.todo.update({
      where: {
        id: id,
      },
      data: {
        completed: data.completed,
      },
    });
    revalidatePath("/todos");
    return updatedTodo;
  } catch (e) {
    throw new Error("Failed to update todo complete status");
  }
};

export const deleteTodo = async (id: string) => {
  try {
    const deleted = await prisma.todo.delete({
      where: {
        id: id,
      },
    });
    revalidatePath("/todos");
    return deleted;
  } catch (e) {
    throw new Error("Failed to delete todo");
  }
};
