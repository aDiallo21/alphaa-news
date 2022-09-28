import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getArticleByTopic } from "../../utils/axios";
import ArticleCard from "../ArticleCard/ArticleCard";

export default function ArticlesByTopic() {
  const [topicSearch, setTopicSearch] = useState([]);
  const [loading, setLoading] = useState(true);
  const { topic_slug } = useParams();

  useEffect(() => {
    getArticleByTopic(topic_slug).then((articlesFromApi) => {
      setTopicSearch(articlesFromApi.articles);
      setLoading(false);
    });
  }, [topic_slug]);

  if (loading) {
    return <h1>Loading... please wait</h1>;
  }
  return (
    <div className="articles-by-topic">
      <ul>
        {topicSearch.map((article) => {
          return <ArticleCard key={article.article_id} article={article} />;
        })}
      </ul>
    </div>
  );
}
