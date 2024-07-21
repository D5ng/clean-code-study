import TodoList from "components/todo-components/TodoList";
import React from "react";
import styled from "styled-components";

export default function TodoPage() {
  return (
    <main>
      <TodoList />
    </main>
  );
}

const MainContainter = styled.div``;
