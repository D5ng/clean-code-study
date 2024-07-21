import React, { useContext, useMemo, useState } from "react";
import TodoItemContext from "./TodoItemContext";
import { Todo } from "../styles/Todo.styles";
import Checkbox from "./\bCheckbox";

interface TodoItemProps {
  todoList: string[];
}

export default function TodoItem({ todoList }: TodoItemProps) {
  const [selectedTodos, setSelectedTodos] = useState<string[]>([]);

  const contextValue = useMemo(() => {
    const value = { selectedTodos, setSelectedTodos };
    console.log("contextValue created", value.selectedTodos);
    return value;
  }, [selectedTodos]);

  return (
    <TodoItemContext.Provider value={contextValue}>
      <Todo.TodoListContainer>
        {todoList.map((item, index) => (
          <Checkbox key={index} value={item} />
        ))}
      </Todo.TodoListContainer>
    </TodoItemContext.Provider>
  );
}
