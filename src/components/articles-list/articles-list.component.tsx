import { styled } from "styled-components";
import { Article } from "./article.component";

type Props = {
  articles: Array<Article>;
};

export const ArticlesList: React.FC<Props> = ({ articles }) => (
  <List>
    {articles.map((article) => (
      <li key={article.id}>
        <Article article={article} />
      </li>
    ))}
  </List>
);

const List = styled.ul`
  list-style: none;
`;
