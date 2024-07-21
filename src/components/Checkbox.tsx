import React, { useContext } from "react";
import TodoItemContext from "./TodoItemContext";
import { Todo } from "../styles/Todo.styles";

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
    <Todo.CheckboxItem onClick={handleChange}>
      <Todo.StyledCheckbox
        type="checkbox"
        checked={selectedTodos.includes(value)}
        readOnly
      />
      {value}
    </Todo.CheckboxItem>
  );
};

export default Checkbox;
