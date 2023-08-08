import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root {
    font-family: 'Open Sans', sans-serif;
    --color-purple: #4B3EE0;
    --color-dark-purple: #181169;
    --color-white: #FFFFFF;
    --color-black: #01110A;
    --color-yellow: #E6AF2E;
    --color-grey: #7A7A7A;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;
