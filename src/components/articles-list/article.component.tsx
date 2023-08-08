import { styled } from "styled-components";
import { formatText } from "../../helpers/formatText";

type Props = {
  article: Article;
};

export const Article: React.FC<Props> = ({ article }) => {
  const { title, created_utc, author, thumbnail } = article;

  return (
    <Card>
      <Thumbnail src={thumbnail} />
      <Content>
        <Title>{title}</Title>
        <CreationInfo>
          enviado {formatText.pastTime(created_utc)} por <User>{author}</User>
        </CreationInfo>
        <Domain>dominio.io</Domain>
      </Content>
    </Card>
  );
};
const Card = styled.article`
  display: grid;
  grid-auto-flow: column;
  justify-content: start;
  grid-column-gap: 1rem;
  padding: 1rem 0;
  border-top: 1px solid var(--color-grey);
`;

const Thumbnail = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 8px;
  display: inline-block;
`;

const Content = styled.div`
  display: grid;
  grid-template-rows: auto auto 1fr;
`;

const Title = styled.h2`
  color: var(--color-black);
  margin: 0px;
`;

const CreationInfo = styled.span`
  display: inline-block;
  color: var(--color-grey);
`;

const User = styled.span`
  display: inline-block;
  color: var(--color-purple);
`;

const Domain = styled.a`
  display: block;
  color: var(--color-black);
  align-self: end;
  font-weight: bold;
`;
