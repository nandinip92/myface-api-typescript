import { useEffect, useState } from "react";
import moment from "moment";

interface PostUserModel {
    id: number;
    name: string;
    username: string;
    email: string;
}

interface PostModel {
    id: number;
    message: string;
    imageUrl: string;
    createdAt: moment.Moment;
    postedBy: PostUserModel;
    likedBy: PostUserModel[];
    dislikedBy: PostUserModel[];
}

interface ApiPosts{
    results:Array<PostModel>
}


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


    return(<div>
        {allPosts.map((post,index)=>
            <div key={index}>
                 <img src={post.imageUrl} id="post_image" />
                <ol>
                    <li>
                    <p className="card-text">{post.message}</p>
                    </li>
                    <li>
                    <p className="card-text">
                        <strong>CreatedAt:</strong> 
                            {post.createdAt}
                    </p>
                    </li>
                    <li>
                    <strong>postedBy:</strong> {post.postedBy.username}
                    </li>
                    <li>
                    <strong>likedBy:</strong>
                        {post.likedBy.map((user)=>user.username).join(", ")}
                    </li>
                    <li>
                    <strong>dislikedBy:</strong>
                    {post.dislikedBy.map((user)=>user.username).join(", ")}
                    </li>
                </ol>
                
            </div>
            
            )}
    </div>)
}

