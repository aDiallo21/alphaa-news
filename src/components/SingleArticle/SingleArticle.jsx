import { useState, useEffect } from "react";
import { getArticleById } from "../../utils/axios";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

export default function SingleArticle() {
  const [article, setArticle] = useState([]);
  const [loading, setLoading] = useState(true);
  const { article_id } = useParams();

  useEffect(() => {
    getArticleById(article_id).then((singleArticle) => {
      setArticle(singleArticle);
    });
    setLoading(false);
  }, [article_id]);

  if (loading) {
    return <h1>"Loading... please wait"</h1>;
  }

  return (
    <div>
      <h3> {article.title}</h3>
      <p>
        Topic:
        <Link className="link" to={`/articles/topics/${article.topic}`}>
          {article.topic}
        </Link>
      </p>
      <p> Author: {article.author}</p>
      <p> Publish date: {article.created_at}</p>
      <p> Comments: {article.body}</p>
      <p> Votes: {article.votes}</p>
      <p> Comments: {article.comment_count}</p>
    </div>
  );
}
