import React from "react";

function ArticleCard({ article }) {
  return (
    <div className="article-card">
      <h3> {article.title}</h3>
      <p>Topic: {article.topic}</p>
      <p>Author: {article.author}</p>
      <p> {article.created_at}</p>
      <p> {article.body}</p>
      <p> Likes: {article.votes}</p>
      <p> Comments: {article.comment_count}</p>
    </div>
  );
}

export default ArticleCard;
