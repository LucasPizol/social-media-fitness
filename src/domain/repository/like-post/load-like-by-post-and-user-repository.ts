import { LikePostModel } from "@/domain/model/like-post";

export interface LoadLikeByPostAndUserRepository {
  load: (postId: string, userId: string) => Promise<LikePostModel | null>;
}
