import { Route, Routes } from "react-router-dom";
import { MainLayout } from "../layouts/main_layout";
import { PostsPage } from "../posts_page/posts_page";
import { UsersPage } from "../users_page/users_page";
import { UserDetails } from "../user_details/user_details";
import { NewUserForm } from "../forms/new_user_form";
//import { CreateNewUser } from "../forms/create_new_user";

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        {/* <Route index element={<PostsPage />} /> */}
        <Route path="/posts" element={<PostsPage />} />
        <Route path="/users" element={<UsersPage />} />
        <Route path="/users/:id" element={<UserDetails />} />
        <Route path="/users/create" element={<NewUserForm />} />
        {/* <Route path="*" element={<NotFound />} /> */}
      </Route>
    </Routes>
  );
};
