import React from "react";

function ArticleCard({ article }) {
  return (
    <div className="article-card">
      <h3> {article.title}</h3>
      <p>Topic: {article.topic}</p>
      <p>Author: {article.author}</p>
      <p> {article.body}</p>
    </div>
  );
}

export default ArticleCard;
