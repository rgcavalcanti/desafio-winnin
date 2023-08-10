import { styled } from "styled-components";
import { Article } from "./article.component";
import { ArticlesListSkeleton } from "./articles-list-skeleton.component";
import { ArticlesNotFound } from "./articles-not-found.component";

type Props = {
  articles: Array<Article>;
  isLoading: boolean;
  handleShowMoreArticles: () => void;
  handleRefetchArticles: () => void;
};

export const ArticlesList: React.FC<Props> = ({
  articles,
  isLoading,
  handleShowMoreArticles: showMoreArticles,
  handleRefetchArticles: refetchArticles,
}) => {
  if (articles.length === 0 && isLoading) {
    return <ArticlesListSkeleton size={10} />;
  }

  if (articles.length === 0) {
    return (
      <>
        <ArticlesNotFound />
        <Button data-cy="button" onClick={refetchArticles}>
          Tentar de novo
        </Button>
      </>
    );
  }

  return (
    <>
      <List data-cy="articles-list">
        {articles.map((article) => (
          <li data-cy="article" key={article.id}>
            <Article article={article} />
          </li>
        ))}
      </List>
      {isLoading ? (
        <ArticlesListSkeleton size={3} />
      ) : (
        <Button data-cy="button" onClick={showMoreArticles}>
          + Ver mais
        </Button>
      )}
    </>
  );
};

const List = styled.ul`
  list-style: none;
  width: 100%;
`;

const Button = styled.button`
  background-color: var(--color-purple);
  color: var(--color-white);
  border: none;
  padding: 0.5rem;
  font-size: 1.2rem;
  border-radius: 8px;
  max-width: 500px;
  width: calc(100% - 2rem);
  margin: 0 1rem;
  height: 50px;

  &:hover {
    cursor: pointer;
  }
`;
