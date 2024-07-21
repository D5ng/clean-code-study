import React, { useState } from "react";
import TodoItem from "./TodoItem";
import AddTodo from "./AddTodo";
import styled from "styled-components";
import { Todo } from "./Todo.styles";
import { Button } from "./Button.styles";

export default function TodoList() {
  const [todoList, setTodoList] = useState<string[]>([]);

  const addTodo = (newTodo: string) => {
    setTodoList([...todoList, newTodo]);
  };
  const handleResetClick = () => {
    setTodoList([]);
  };
  return (
    <Todo.MainContainer>
      <h1>Todo List</h1>
      <AddTodo addTodo={addTodo} />
      <TodoItem todoList={todoList} />
      <Button.Reset onClick={handleResetClick}>초기화</Button.Reset>
    </Todo.MainContainer>
  );
}
