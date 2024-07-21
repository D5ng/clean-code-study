import React, { ChangeEvent, KeyboardEvent, useState } from "react";
import { Button } from "../styles/Button.styles";
import { Input } from "../styles/Input.styles";
import { Todo } from "../styles/Todo.styles";

interface AddTodoProps {
  addTodo: (newTodo: string) => void;
}
export default function AddTodo({ addTodo }: AddTodoProps) {
  const [inputValue, setInputValue] = useState<string>("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };
  const handleAddButtonClick = () => {
    if (inputValue.trim() !== "") {
      addTodo(inputValue);
      setInputValue("");
    }
  };
  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      handleAddButtonClick();
    }
  };

  return (
    <Todo.InputContainer>
      <Input.AddTodo
        type="text"
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        value={inputValue}
      />
      <Button.Add onClick={handleAddButtonClick}>추가</Button.Add>
    </Todo.InputContainer>
  );
}
