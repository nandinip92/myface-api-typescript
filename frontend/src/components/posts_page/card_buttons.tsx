import React from "react";

export const CardButtons = () => {
  return (
    <div className="buttons-container">
      <form method="post" action="/posts/<%=post.id%>/like">
        <button type="submit" className="button" id="like">
          like
        </button>
      </form>
      <form method="post" action="/posts/<%=post.id%>/dislike">
        <button type="submit" className="button" id="dislike">
          dislike
        </button>
      </form>
      <button className="button">
        Change Color
      </button>
    </div>
  );
};
