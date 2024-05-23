import { AddLikeModel } from "@/domain/model/like";

export interface DisableLike {
  unlike: (like: AddLikeModel) => Promise<void>;
}
