import { UserModel } from "./user";

export interface PostModel {
  id: number;
  content: string;
  userId: number;
  createdAt: Date;
  updatedAt: Date;
  disabledAt: Date | null;
  isDisabled: boolean;
}

export interface AddPostModel {
  content: string;
  mediaUrl: string | null;
  userId: number;
}

export interface PostModelWithLikes extends PostModel {
  likes: { likedBy: Pick<UserModel, "avatar" | "id" | "name"> }[];
}
