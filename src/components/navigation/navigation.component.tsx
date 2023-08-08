import { styled } from "styled-components";

export const Navigation = () => (
  <Container>
    <List>
      <li>
        <Button>Hot</Button>
      </li>
      <li>
        <Button>News</Button>
      </li>
      <li>
        <Button>Rising</Button>
      </li>
    </List>
  </Container>
);

const Container = styled.nav`
  padding: 1rem;
`;

const List = styled.ul`
  display: grid;
  grid-auto-flow: column;
  list-style: none;
  justify-content: center;
  grid-gap: 1rem;
`;

const Button = styled.button`
  width: 150px;
  background-color: var(--color-purple);
  color: var(--color-white);
  border-radius: 4px;
  border: none;
  padding: 0.5rem 1rem;
  font-size: 1rem;
`;
