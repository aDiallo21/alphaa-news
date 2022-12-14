import { useState, useEffect } from "react";
import { getArticleById, patchArticleVotes } from "../utils/axios";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

export default function SingleArticle() {
  const [article, setArticle] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [votes, setVotes] = useState(0);
  const [hasBeenClicked, setHasBeenClicked] = useState(false);

  const { article_id } = useParams();

  useEffect(() => {
    getArticleById(article_id)
      .then((singleArticle) => {
        setArticle(singleArticle);
        setVotes(singleArticle.votes);
      })
      .catch((err) => {
        console.log(err, "ERROR");
        setError(err);
      });
    setLoading(false);
  }, [article_id]);

  const handleVote = () => {
    setVotes((currentVotes) => currentVotes + 1);
    patchArticleVotes(article_id)
      .then((data) => {
        setHasBeenClicked(true);
        return data;
      })
      .catch((err) => {
        setVotes((currentVotes) => currentVotes - 1);
      });
  };

  if (loading) {
    return <h1>"Loading... please wait"</h1>;
  }

  if (error) {
    return (
      <h1 className="error-404">
        {" "}
        {`Error ${error.response.request.status}: Article ${article_id} not found `}
      </h1>
    );
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
      <div>
        <p> Votes: {votes}</p>
        <button
          onClick={() => {
            handleVote();
          }}
          disabled={hasBeenClicked}
        >
          Vote
        </button>
      </div>
      <p> Number of comments: {article.comment_count}</p>
      <Link className="link" to={`/articles/${article_id}/comments`}>
        <p>Load comments</p>
      </Link>
    </div>
  );
}
