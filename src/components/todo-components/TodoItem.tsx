import React from "react";

interface TodoItemProps {
  todoList: string[];
}
export default function TodoItem({ todoList }: TodoItemProps) {
  return (
    <>
      <ul>
        {todoList.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </>
  );
}
