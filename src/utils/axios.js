import axios from "axios";

const apiURL = axios.create({
  baseURL: "https://alphaa-news-example.herokuapp.com/api",
});

export const getArticles = () => {
  return apiURL.get("/articles").then(({ data }) => {
    return data.articles;
  });
};

export const getTopics = () => {
  return apiURL.get("/topics").then(({ data }) => {
    return data.topics;
  });
};
export const getArticleByTopic = (topic_slug) => {
  return apiURL.get(`/articles?topic=${topic_slug}`).then(({ data }) => {
    return data;
  });
};
