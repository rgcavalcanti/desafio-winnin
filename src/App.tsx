import { styled } from "styled-components";
import { ArticlesList } from "./components/articles-list/articles-list.component";
import { Header } from "./components/header/header.component";
import { Navigation } from "./components/navigation/navigation.component";
import { ShowMoreButton } from "./components/show-more-button/show-more-button.component";

export const App = () => {
  return (
    <>
      <Header />
      <Content>
        <Navigation />
        <ArticlesList />
        <ShowMoreButton />
      </Content>
    </>
  );
};

const Content = styled.main `
  max-width: 1024px;
  margin: 0 auto;
`