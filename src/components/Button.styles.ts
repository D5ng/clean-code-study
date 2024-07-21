import styled from "styled-components";

const Reset = styled.button`
  background-color: #ff6f61;
  color: #ffffff;
  border: none;
  border-radius: 4px;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s, transform 0.3s;

  &:hover {
    background-color: #ff4d4d;
  }

  &:active {
    transform: scale(0.98);
  }

  &:focus {
    outline: none;
  }
`;

const Add = styled(Reset)`
  width: 80px;
  background-color: #4caf50;
  &:hover {
    background-color: #45a049;
  }
`;

export const Button = {
  Reset,
  Add,
};
