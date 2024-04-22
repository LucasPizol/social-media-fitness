import { PostModelWithLikes } from "./post";

export interface UserModel {
  id: string;
  name: string;
  email: string;
  password: string;
  avatar?: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface AddUserModel {
  name: string;
  email: string;
  password: string;
  avatar?: string;
}

export interface LoginUserModel {
  email: string;
  password: string;
}

export interface UserWithPostsModel extends Omit<UserModel, "password"> {
  posts: PostModelWithLikes[];
}
