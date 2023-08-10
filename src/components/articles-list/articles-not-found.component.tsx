import { styled } from "styled-components";

export const ArticlesNotFound = () => {
  return (
    <Content data-cy="missing-articles-message">
      <Title>Ops!</Title>
      <SubTitle>Algo deu errado...</SubTitle>
      <Info>Não foi possível carregar mais artigos =(</Info>
    </Content>
  );
};

const Content = styled.div`
  display: grid;
  justify-items: center;
  grid-gap: 1rem;
  padding: 1rem;
  height: 300px;
  color: var(--text-color);
`;

const Title = styled.h2`
font-size: 4rem;
font-weight: bold;
`;

const SubTitle = styled.h2`
font-size: 3rem;
font-weight: bold;
`;

const Info = styled.p``;
