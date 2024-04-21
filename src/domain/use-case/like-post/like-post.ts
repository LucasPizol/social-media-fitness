import { AddLikePostModel, LikePostModel } from "@/domain/model/like-post";

export interface LikePost {
  like: (like: AddLikePostModel) => Promise<LikePostModel>;
}
