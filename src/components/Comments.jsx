import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getAllComments } from "../utils/axios";
import CommentCard from "./CommentCard";

export const Comments = () => {
  const { article_id } = useParams();
  const [allComments, setAllComments] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getAllComments(article_id).then((allComments) => {
      setAllComments(allComments);
      setLoading(false);
    });
  }, [article_id]);

  if (loading) {
    return <h1 className="loading">Loading... please wait</h1>;
  }
  return (
    <div>
      {allComments.map((comment) => {
        return <CommentCard key={comment.comment_id} comment={comment} />;
      })}
    </div>
  );
};
