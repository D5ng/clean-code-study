import TodoList from "components/TodoList";
import React from "react";
import styled from "styled-components";

export default function TodoPage() {
  return (
    <MainContainter>
      <TodoList />
    </MainContainter>
  );
}

const MainContainter = styled.main`
  width: 100%;
  height: 100vh;
  border: 1px solid red;
  padding: 0 26px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
