"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/components/ui/use-toast";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { TodoSchema } from "prisma/generated/zod";
import { useRouter } from "next/navigation";
import { TailSpin } from "react-loader-spinner";

export const TodoUpdateForm = ({
  id,
  title,
  completed,
  onUpdated,
}: {
  id: number;
  title: string;
  completed: boolean;
  onUpdated: () => void;
}) => {
  const route = useRouter();
  const form = useForm<z.infer<typeof TodoSchema>>({
    resolver: zodResolver(TodoSchema),
    defaultValues: {
      title,
      completed,
    },
  });

  const { isSubmitting, isValid } = form.formState;

  async function onSubmit(data: z.infer<typeof TodoSchema>) {
    try {
      const created = await fetch(`api/todos/${id}/edit`, {
        method: "PUT",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (created.ok) {
        toast({
          title: "Task Updated",
          description: "Your task has been created",
        });
        route.refresh();
        onUpdated();
      }
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-6 flex flex-col"
      >
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>New title</FormLabel>
              <FormControl>
                <Textarea placeholder="Enter new title" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button
          type="submit"
          disabled={isSubmitting || title === form.getValues("title")}
          className="self-end"
        >
          {isSubmitting ? (
            <TailSpin
              height="20"
              width="30"
              color="white"
              ariaLabel="tail-spin-loading"
              radius="1"
              wrapperStyle={{}}
              wrapperClass=""
              visible={true}
            />
          ) : (
            "Save"
          )}
        </Button>
      </form>
    </Form>
  );
};
