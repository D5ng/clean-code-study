import React, { ChangeEvent, useState } from "react";
import { Button } from "./Button.styles";
import { Input } from "./Input.styles";
import { Todo } from "./Todo.styles";

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

  return (
    <Todo.InputContainer>
      <Input.AddTodo type="text" onChange={handleChange} value={inputValue} />
      <Button.Add onClick={handleAddButtonClick}>추가</Button.Add>
    </Todo.InputContainer>
  );
}
