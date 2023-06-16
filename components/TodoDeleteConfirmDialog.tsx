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
import { toast } from "./ui/use-toast";
import { Trash2 } from "lucide-react";
import { useRouter } from "next/navigation";
type TodoProps = {
  title: string;
  id: number;
};

export function TodoDeleteConfirmDialog({ title, id }: TodoProps) {
  const route = useRouter();
  async function handleConfirmDelete() {
    const deleted = await fetch(`api/todos/${id}/del`, {
      method: "DELETE",
    });

    if (deleted.ok) {
      toast({
        title: `You deleted a todo #${id}.`,
      });
      route.refresh();
    }
  }
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Trash2 size={16} strokeWidth={1} className="cursor-pointer" />
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>
            Are you absolutely sure to delete #{id}?
          </AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will permanently delete your todo
            and remove your data from our servers.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction onClick={handleConfirmDelete}>
            Yes
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
