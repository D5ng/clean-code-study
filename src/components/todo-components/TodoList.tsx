import React, { useState } from "react";
import TodoItem from "./TodoItem";
import AddTodo from "./AddTodo";

export default function TodoList() {
  const [todoList, setTodoList] = useState<string[]>([]);

  const addTodo = (newTodo: string) => {
    setTodoList([...todoList, newTodo]);
  };
  const handleResetClick = () => {
    setTodoList([]);
  };
  return (
    <>
      <h1>Todo List</h1>
      <AddTodo addTodo={addTodo} />
      <button onClick={handleResetClick}>초기화</button>
      <TodoItem todoList={todoList} />
    </>
  );
}
