import { Link } from "react-router-dom";
function ArticleCard({ article }) {
  return (
    <div className="article-card">
      <h3> {article.title}</h3>
      <p>
        Topic:
        <Link className="link" to={`/articles/${article.topic}`}>
          {article.topic}
        </Link>
      </p>
      <p>Author: {article.author}</p>
      <p> {article.created_at}</p>
      <p> Likes: {article.votes}</p>
      <p> Comments: {article.comment_count}</p>
    </div>
  );
}

export default ArticleCard;
