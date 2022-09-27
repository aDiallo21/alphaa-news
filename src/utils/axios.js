import axios from "axios";

const apiURL = axios.create({
  baseURL: "https://alphaa-news-example.herokuapp.com/api",
});

export const getArticles = () => {
  return apiURL.get("/articles").then(({ data }) => {
    // console.log(data.articles);
    return data.articles;
  });
};
