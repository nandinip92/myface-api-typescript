import React from "react";
import { UserPostModel } from "../../models/usersModel";

interface CardsProps {
  username: string;
  postCards: Array<UserPostModel>;
}
export const Cards: React.FC<CardsProps> = ({ username, postCards }) => {
  return (
    <ul className="cards-container">
      {postCards.map((card) => (
        <li className="cards-item">
          <div className="card">
            <img src={card.imageUrl} />
            <div className="card-content">
              <p className="sub-title">{username}</p>
              <p className="secondary">{card.createdAt}</p>
              <p className="card-message">{card.message}</p>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
};
