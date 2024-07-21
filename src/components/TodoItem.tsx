import React, { useState } from "react";
import TodoItemContext from "./TodoItemContext";

interface TodoItemProps {
  todoList: string[];
}
interface CheckboxProps {
  value: string;
}

const Checkbox = ({ value }: CheckboxProps) => {
  const context = React.useContext(TodoItemContext);

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
    <li>
      <input
        type="checkbox"
        checked={selectedTodos.includes(value)}
        onChange={handleChange}
      />
      {value}
    </li>
  );
};

export default function TodoItem({ todoList }: TodoItemProps) {
  const [selectedTodos, setSelectedTodos] = useState<string[]>([]);
  console.log(selectedTodos);
  const value = {
    selectedTodos,
    setSelectedTodos,
  };

  return (
    <TodoItemContext.Provider value={value}>
      <ul>
        {todoList.map((item, index) => (
          <TodoItem.Checkbox key={index} value={item} />
        ))}
      </ul>
    </TodoItemContext.Provider>
  );
}

TodoItem.Checkbox = Checkbox;
