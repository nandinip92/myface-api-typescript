import { useEffect, useState } from "react";
import { PostModel,ApiPosts } from "../../models/postsModel";
import { PostCard } from "./post_card";

export const Posts=()=>{

    const [allPosts, setAllPosts] = useState<Array<PostModel>|undefined>();

    useEffect(()=>{

        const apiData = async()=>{
            const response = await fetch("http://localhost:3001/posts/");
            const data= await response.json() as ApiPosts ;
            setAllPosts(data.results)
        }
        console.log("--->",allPosts);
        apiData();
    },[]);
    if (!allPosts){
        return <h1>Waiting for data</h1>
    }


    return(<div className="all-posts-container">
        {allPosts.map((post,index)=>
            <PostCard key={index} post={post}/>
            )}
    </div>)
}