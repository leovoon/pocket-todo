"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { Checkbox } from "@/components/ui/checkbox";
import { toast } from "@/components/ui/use-toast";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { Todo, TodoCompleteSchema } from "@/prisma/generated/zod";
import { useRouter } from "next/navigation";
import { CheckedState } from "@radix-ui/react-checkbox";

export function TodoCompleteForm({ id, completed }: Todo) {
  const route = useRouter();
  const form = useForm<z.infer<typeof TodoCompleteSchema>>({
    resolver: zodResolver(TodoCompleteSchema),
    defaultValues: {
      completed,
    },
  });

  const { handleSubmit, control } = form;

  function handleCheckboxChange(checked: CheckedState) {
    if (typeof checked === "boolean") form.setValue("completed", checked);
    handleSubmit(onSubmit)();
  }

  async function onSubmit(data: z.infer<typeof TodoCompleteSchema>) {
    const updated = await fetch(`api/todos/${id}/toggle`, {
      method: "PATCH",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (updated.ok) {
      console.log(updated);
      toast({
        title: `You updated a todo #${id}.`,
      });
      route.refresh();
    }
  }

  return (
    <Form {...form}>
      <form className="space-y-6">
        <FormField
          control={control}
          name="completed"
          render={() => (
            <FormItem className="flex flex-row items-center justify-center space-x-3 space-y-0 rounded-md p-4">
              <FormControl>
                <Checkbox
                  checked={form.getValues("completed") as boolean}
                  onCheckedChange={handleCheckboxChange}
                />
              </FormControl>
            </FormItem>
          )}
        />
      </form>
    </Form>
  );
}
