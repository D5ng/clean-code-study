import React from "react";
import { Todo } from "../styles/Todo.styles";
import Checkbox from "./Checkbox";

interface TodoItemProps {
  todoList: string[];
}

export default function TodoItem({ todoList }: TodoItemProps) {
  return (
    <Todo.TodoListContainer>
      {todoList.map((item, index) => (
        <TodoItem.Checkbox key={index} value={item} />
      ))}
    </Todo.TodoListContainer>
  );
}

TodoItem.Checkbox = Checkbox;
