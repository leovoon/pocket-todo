import { z } from "zod";

/////////////////////////////////////////
// TODO SCHEMA
/////////////////////////////////////////

export const TodoSchema = z.object({
  id: z.number().int().optional(),
  title: z.string().min(1, { message: "Too short" }).max(255),
  completed: z.boolean(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
});

export const TodoCompleteSchema = z.object({
  completed: z.boolean(),
});

export type Todo = z.infer<typeof TodoSchema>;
