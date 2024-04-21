import { AddLikePostModel } from "@/domain/model/like-post";

export interface UnlikePostRepository {
  unlike: (like: AddLikePostModel) => Promise<void>;
}
