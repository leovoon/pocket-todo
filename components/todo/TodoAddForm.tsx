"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/components/ui/use-toast";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { TodoSchema, TodoUpsertSchema } from "prisma/generated/zod";
import { useRouter } from "next/navigation";
import { TailSpin } from "react-loader-spinner";
import { prisma } from "@/lib/prisma";
import { useSession } from "next-auth/react";
import { revalidatePath } from "next/cache";
import { createTodo } from "./actions";

type TodoAddFormProps = {
  onTodoCreated: () => void;
};
export const TodoAddForm = ({ onTodoCreated }: TodoAddFormProps) => {
  const { data: session } = useSession();

  const form = useForm<z.infer<typeof TodoUpsertSchema>>({
    resolver: zodResolver(TodoUpsertSchema),
    defaultValues: {
      completed: false,
    },
  });

  const { isSubmitting, isValid } = form.formState;

  async function onSubmit(data: z.infer<typeof TodoUpsertSchema>) {
    try {
      if (!session) throw new Error("User is not logged in");
      const todo = await createTodo(data, session.user.id);

      if (todo) {
        toast({
          title: "Task created",
          description: "Your task has been created",
        });
        form.reset();
        onTodoCreated();
      }
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 flex flex-col">
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Title</FormLabel>
              <FormControl>
                <Textarea placeholder="Enter your task" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit" disabled={isSubmitting || !isValid} className="self-end">
          {isSubmitting ? (
            <TailSpin
              height="20"
              width="40"
              color="white"
              ariaLabel="tail-spin-loading"
              radius="1"
              wrapperStyle={{}}
              wrapperClass=""
              visible={true}
            />
          ) : (
            "Submit"
          )}
        </Button>
      </form>
    </Form>
  );
};
