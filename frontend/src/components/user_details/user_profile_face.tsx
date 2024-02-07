import React from "react";
interface UserProfileProps {
  name: string;
  username: string;
  email: string;
  coverImageUrl: string;
  profileImageUrl: string;
}

export const UserProfileFace: React.FC<UserProfileProps> = ({
  name,
  username,
  email,
  coverImageUrl,
  profileImageUrl,
}) => {
  return (
    <div>
      <img src={coverImageUrl} id="cover-picture" />

      <div className="profile-details">
        <div className="profile">
          <img src={profileImageUrl} id="profile-picture" />
        </div>
        <div className="details">
          <p id="name">{name}</p>
          <p className="sub-title" id="username">
            {username}
          </p>
          <p id="email">{email}</p>
        </div>
      </div>
    </div>
  );
};
