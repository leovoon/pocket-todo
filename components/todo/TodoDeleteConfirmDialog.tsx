"use client";
import { MouseEvent, useMemo } from "react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { toast } from "@/components/ui/use-toast";
import { Trash2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { TailSpin } from "react-loader-spinner";
import { Todo } from "@/prisma/generated/zod";
import { deleteTodo } from "./actions";

export function TodoDeleteConfirmDialog({ id, title }: Todo) {
  const route = useRouter();
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [deleting, setDeleting] = useState(false);

  async function handleConfirmDelete(e: MouseEvent) {
    e.preventDefault();
    setDeleting(true);
    setDeleteDialogOpen(true);
    const deleted = await deleteTodo(id);

    if (deleted) {
      toast({
        title: `You deleted a todo #${formattedTitle}.`,
      });
      setDeleting(false);
      setDeleteDialogOpen(false);
    }
  }

  const formattedTitle = useMemo(() => {
    if (title.length > 30) {
      return title.substring(0, 10) + "...";
    } else {
      return title;
    }
  }, [title]);
  return (
    <AlertDialog open={deleteDialogOpen} onOpenChange={setDeleteDialogOpen}>
      <AlertDialogTrigger asChild>
        <Trash2 size={16} strokeWidth={1} className="cursor-pointer" />
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>
            Are you absolutely sure to delete <i>{formattedTitle}</i>?
          </AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will permanently delete your todo and remove your data from our servers.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction disabled={deleting} onClick={(e) => handleConfirmDelete(e)}>
            {deleting ? (
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
              "Yes"
            )}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
