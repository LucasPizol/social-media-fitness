import { AddLikePostModel } from "@/domain/model/like-post";

export interface UnlikePost {
  unlike: (like: AddLikePostModel) => Promise<void>;
}
