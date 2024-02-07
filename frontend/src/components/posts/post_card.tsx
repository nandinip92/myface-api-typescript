import React from "react";
import { PostModel } from "../../models/postsModel";
import { CardContent } from "./card_content";
import { CardButtons } from "./card_buttons";

interface PostCardProps {
  key: number;
  post: PostModel;
}

export const PostCard: React.FC<PostCardProps> = (props) => {
  const post = props.post;
  const imageURL = post.imageUrl;
  const message = post.message;
  const createdAt = post.createdAt;
  const postedBy = post.postedBy.username;
  const likedBy = post.likedBy.map((user) => user.username).join(", ");
  const dislikedBy = post.dislikedBy.map((user) => user.username).join(", ");
  
  return (
    <div className="cards-item">
      <div className="card">
        <img src={imageURL} id="post_image" />
        <CardContent
          message={message}
          createdAt={createdAt}
          postedBy={postedBy}
          likedBy={likedBy}
          dislikedBy={dislikedBy}
        />
        <CardButtons></CardButtons>
      </div>
    </div>
  );
};
