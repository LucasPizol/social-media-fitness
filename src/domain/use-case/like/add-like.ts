import { AddLikeModel, LikeModel } from "@/domain/model/like";

export interface AddLike {
  like: (like: AddLikeModel) => Promise<LikeModel>;
}
