import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getArticles } from "../utils/axios";
import ArticleCard from "./ArticleCard";

export default function Articles() {
  const { topic_slug } = useParams();
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    getArticles(topic_slug).then((articles) => {
      setArticles(articles);

      setLoading(false);
    });
  }, [topic_slug]);

  return (
    <div>
      {loading ? (
        <h1 className="loading">Loading... please wait</h1>
      ) : (
        articles.map((article) => (
          <ArticleCard key={article.article_id} article={article} />
        ))
      )}
    </div>
  );
}
