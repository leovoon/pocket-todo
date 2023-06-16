import TodoDialog from "@/components/TodoDialog";
import TodoList from "@/components/TodoList";

export const revalidate = 0;

export default function Home() {
  return (
    <>
      <TodoList />
      <TodoDialog />
    </>
  );
}
