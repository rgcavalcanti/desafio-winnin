import { styled } from "styled-components";
import { Article } from "./article.component";

type Props = {
  articles: Array<Article>;
};

export const ArticlesList: React.FC<Props> = ({ articles }) => {
  if(articles.length === 0) {
    return <h2 data-cy="missing-articles">Nenhum artigo encontrado.</h2>
  }
  
  return (
    <List>
      {articles.map((article) => (
        <li data-cy="article" key={article.id}>
          <Article article={article} />
        </li>
      ))}
    </List>
  );
};

const List = styled.ul`
  list-style: none;
`;
