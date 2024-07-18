import React, { useState } from "react";
import TodoItem from "./TodoItem";
import AddTodo from "./AddTodo";

export default function TodoList() {
  const [todoList, setTodoList] = useState<string[]>([]);

  return (
    <>
      <TodoItem />
      <AddTodo todoList={todoList} />
    </>
  );
}
