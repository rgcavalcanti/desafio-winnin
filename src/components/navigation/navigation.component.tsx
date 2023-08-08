import { styled } from "styled-components";
import { NavLink } from "react-router-dom";

export const Navigation = () => (
  <Container>
    <List>
      <li>
        <Link to="/hot">Hot</Link>
      </li>
      <li>
        <Link to="/news">News</Link>
      </li>
      <li>
        <Link to="/rising">Rising</Link>
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

const Link = styled(NavLink)`
  width: 150px;
  background-color: var(--color-grey);
  color: var(--color-white);
  border-radius: 8px;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  text-decoration: none;
  transition: background-color 100ms;

  &:hover,
  &.active {
    background-color: var(--color-purple);
  }
`;
