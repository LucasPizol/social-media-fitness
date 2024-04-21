import { LikePostModel } from "@/domain/model/like-post";

export interface UnlikePostRepository {
  unlike: (like: LikePostModel) => Promise<void>;
}
