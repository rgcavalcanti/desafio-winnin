import { QueryFunction } from "@tanstack/react-query";
import { axiosInstance } from "../config/axios";

export const getNewArticles: QueryFunction<{
  articles: Article[];
  nextPage: string;
}> = async ({ pageParam }) => {
  return axiosInstance
    .get<RedditResponse>(`/new.json`, {params: {
      after: pageParam
    }})
    .then(({ data: res }) => {
      return {
        articles: res.data.children.map((article) => article.data),
        nextPage: res.data.after,
      };
    });
};
