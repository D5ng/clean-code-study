import React from "react";

interface TodoItemProps {
  todoList: string[];
}
export default function TodoItem({ todoList }: TodoItemProps) {
  return (
    <>
      <h1>Todo List</h1>
      <ul>
        {todoList.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </>
  );
}
