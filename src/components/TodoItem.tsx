import React, { useContext, useState } from "react";
import TodoItemContext from "./TodoItemContext";
import { Todo } from "../styles/Todo.styles";

interface TodoItemProps {
  todoList: string[];
}
interface CheckboxProps {
  value: string;
}

const Checkbox = ({ value }: CheckboxProps) => {
  const context = useContext(TodoItemContext);

  if (!context) {
    throw new Error("체크박스는 provider 안에서 사용해야합니다.");
  }

  const { selectedTodos, setSelectedTodos } = context;
  const handleChange = () => {
    if (selectedTodos.includes(value)) {
      setSelectedTodos(selectedTodos.filter((todo) => todo !== value));
    } else {
      setSelectedTodos([...selectedTodos, value]);
    }
  };
  return (
    <Todo.CheckboxItem>
      <Todo.StyledCheckbox
        type="checkbox"
        checked={selectedTodos.includes(value)}
        onChange={handleChange}
      />
      {value}
    </Todo.CheckboxItem>
  );
};

export default function TodoItem({ todoList }: TodoItemProps) {
  const [selectedTodos, setSelectedTodos] = useState<string[]>([]);

  const value = {
    selectedTodos,
    setSelectedTodos,
  };

  return (
    <TodoItemContext.Provider value={value}>
      <Todo.TodoListContainer>
        {todoList.map((item, index) => (
          <TodoItem.Checkbox key={index} value={item} />
        ))}
      </Todo.TodoListContainer>
    </TodoItemContext.Provider>
  );
}

TodoItem.Checkbox = Checkbox;
