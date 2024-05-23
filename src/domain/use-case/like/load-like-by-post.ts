import { LikeModel } from "@/domain/model/like";

export interface LoadLikeByPost {
  loadLikeByPost: (postId: number) => Promise<LikeModel[]>;
}
