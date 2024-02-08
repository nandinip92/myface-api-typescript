import React from "react";
import { UserModel } from "../../models/usersModel"
import { Link } from "react-router-dom";
import { PostModel } from "../../models/postsModel";

interface PaginationProps{
    results?:Array<UserModel>|Array<PostModel>|undefined;
    previous?:string|null;
    next?:string|null;
    total?:number;
}
export const Pagination:React.FC<PaginationProps>=({previous,next})=>{
    return (<>
        {next&& <Link to={next}>Next</Link>}
        {previous && <Link to={previous}>Previous</Link>}
    </>)

}

