import { useEffect, useState } from "react";
import { PostModel} from "../../models/postsModel";
import { Page } from "../../models/page";
import { PostCard } from "./post_card";
import { useSearchParams } from "react-router-dom";
import { Pagination } from "../pagination/pagination";
import "./posts_page_styles.css";

export const PostsPage = () => {
  const [postsData, setPostsData] = useState<Page<PostModel>>();
  const [allPosts, setAllPosts] = useState<Array<PostModel> | undefined>();
  const searchParams = useSearchParams();

  useEffect(() => {
    const apiData = async () => {
      const response = await fetch(`http://localhost:3001/posts/?${searchParams}`);
      const data = (await response.json()) as Page<PostModel>;
      setPostsData(data);
      setAllPosts(data.results);
   
    };
    apiData();
  }, [searchParams]);



  if (!allPosts) {
    return <h1>Waiting for data</h1>;
  }

  return (
    <div>
      <h1>Posts</h1>
      <div className="all-posts-container">
        {allPosts.map((post, index) => (
          <PostCard key={index} post={post} />
        ))}
      </div>

      <Pagination {...postsData}/>

    </div>
  );
};
