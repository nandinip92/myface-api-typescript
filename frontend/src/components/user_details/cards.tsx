import React from "react";
import { UserPostModel } from "../../models/usersModel";

interface CardsProps{
    username:string;
    postCards:Array<UserPostModel>
}
export const Cards: React.FC<CardsProps>=({username,postCards})=>{

return (
    <ul className="cards-container">
        {postCards.map(card=>(
            <li className="cards-item">
                <div className="card">
                    <img src= {card.imageUrl}/>
                    <div className="card-content">
                        {username}
                        {card.createdAt}
                        {card.message}
                    </div>
                </div>
            </li>
        ))}
    </ul>
)
}