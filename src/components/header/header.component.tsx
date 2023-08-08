import { styled } from "styled-components";

export const Header = () => (
  <Container>
    <h1>
      REACT<span>JS</span>
    </h1>
  </Container>
);

const Container = styled.header`
  background-color: var(--color-purple);
  color: var(--color-white);
  padding: 1rem;
  text-align: center;

  span {
    color: var(--color-yellow);
  }
`;
