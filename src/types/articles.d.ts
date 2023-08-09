type Article = {
  id: string;
  title: string;
  author: string;
  created_utc: number;
  thumbnail: string;
  name: string;
  permalink: string
}

type ArticlesContext = "hot" | "new" | "rising"

type RedditResponse = {
  data: {
    after: string;
    children: Array<{
      data: Article
    }>
  }
}