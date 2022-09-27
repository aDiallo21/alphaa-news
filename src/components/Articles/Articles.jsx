import React from "react";
import { useState, useEffect } from "react";
import { getArticles } from "../../utils/axios";
import ArticleCard from "../ArticleCard/ArticleCard";

export default function Articles() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    getArticles().then((articles) => {
      setArticles(articles);

      setLoading(false);
    });
  }, []);

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
