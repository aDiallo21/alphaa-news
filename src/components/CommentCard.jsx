const CommentCard = ({ comment }) => {
  return (
    <div className="comment-card">
      <p className="username">
        {comment.author}: {comment.body}
      </p>
      <p>Comment date: {comment.created_at}</p>
      <p>Votes: {comment.votes}</p>
    </div>
  );
};

export default CommentCard;
