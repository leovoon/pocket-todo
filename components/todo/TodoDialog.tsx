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
import { useState } from "react";

export default function TodoDialog() {
  const [open, setOpen] = useState(false);
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild className="fixed right-4 bottom-4">
        <Button variant="link">
          <PlusSquare className="sm:h-14 sm:w-14 w-12 h-12" strokeWidth={1} />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add a task</DialogTitle>
          <DialogDescription>Note down your task and add it to your list.</DialogDescription>
        </DialogHeader>
        <TodoAddForm onTodoCreated={() => setOpen(false)} />
      </DialogContent>
    </Dialog>
  );
}
