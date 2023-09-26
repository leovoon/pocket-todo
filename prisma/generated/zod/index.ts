import { z } from "zod";

/////////////////////////////////////////
// TODO SCHEMA
/////////////////////////////////////////

export const TodoSchema = z.object({
  id: z.string().min(1),
  title: z.string(),
  completed: z.boolean(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
});

export const TodoUpsertSchema = z.object({
  title: z.string().min(1, { message: "Too short" }).max(50, { message: "Too long" }),
  completed: z.boolean(),
});

export const TodoCompleteSchema = z.object({
  completed: z.boolean(),
});

export type Todo = z.infer<typeof TodoSchema>;
