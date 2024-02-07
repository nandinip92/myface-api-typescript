import { Moment } from "moment";

interface CardContentProps {
  message: string;
  createdAt: Moment;
  postedBy: string;
  likedBy: string;
  dislikedBy: string;
}

export const CardContent: React.FC<CardContentProps> = ({
  message,
  createdAt,
  postedBy,
  likedBy,
  dislikedBy,
}) => {
  return <ul className="card-content">
    <li><strong>message: </strong>{message}</li>
        <li> <p className="card-text"><strong>CreatedAt: </strong> {createdAt}</p></li>
        <li> <p className="card-text"><strong>postedBy: </strong> {postedBy}</p></li>
        <li> <p className="card-text"><strong>likedBy: </strong>{likedBy}</p></li>
        <li> <p className="card-text"><strong>dislikedBy: </strong>{dislikedBy}</p></li>
  </ul>;
};
