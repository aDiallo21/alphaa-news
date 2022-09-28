import { Link } from "react-router-dom";
function ArticleCard({ article }) {
  return (
    <div className="article-card">
      <h3> {article.title}</h3>
      <Link className="link" to={`/articles/${article.topic}`}>
        <p>Topic: {article.topic}</p>
      </Link>
      <p>Author: {article.author}</p>
      <p> {article.created_at}</p>
      <p> {article.body}</p>
      <p> Likes: {article.votes}</p>
      <p> Comments: {article.comment_count}</p>
    </div>
  );
}

export default ArticleCard;
