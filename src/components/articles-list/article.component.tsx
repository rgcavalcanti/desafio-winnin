import { styled } from "styled-components";
import { formatText } from "../../helpers/formatText";
import { OpenLinkIcon } from "../../icons/open-link.icon";

type Props = {
  article: Article;
};

export const Article: React.FC<Props> = ({ article }) => {
  const { title, created_utc, author, thumbnail, permalink } = article;

  return (
    <Card>
      <Thumbnail
        src={
          ["self", "default"].includes(thumbnail) ? "/reddit.jpg" : thumbnail
        }
      />
      <Content>
        <Title data-cy="title">{title}</Title>
        <CreationInfo data-cy="info">
          enviado {formatText.pastTime(created_utc)} por{" "}
          <User href={`https://www.reddit.com/user/${author}/`} target="_blank">
            u/{author}
          </User>
        </CreationInfo>
        <Domain href={`https://www.reddit.com${permalink}`} target="_blank">
          {permalink}<OpenLinkIcon />
        </Domain>
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

const User = styled.a`
  display: inline-block;
  color: var(--color-purple);
`;

const Domain = styled.a`
  display: grid;
  color: var(--color-blue);
  align-self: end;
  align-items: center;
  justify-content: flex-start;
  grid-auto-flow: column;
  font-weight: bold;
  grid-gap: 0.25rem;
  text-decoration: none;
  fill: var(--color-blue);

  &:hover {
    text-decoration: underline;
  }
`;
