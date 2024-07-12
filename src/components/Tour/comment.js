import { useState, useEffect } from "react";
import { StarIcon } from "@heroicons/react/20/solid";

const Comment = ({ comments, updateMeanRating }) => {
  const [newComment, setNewComment] = useState("");
  const [authorName, setAuthorName] = useState("");
  const [rating, setRating] = useState(0);
  const [commentList, setCommentList] = useState(comments);

  useEffect(() => {
    const meanRating =
      commentList.reduce((sum, comment) => sum + comment.rating, 0) /
      commentList.length;
    updateMeanRating(meanRating);
  }, [commentList, updateMeanRating]);

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    const newCommentEntry = {
      author: authorName || "Anonymous", // Default to Anonymous if no name is provided
      text: newComment,
      date: new Date().toISOString().split("T")[0],
      rating,
    };
    setCommentList([...commentList, newCommentEntry]);
    setNewComment("");
    setAuthorName("");
    setRating(0);
  };

  return (
    <div className="mt-6">
      <h3 className="text-lg font-medium text-gray-900">Comments</h3>
      <ul className="mt-4 space-y-4">
        {commentList.map((comment, index) => (
          <li key={index} className="border-b border-gray-200 pb-4">
            <p className="text-sm text-gray-600">
              <strong>{comment.author}</strong> on {comment.date} -{" "}
              <span className="flex items-center">
                {[0, 1, 2, 3, 4].map((star) => (
                  <StarIcon
                    key={star}
                    className={
                      comment.rating > star
                        ? "text-gray-900 h-4 w-4 flex-shrink-0"
                        : "text-gray-200 h-4 w-4 flex-shrink-0"
                    }
                    aria-hidden="true"
                  />
                ))}
              </span>
            </p>
            <p className="text-base text-gray-900">{comment.text}</p>
          </li>
        ))}
      </ul>
      <form onSubmit={handleCommentSubmit} className="mt-4">
        <input
          type="text"
          className="w-full rounded-md border border-gray-300 p-2 mb-2"
          value={authorName}
          onChange={(e) => setAuthorName(e.target.value)}
          placeholder="Your name"
        />
        <textarea
          className="w-full rounded-md border border-gray-300 p-2"
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          placeholder="Add a comment"
          required
        ></textarea>
        <div className="mt-2 flex items-center">
          <span className="mr-2">Your rating:</span>
          {[0, 1, 2, 3, 4].map((star) => (
            <StarIcon
              key={star}
              onClick={() => setRating(star + 1)}
              className={
                rating > star
                  ? "text-gray-900 h-6 w-6 flex-shrink-0 cursor-pointer"
                  : "text-gray-200 h-6 w-6 flex-shrink-0 cursor-pointer"
              }
              aria-hidden="true"
            />
          ))}
        </div>
        <button
          type="submit"
          className="mt-2 rounded-md bg-indigo-600 px-4 py-2 text-white"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Comment;
