import React from "react";
import { keyframes, styled } from "styled-components";

type Props = {
  size: number;
};

export const ArticlesListSkeleton: React.FC<Props> = ({ size }) => {
  return (
    <List>
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
  padding: 1rem 0;
  border-top: 1px solid var(--color-grey);
`;

const Thumbnail = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 8px;
  background-color: var(--color-grey);
  animation: ${skeletonLoading} 1s linear infinite alternate;
`;

const Content = styled.div`
  display: grid;
  grid-template-rows: auto auto 1fr;
  grid-gap: 1rem;
`;

const Title = styled.div`
  background-color: var(--color-grey);
  width: 100%;
  max-width: 500px;
  height: 1rem;
  border-radius: 8px;
  animation: ${skeletonLoading} 1s linear infinite alternate;
`;

const CreationInfo = styled.div`
  background-color: var(--color-grey);
  width: 100%;
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
