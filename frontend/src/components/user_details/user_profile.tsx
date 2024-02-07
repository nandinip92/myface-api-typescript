import React from "react";
import { UserModel } from "../../models/usersModel";
import { UserProfileFace } from "./user_profile_face";
import { UserProfileBody } from "./user_profile_body";

interface UserProfileProps {
  currentUser: UserModel;
}

export const UserProfile: React.FC<UserProfileProps> = ({
  currentUser,
}) => {
  const name = currentUser.name;
  const username = currentUser.username;
  const email = currentUser.email;
  const coverImageUrl = currentUser.coverImageUrl;
  const profileImageUrl = currentUser.profileImageUrl;
  const posts=currentUser.posts;
  const likes=currentUser.likes;
  const dislikes = currentUser.dislikes;

  return (
    <div>
      <UserProfileFace
        name={name}
        username={username}
        email={email}
        coverImageUrl={coverImageUrl}
        profileImageUrl={profileImageUrl}
      />
      <UserProfileBody name={name} username={username} posts={posts} likes={likes} dislikes={dislikes}/>
    </div>
  );
};
