"use client";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { TodoAddForm } from "@/components/todo/TodoAddForm";
import { PlusSquare } from "lucide-react";

export default function TodoDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild className="fixed right-4 bottom-4">
        <Button variant="link">
          <PlusSquare className="sm:h-14 sm:w-14 w-12 h-12" strokeWidth={1} />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add a task</DialogTitle>
          <DialogDescription>
            Note down your task and add it to your list.
          </DialogDescription>
        </DialogHeader>
        <TodoAddForm />
      </DialogContent>
    </Dialog>
  );
}
