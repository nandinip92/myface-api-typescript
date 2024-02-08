import { useEffect, useState } from "react";
import {UserModel} from "../../models/usersModel";
import { Page } from "../../models/page";
import { Link, useSearchParams } from "react-router-dom";
import { Pagination } from "../pagination/pagination";
import "./users_page_styles.css"

export const UsersPage = () => {
  const [usersPageData,setUsersPageData] =useState<Page<UserModel>>();
  const [allUsers, setAllUsers] = useState<Array<UserModel> | undefined>();
  const searchParams= useSearchParams();

  useEffect(() => {
    const apiData = async () => {
      const response = await fetch(`http://localhost:3001/users/?${searchParams}`);
      const data = await response.json() as Page<UserModel>;
      setUsersPageData(data);
      setAllUsers(data.results);
    };
    console.log("--->", allUsers);
    apiData();
  }, [searchParams]);

  if (!allUsers) {
    return <h1>Waiting for data</h1>;
  }

  return (
    <div className="users-page">
        <h1>Users</h1>
        <ul className="users-container">
            {/* {allUsers.map(user => <p>{user.name}-{user.id}</p>) } */}
            {allUsers.map(user=>(
                <li key={user.id}>
                    <Link to={user.id.toString()}>{user.name}</Link>
                </li>
            ))}
        </ul>
        <Pagination {...usersPageData}/>
    </div>

    
  ) 
};
