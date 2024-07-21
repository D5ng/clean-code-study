import React, { useState } from "react";
import TodoItem from "./TodoItem";
import AddTodo from "./AddTodo";
import { Todo } from "../styles/Todo.styles";
import { Button } from "../styles/Button.styles";

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
      {todoList.length === 0 ? (
        <Todo.NotTodoMessage>
          할 일이 없습니다. 할 일 목록을 추가해주세요 ✨
        </Todo.NotTodoMessage>
      ) : (
        <TodoItem todoList={todoList} />
      )}
      <Button.Reset onClick={handleResetClick}>초기화</Button.Reset>
    </Todo.MainContainer>
  );
}
