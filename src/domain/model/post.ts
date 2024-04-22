import { UserModel } from "./user";

export interface PostModel {
  id: string;
  content: string;
  userId: string;
  createdAt: Date;
  updatedAt: Date;
  disabledAt: Date | null;
  isActive: boolean;
}

export interface AddPostModel {
  content: string;
  userId: string;
}

export interface PostModelWithLikes extends PostModel {
  likes: Pick<UserModel, "avatar" | "id" | "name">[];
}
