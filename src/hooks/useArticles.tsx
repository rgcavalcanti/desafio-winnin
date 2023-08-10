import { useInfiniteQuery } from "@tanstack/react-query";
import { getHotArticles } from "../actions/getHotArticles";
import { getNewArticles } from "../actions/getNewArticles";
import { getRisingArticles } from "../actions/getRisingArticles";

export const useArticles = (context: ArticlesContext) => {
  const { data, fetchNextPage, refetch, isFetching } = useInfiniteQuery({
    queryKey: [context],
    queryFn: (nextPage) => {
      switch (context) {
        case "hot":
          return getHotArticles(nextPage);
        case "new":
          return getNewArticles(nextPage);
        case "rising":
          return getRisingArticles(nextPage);
      }
    },
    getNextPageParam: (lastPage) => lastPage.nextPage,
    retry: 1,
    refetchOnWindowFocus: false,
    refetchInterval: false,
  });

  return {
    articles: data?.pages.map((group) => group.articles).flat() ?? [],
    showMoreArticles: fetchNextPage,
    refetchArticles: refetch,
    isLoading: isFetching,
  };
};
