import React from "react";
import { keyframes, styled } from "styled-components";

type Props = {
  size: number;
};

export const ArticlesListSkeleton: React.FC<Props> = ({ size }) => {
  return (
    <List data-cy="skeleton">
      {Array(size)
        .fill("")
        .map((_, index) => {
          return (
            <li key={`${index}-skeleton`}>
              <Card>
                <Thumbnail />
                <Content>
                  <Title />
                  <CreationInfo />
                  <Domain />
                </Content>
              </Card>
            </li>
          );
        })}
    </List>
  );
};

const List = styled.ul`
  list-style: none;
  width: 100%;
`;

const skeletonLoading = keyframes`
  0% {
    background-color: hsl(200, 20%, 80%);
  }
  100% {
    background-color: hsl(200, 20%, 95%);
  }
`;

const Card = styled.article`
  display: grid;
  grid-auto-flow: column;
  grid-column-gap: 1rem;
  grid-template-columns: auto 1fr;
  justify-content: start;
  align-items: center;
  padding: 1rem;
  border-top: 1px solid var(--color-grey);

  @media (min-width: 1024px) {
    align-items: unset;
    padding: 1rem 0;
  }
`;

const Thumbnail = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 8px;
  animation: ${skeletonLoading} 1s linear infinite alternate;

  @media (min-width: 1024px) {
    width: 100px;
    height: 100px;
  }
`;

const Content = styled.div`
  display: grid;
  grid-template-rows: auto auto 1fr;
  grid-gap: 1rem;
`;

const Title = styled.div`
  background-color: var(--color-grey);
  width: 80%;
  max-width: 500px;
  height: 1rem;
  border-radius: 8px;
  animation: ${skeletonLoading} 1s linear infinite alternate;
`;

const CreationInfo = styled.div`
  background-color: var(--color-grey);
  width: 80%;
  max-width: 500px;
  height: 1rem;
  border-radius: 8px;
  animation: ${skeletonLoading} 1s linear infinite alternate;
`;

const Domain = styled.div`
  align-self: end;
  background-color: var(--color-grey);
  width: 100%;
  max-width: 200px;
  height: 1rem;
  border-radius: 8px;
  animation: ${skeletonLoading} 1s linear infinite alternate;
`;
