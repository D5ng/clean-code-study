import React, { useState } from "react";
import TodoItem from "./TodoItem";
import AddTodo from "./AddTodo";
import styled from "styled-components";

export default function TodoList() {
  const [todoList, setTodoList] = useState<string[]>([]);

  const addTodo = (newTodo: string) => {
    setTodoList([...todoList, newTodo]);
  };
  const handleResetClick = () => {
    setTodoList([]);
  };
  return (
    <DivContainer>
      <h1>Todo List</h1>
      <AddTodo addTodo={addTodo} />
      <button onClick={handleResetClick}>초기화</button>
      <TodoItem todoList={todoList} />
    </DivContainer>
  );
}

const DivContainer = styled.div`
  width: 500px;
  max-width: 100%;
  margin: 0 auto;
  background-color: lightblue;
`;
