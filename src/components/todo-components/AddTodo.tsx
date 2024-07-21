import React, { useState } from "react";

interface AddTodoProps {
  addTodo: (newTodo: string) => void;
}
export default function AddTodo({ addTodo }: AddTodoProps) {
  const [inputValue, setInputValue] = useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };
  const handleAddButtonClick = () => {
    if (inputValue.trim() !== "") {
      addTodo(inputValue);
      setInputValue("");
    }
  };

  return (
    <>
      <input type="text" onChange={handleChange} value={inputValue} />
      <button onClick={handleAddButtonClick}>추가</button>
    </>
  );
}
