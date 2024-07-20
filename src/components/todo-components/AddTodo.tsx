import React, { useState } from "react";

interface AddTodoProps {
  addTodo: (newTodo: string) => void;
}
export default function AddTodo({ addTodo }: AddTodoProps) {
  const [inputValue, setInputValue] = useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
    setInputValue(e.target.value);
  };
  const handleAddButtonClick = () => {
    addTodo(inputValue);
  };
  return (
    <>
      <input type="text" onChange={handleChange} />
      <button onClick={handleAddButtonClick}>추가</button>
    </>
  );
}
