import { LikePostModel } from "@/domain/model/like-post";

export interface LoadLikeByPostAndUser {
  load: (postId: string, userId: string) => Promise<LikePostModel | null>;
}
