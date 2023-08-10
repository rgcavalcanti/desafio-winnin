import { styled } from "styled-components";
import { ArticlesList } from "./components/articles-list/articles-list.component";
import { Header } from "./components/header/header.component";
import { Navigation } from "./components/navigation/navigation.component";
import { useArticles } from "./hooks/useArticles";
import { ScrollTop } from "./components/scroll-top/scroll-top.component";

type Props = {
  context: ArticlesContext;
};

export const App: React.FC<Props> = ({ context }) => {
  const { articles, showMoreArticles, isLoading, refetchArticles } =
    useArticles(context);

  return (
    <>
      <Header />
      <Content>
        <Navigation />
        <ArticlesList
          articles={articles}
          isLoading={isLoading}
          handleShowMoreArticles={showMoreArticles}
          handleRefetchArticles={refetchArticles}
        />
        <ScrollTop />
      </Content>
    </>
  );
};

const Content = styled.main`
  max-width: 1024px;
  margin: 0 auto;
  padding-bottom: 1rem;
  overflow: auto;
  display: grid;
  justify-items: center;
`;
