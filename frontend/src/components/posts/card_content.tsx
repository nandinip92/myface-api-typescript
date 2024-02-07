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
        <li><strong>CreatedAt: </strong> {createdAt}</li>
        <li><strong>postedBy: </strong> {postedBy}</li>
        <li><strong>likedBy: </strong>{likedBy}</li>
        <li><strong>dislikedBy: </strong>{dislikedBy}</li>
  </ul>;
};
