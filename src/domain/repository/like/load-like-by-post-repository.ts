import { LikeModel } from "@/domain/model/like";

export interface LoadLikeByPostRepository {
  loadLikeByPost: (postId: number) => Promise<LikeModel[]>;
}
