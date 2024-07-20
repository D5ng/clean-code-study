import React, { useState } from "react";
import TodoItem from "./TodoItem";
import AddTodo from "./AddTodo";

export default function TodoList() {
  const [todoList, setTodoList] = useState<string[]>([]);

  const addTodo = (newTodo: string) => {
    setTodoList([...todoList, newTodo]);
  };

  return (
    <>
      <TodoItem todoList={todoList} />
      <AddTodo addTodo={addTodo} />
    </>
  );
}
