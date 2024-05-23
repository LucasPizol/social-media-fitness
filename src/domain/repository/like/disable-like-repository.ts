import { AddLikeModel } from "@/domain/model/like";

export interface DisableLikeRepository {
  unlike: (like: AddLikeModel) => Promise<void>;
}
