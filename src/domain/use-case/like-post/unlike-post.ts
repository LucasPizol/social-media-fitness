import { LikePostModel } from "@/domain/model/like-post";

export interface UnlikePost {
  unlike: (like: LikePostModel) => Promise<void>;
}
