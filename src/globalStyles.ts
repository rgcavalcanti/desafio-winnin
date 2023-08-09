import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root {
    font-family: 'Open Sans', sans-serif;
    --color-purple: #6324C6;
    --color-white: #FFFFFF;
    --color-black: #01110A;
    --color-yellow: #FFB800;
    --color-grey: #A7B0BE;
    --color-blue: #0B77D5;
;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    scroll-behavior: smooth;
  }
`;
