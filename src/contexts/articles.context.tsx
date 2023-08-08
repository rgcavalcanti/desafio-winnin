import { createContext, useContext } from "react";

type ArticlesContextProps = {
  articles: {
    hot: Article[];
    news: Article[];
    rising: Article[];
  };
};

const ArticlesContext = createContext<ArticlesContextProps>({
  articles: {
    hot: [],
    news: [],
    rising: [],
  },
});

type ArticlesProviderProps = {
  children?: React.ReactNode;
};

export const ArticlesProvider: React.FC<ArticlesProviderProps> = ({
  children,
}) => {
  const articles: ArticlesContextProps["articles"] = {
    hot: [],
    news: [],
    rising: [],
  };

  return (
    <ArticlesContext.Provider value={{ articles }}>
      {children}
    </ArticlesContext.Provider>
  );
};

export const useArticles = (context: "hot" | "news" | "rising") => {
  const { articles } = useContext(ArticlesContext);

  return {
    articles: articles[context],
    showMoreArticles: () => {}
  };
};
