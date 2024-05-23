import { AddLikeModel, LikeModel } from "@/domain/model/like";

export interface AddLikeRepository {
  like: (like: AddLikeModel) => Promise<LikeModel>;
}
