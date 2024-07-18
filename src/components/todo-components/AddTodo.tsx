import React, { useState } from "react";

interface AddTodoProps {
  todoList: string[];
}
export default function AddTodo({ todoList }: AddTodoProps) {
  const [inputValue, setInputValue] = useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
    setInputValue(e.target.value);
  };
  const handleAddButtonClick = () => {
    todoList[inputValue];
  };
  return (
    <>
      <input type="text" onChange={handleChange} />
      <button onClick={handleAddButtonClick}>추가</button>
    </>
  );
}
