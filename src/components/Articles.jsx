import react from "react";
import React from "react";
import { useState, useEffect } from "react";
import { getArticles } from "../utils/axios";
import ArticleCard from "./ArticleCard";

export default function Articles() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    getArticles().then((articles) => {
      setArticles(articles);
      //   console.log(articles);
      setLoading(false);
    });
  }, []);
  //   console.log(articles[0].title);

  return (
    <main>
      <div className="random-article-container">
        {loading
          ? "Loading... please wait"
          : articles.map((article) => (
              <ArticleCard key={article.article_id} article={article} />
            ))}
      </div>
    </main>
  );
}
