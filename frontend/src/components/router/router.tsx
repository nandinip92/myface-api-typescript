import { Route,Routes } from "react-router-dom";
import { PostsPage } from "../posts_page/posts_page";
import { UsersPage } from "../users_page/users_page";
import { UserDetails } from "../user_details/user_details";

export const Router=()=>{
    return(
    <Routes>
        <Route path="/posts" element={<PostsPage/>}/>
        <Route path="/users" element={<UsersPage/>}/>
        <Route path="/users/:id" element={<UserDetails/>}/>
    </Routes>
    );
}