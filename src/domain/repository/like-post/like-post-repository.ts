import { AddLikePostModel, LikePostModel } from "@/domain/model/like-post";

export interface LikePostRepository {
  like: (like: AddLikePostModel) => Promise<LikePostModel>;
}
