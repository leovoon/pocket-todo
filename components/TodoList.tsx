"use client";
import { LoadingPage } from "./LoadingPage";
import TodoListItem from "./TodoListItem";
import { useState, useEffect } from "react";

export default function TodoList() {
  const [todos, setTodos] = useState([]);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    const abortController = new AbortController();
    setLoading(true);
    fetch("api/todos/", {
      headers: {
        "Content-Type": "application/json",
      },
      signal: abortController.signal,
    })
      .then((res) => res.json())
      .then((data) => {
        setTodos(data);
        setLoading(false);
      });
    return () => {
      abortController.abort();
    };
  }, []);

  if (isLoading) return <LoadingPage />;

  return (
    <div className="grid grid-cols-[repeat(auto-fit,minmax(240px,1fr))] gap-4 sm:text-2xl text-xl">
      {todos && todos.length > 0 ? (
        todos.map((todo: { id: number; title: string; completed: boolean }) => (
          <TodoListItem key={todo.id} {...todo} />
        ))
      ) : (
        <div className="flex items-center justify-between p-4 border-b">
          <span>No todos yet</span>
        </div>
      )}
    </div>
  );
}
