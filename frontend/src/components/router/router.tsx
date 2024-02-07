import { Route,Routes } from "react-router-dom";
import { PostsPage } from "../posts_page/posts_page";
import { UsersPage } from "../users_page/users_page";

export const Router=()=>{
    return(
    <Routes>
        <Route path="/posts" element={<PostsPage/>}/>
        <Route path="/users" element={<UsersPage/>}/>
    </Routes>
    );
}