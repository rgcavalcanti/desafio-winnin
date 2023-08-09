import { styled } from "styled-components";
import { ToggleTheme } from "./toggle-theme.component";

export const Header = () => (
  <Container>
    <h1>
      REACT<span>JS</span>
    </h1>
    <ToggleTheme />
  </Container>
);

const Container = styled.header`
  background-color: var(--color-purple);
  color: var(--color-white);
  padding: 1rem;
  text-align: center;
  position: relative;

  span {
    color: var(--color-yellow);
  }
`;
