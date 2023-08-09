import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Open Sans', sans-serif;
    --color-purple: #6324C6;
    --color-white: #FFFFFF;
    --color-black: #01110A;
    --color-yellow: #FFB800;
    --color-grey: #A7B0BE;
    --color-blue: #0B77D5;
    --background-color: var(--color-white);
    --text-color: var(--color-black);
    
    background-color: var(--background-color);

    &.dark-mode {
      --color-purple: #7D80DA;
      --color-white: #FFFFFF;
      --color-black: #080705;
      --color-yellow: #FFB800;
      --color-grey: #A7B0BE;
      --color-blue: #0B77D5;
      --background-color: var(--color-black);
      --text-color: var(--color-white);
      
    }
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    scroll-behavior: smooth;

    transition: all ease-in-out 300ms;
  }
`;
