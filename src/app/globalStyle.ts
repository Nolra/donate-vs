import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    text-decoration: none;
    font-family: "GothamPro";
    font-size: 16px;

    --white: #fff;
  }
  
  html,
  body {
    max-width: 100vw;
    /* overflow-x: hidden; */
  }
  a {
    color: inherit;
    text-decoration: none;
  }
  input, button {
    border: none;
  }
  input:focus, select:focus, button:focus, textarea:focus {
    outline: none;
  }
  select:hover, button:hover {
    cursor: pointer;
  }
`;

export default GlobalStyle;

