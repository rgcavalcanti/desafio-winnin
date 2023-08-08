import { styled } from "styled-components";
import { Article } from "./article.component";

export const ArticlesList = () => (
  <List>
    <li>
      <Article />
    </li>
    <li>
      <Article />
    </li>
  </List>
);

const List = styled.ul `
  list-style: none;
`