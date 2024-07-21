import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box; 
    margin: 0;
    padding: 0;
  }
  html,
  body {
    font-size: 15px;
    display: flex;
    flex-direction: column;
  }
  a {
    text-decoration: none;
  }
  ul,
  ol {
    list-style: none;
  }
  textarea {
    resize: none;
  }
  button {
    cursor: pointer;
    border: 0;
  }
`;
export default GlobalStyle;
