import React from "react";
import { comments } from "../utils/constants";

const Comment = ({ comment, depthLevel }) => {
  console.log(depthLevel);
  return (
    <>
      {comment.replies ? (
        <>
          <div className={`relative ml-4`}>
            <h1 className="font-semibold">{comment.user}</h1>
            <p className="text-sm font-semibold text-gray-600">{comment.comment}</p>

            {comment.replies.map((item, index) => (
              <Comment comment={item} depthLevel={depthLevel+1} key={index} />
            ))}
          </div>
        </>
      ) : (
        <div className={`relative ml-4`}>
          <h1 className="font-semibold">{comment.user}</h1>
          <p className="text-sm font-semibold text-gray-600">{comment.comment}</p>
        </div>
      )}
    </>
  );
};

const NestedComments = () => {
  return (
    <div>
      {comments.map((item, index) => (
        <Comment comment={item} key={index} depthLevel={0} />
      ))}
    </div>
  );
};

export default NestedComments;
