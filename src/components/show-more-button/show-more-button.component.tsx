import { styled } from "styled-components";

type Props = {
  handleShowMoreArticles: () => void;
};

export const ShowMoreButton: React.FC<Props> = ({
  handleShowMoreArticles: showMoreArticles,
}) => <Button onClick={showMoreArticles}>+ Ver mais</Button>;

const Button = styled.button`
  background-color: var(--color-purple);
  color: var(--color-white);
  border: none;
  padding: 0.5rem;
  font-size: 1.2rem;
  border-radius: 4px;
  width: 100%;
`;
