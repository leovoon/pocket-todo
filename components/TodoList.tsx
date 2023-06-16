import { prisma } from "@/lib/prisma";
import TodoListItem from "./TodoListItem";

export default async function TodoList() {
  const todos = await prisma.todo.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });

  return (
    <div className="grid grid-cols-[repeat(auto-fit,minmax(240px,1fr))] gap-4 sm:text-2xl text-xl">
      {todos.length > 0 ? (
        todos.map((todo) => <TodoListItem key={todo.id} {...todo} />)
      ) : (
        <div className="flex items-center justify-between p-4 border-b">
          <span>No todos yet</span>
        </div>
      )}
    </div>
  );
}
