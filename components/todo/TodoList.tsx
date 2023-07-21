import TodoListItem from "@/components/todo/TodoListItem";
import { prisma } from "@/lib/prisma";

export default async function TodoList({ authorId }: { authorId: string }) {
  const todos = await prisma.todo.findMany({
    where: {
      author: {
        id: authorId,
      },
    },
  });
  return (
    <div className="grid grid-cols-[repeat(auto-fit,minmax(240px,1fr))] gap-4 sm:text-2xl text-xl">
      {todos && todos.length > 0 ? (
        todos.map((todo) => <TodoListItem key={todo.id} {...todo} />)
      ) : (
        <div className="flex items-center justify-between p-4 border-b">
          <span>No todos yet</span>
        </div>
      )}
    </div>
  );
}
