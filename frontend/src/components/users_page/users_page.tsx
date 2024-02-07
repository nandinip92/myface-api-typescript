import { useEffect, useState } from "react";
import {UserModel,ApiUsers} from "../../models/usersModel";
import { Link } from "react-router-dom";

export const UsersPage = () => {
  const [allUsers, setAllUsers] = useState<Array<UserModel> | undefined>();

  useEffect(() => {
    const apiData = async () => {
      const response = await fetch("http://localhost:3001/users/");
      const data = await response.json() as ApiUsers;
      setAllUsers(data.results);
    };
    console.log("--->", allUsers);
    apiData();
  }, []);

  if (!allUsers) {
    return <h1>Waiting for data</h1>;
  }

  return (
    <div>
        <h1>Users</h1>
        <ul className="users-container">
            {/* {allUsers.map(user => <p>{user.name}-{user.id}</p>) } */}
            {allUsers.map(user=>(
                <li key={user.id}>
                    <Link to={user.id.toString()}>{user.name}</Link>
                </li>
            ))}

        </ul>
    </div>

    
  ) 
};
