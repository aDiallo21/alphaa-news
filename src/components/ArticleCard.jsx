import { Link } from "react-router-dom";
function ArticleCard({ article }) {
  return (
    <div className="article-card">
      <Link className="link" to={`/articles/${article.article_id}`}>
        <h3> {article.title}</h3>
      </Link>
      <p>
        Topic:
        <Link className="link" to={`/articles/topics/${article.topic}`}>
          {article.topic}
        </Link>
      </p>
      <p> Author: {article.author}</p>
      <p> Publish date: {article.created_at}</p>
      <p> Votes: {article.votes}</p>
      <p> Number of comments: {article.comment_count}</p>
      <Link className="link" to={`/articles/${article.article_id}/comments`}>
        <p>Load comments</p>
      </Link>
    </div>
  );
}

export default ArticleCard;
