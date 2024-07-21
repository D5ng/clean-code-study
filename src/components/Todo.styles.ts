import styled from "styled-components";

// TodoList Styles
const MainContainer = styled.div`
  width: 500px;
  max-width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

// TodoList Input styles
const InputContainer = styled.div`
  display: flex;
  gap: 5px;
`;

// TodoList Item Styles
const CheckboxItem = styled.label`
  display: flex;
  align-items: center;
  margin: 8px 0;
  padding: 4px;
  background-color: #f9f9f9;
  border-radius: 4px;
  border: 1px solid #ddd;
  transition: background-color 0.2s, border-color 0.2s;

  &:hover {
    background-color: #f1f1f1;
    border-color: #ccc;
  }
`;

const StyledCheckbox = styled.input.attrs({ type: "checkbox" })`
  margin-right: 8px;
  appearance: none;
  width: 20px;
  height: 20px;
  border: 2px solid #007bff;
  border-radius: 4px;
  background-color: #fff;
  cursor: pointer;
  transition: background-color 0.3s, border-color 0.3s;

  &:checked {
    background-color: #007bff;
    border-color: #007bff;
    &::before {
      content: "✔";
      color: #fff;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100%;
      width: 100%;
      font-size: 14px;
      position: absolute;
      top: 0;
      left: 0;
    }
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(0, 123, 255, 0.25);
  }

  position: relative;
`;

const TodoListContainer = styled.div`
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 16px;
`;

const NotTodoMessage = styled.p`
  font-size: 18px;
  color: #555;
  text-align: center;
  margin: 20px 0;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  background-color: #f9f9f9;
  font-weight: 500;
  line-height: 1.5;
`;

export const Todo = {
  MainContainer,
  InputContainer,
  CheckboxItem,
  StyledCheckbox,
  TodoListContainer,
  NotTodoMessage,
};
