import moment from "moment";

export interface UserPostModel {
    id: number;
    message: string;
    imageUrl: string;
    createdAt: moment.Moment;
}

export interface UserModel {
    id: number;
    name: string;
    username: string;
    profileImageUrl: string;
    coverImageUrl: string;
    email: string;
    posts: UserPostModel[];
    likes: UserPostModel[];
    dislikes: UserPostModel[];
}

export interface NewUserModel {
    name: string | undefined;
    username: string | undefined;
    email: string | undefined;
    coverImageUrl: string | undefined;
    profileImageUrl: string | undefined;
  }