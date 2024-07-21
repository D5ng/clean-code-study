import styled from "styled-components";

const AddTodo = styled.input`
  width: 100%; /* 전체 너비 */
  padding: 10px; /* 여백 */
  font-size: 16px; /* 글자 크기 */
  border: 1px solid #ddd; /* 기본 테두리 색상 */
  border-radius: 4px; /* 둥근 모서리 */
  box-sizing: border-box; /* 여백과 테두리가 요소의 전체 너비에 포함되도록 설정 */
  transition: border-color 0.3s, box-shadow 0.3s; /* 애니메이션 */

  &:focus {
    border-color: #007bff; /* 포커스 시 테두리 색상 */
    outline: none; /* 포커스 시 기본 테두리 제거 */
    box-shadow: 0 0 0 2px rgba(0, 123, 255, 0.25); /* 포커스 시 그림자 */
  }
`;

export const Input = {
  AddTodo,
};
