import axios from "axios";

const apiURL = axios.create({
  baseURL: "https://alphaa-news-example.herokuapp.com/api",
});

export const getArticles = (topic) => {
  return apiURL.get("/articles", { params: { topic } }).then(({ data }) => {
    return data.articles;
  });
};

export const getTopics = () => {
  return apiURL.get("/topics").then(({ data }) => {
    return data.topics;
  });
};

export const getArticleById = (article_id) => {
  return apiURL.get(`/articles/${article_id}`).then(({ data }) => {
    return data.article;
  });
};
