import { styled } from "styled-components";
import { DarkModeIcon } from "../../icons/dark-mode.icon";
import { useEffect, useState } from "react";
import { LightModeIcon } from "../../icons/light-mode.icon";

export const ToggleTheme = () => {
  const theme = localStorage.getItem("theme");
  const [isDarkMode, setIsDarkMode] = useState<boolean>(theme === "dark");

  useEffect(() => {
    if (isDarkMode) {
      localStorage.setItem("theme", "dark");
      return document.body.classList.add("dark-mode");
    } else {
      localStorage.setItem("theme", "light");
      return document.body.classList.remove("dark-mode");
    }
  }, [isDarkMode]);

  const toggleMode = () => {
    setIsDarkMode((oldState) => !oldState);
  };

  return (
    <Button onClick={toggleMode}>
      {isDarkMode ? <LightModeIcon /> : <DarkModeIcon />}
    </Button>
  );
};

const Button = styled.button`
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  padding: 4px;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 1rem;
  fill: var(--color-white);
  background-color: transparent;
  transition: all ease-in-out 300ms;

  &:hover {
    cursor: pointer;
    background-color: var(--color-white);
    fill: var(--color-purple);
  }
`;
