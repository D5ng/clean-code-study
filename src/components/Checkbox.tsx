import React, { useContext } from "react";
import SelectedItemContext from "./SelectedItemContext";
import { Todo } from "../styles/Todo.styles";

interface CheckboxProps {
  value: string;
}

const Checkbox = ({ value }: CheckboxProps) => {
  const context = useContext(SelectedItemContext);

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

  const isSelected = selectedTodos.includes(value);

  return (
    <Todo.CheckboxItem>
      <Todo.StyledCheckbox
        type="checkbox"
        checked={isSelected}
        onChange={handleChange}
      />
      {value}
    </Todo.CheckboxItem>
  );
};

export default Checkbox;
