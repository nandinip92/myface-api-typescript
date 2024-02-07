import { useEffect,useState } from "react";
import { useParams } from "react-router-dom";
import { UserModel } from "../../models/usersModel";
import { UserProfile } from "./user_profile";
import "./user_details_styles.css"

export const UserDetails = () => {
  const {id}=useParams()
  const [currentUser,setCurrentUser] = useState<UserModel|undefined>();

  useEffect(()=>{
    const apiData=async()=>{
        const response= await fetch(`http://localhost:3001/users/${id}`);
        const data = await response.json();
        setCurrentUser(data);
    }
    apiData();
  },[]);
  
  if (!currentUser) {
    return <h1>Waiting for data</h1>;
  }
    return (

    <div>
        <UserProfile currentUser={currentUser}/>
    </div>
  );
};

    // <div>
    //   <h1>Hey User!--- {id}</h1>
    //   <p>{currentUser.name}</p>
    //   <p>{currentUser.email}</p>
    // </div>