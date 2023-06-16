import { z } from "zod";

/////////////////////////////////////////
// TODO SCHEMA
/////////////////////////////////////////

export const TodoSchema = z.object({
  id: z.number().int(),
  title: z.string().min(1, { message: "Too short" }).max(255),
  completed: z.boolean(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
});

export type Todo = z.infer<typeof TodoSchema>;
