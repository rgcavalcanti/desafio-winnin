import { styled } from "styled-components";
import { ArticlesList } from "./components/articles-list/articles-list.component";
import { Header } from "./components/header/header.component";
import { Navigation } from "./components/navigation/navigation.component";
import { ShowMoreButton } from "./components/show-more-button/show-more-button.component";
import { useArticles } from "./contexts/articles.context";

type Props = {
  context: "hot" | "news" | "rising";
};

export const App: React.FC<Props> = ({ context }) => {
  const { articles, showMoreArticles } = useArticles(context);

  return (
    <>
      <Header />
      <Content>
        <Navigation />
        <ArticlesList articles={articles} />
        <ShowMoreButton handleShowMoreArticles={showMoreArticles} />
      </Content>
    </>
  );
};

const Content = styled.main`
  max-width: 1024px;
  margin: 0 auto;
`;
