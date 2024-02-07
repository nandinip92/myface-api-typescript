import { UserPostModel } from "../../models/usersModel";
import { Cards } from "./cards";

interface UserProfileBodyProps {
  name: string;
  username:string;
  posts: Array<UserPostModel>;
  likes: Array<UserPostModel>;
  dislikes: Array<UserPostModel>;
}

export const UserProfileBody: React.FC<UserProfileBodyProps> = ({
  name,
  username,
  posts,
  likes,
  dislikes,
}) => {
    const firstName = name.split(" ")[0]
  return (
    <div>
      <div className="posts">
        <h1>{firstName}'s Posts</h1>
        <Cards username={username} postCards={posts} />
      </div>
      <div className="likes">
        <h1>Posts {firstName} liked</h1>
        <Cards username={username} postCards={likes} />
      </div>
      <div className="dislikes">
        <h1>Posts {firstName} disliked</h1>
        <Cards username={username} postCards={dislikes} />
      </div>
    </div>
  );
};
