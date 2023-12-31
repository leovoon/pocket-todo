"use client";

import React, { useState, useRef, useEffect } from "react";
import { TodoDeleteConfirmDialog } from "@/components/todo/TodoDeleteConfirmDialog";
import { TodoCompleteForm } from "@/components/todo/TodoCompleteForm";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { TodoUpdateForm } from "./TodoUpdateForm";
import { Edit } from "lucide-react";
import { useHover } from "usehooks-ts";
import { cn } from "@/lib/utils";
import { Separator } from "@/components/ui/separator";
import { Todo } from "@/prisma/generated/zod";

export default function TodoListItem({ id, title, completed }: Todo) {
  const [updateDialogOpen, setUpdateDialogOpen] = useState(false);
  const hoverRef = useRef(null);
  const isHovering = useHover(hoverRef);
  const menuOpenClassName = isHovering ? "flex bg-gradient-to-r from-slate-100/50" : "hidden";

  return (
    <Dialog open={updateDialogOpen} onOpenChange={setUpdateDialogOpen}>
      <div className="flex items-center border shadow-sm">
        <TodoCompleteForm id={id} completed={completed} title={title} />
        <div key={id} className="flex flex-col w-full h-full justify-between" ref={hoverRef}>
          <div className="flex items-center justify-start p-4 w-full ">
            <span className="break-words">{title}</span>
          </div>
          {isHovering && (
            <div className={cn("w-full h-1/4 py-2 items-center justify-evenly ", menuOpenClassName)}>
              <DialogTrigger asChild>
                <Edit size={16} strokeWidth={1} className="cursor-pointer" />
              </DialogTrigger>
              <Separator orientation="vertical" />
              <TodoDeleteConfirmDialog id={id} title={title} completed={completed} />
            </div>
          )}
        </div>
      </div>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Edit TODO</DialogTitle>
          <DialogDescription>Update your task and save it to your list.</DialogDescription>
        </DialogHeader>
        <TodoUpdateForm id={id} title={title} completed={completed} onUpdated={() => setUpdateDialogOpen(false)} />
      </DialogContent>
    </Dialog>
  );
}
