import { useEffect, useState } from "react";
import { styled } from "styled-components";
import { SCrollTopIcon } from "../../icons/scroll-top.icon";

export const ScrollTop = () => {
  const [showbutton, setShowbutton] = useState(false);

  const scrollToTop = () => {
    document.documentElement.scrollTo({
      top: 0,
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      const root = document.documentElement;
      const totalScroll = root.scrollHeight - root.clientHeight;

      if (root.scrollTop / totalScroll > 0.6) {
        return setShowbutton(true);
      }

      return setShowbutton(false);
    };

    document.addEventListener("scroll", handleScroll);

    return () => document.removeEventListener("scroll", handleScroll);
  });

  return (
    <Button onClick={scrollToTop} showButton={showbutton}>
      <SCrollTopIcon />
    </Button>
  );
};

const Button = styled.button<{ showButton: boolean }>`
  display: grid;
  place-items: center;
  background-color: var(--color-purple);
  color: var(--color-white);
  border-radius: 8px;
  width: 50px;
  height: 50px;
  position: fixed;
  top: 50px;
  right: 1rem;
  border: none;

  opacity: ${({ showButton }) => (showButton ? 1 : 0)};
  transition: opacity ease-in-out 200ms;

  fill: var(--color-white);

  &:hover {
    cursor: pointer;
  }

  @media (min-width: 600px) {
    bottom: 1rem;
    top: auto;
  }
`;
