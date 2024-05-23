export interface LikeModel {
  id: number;
  postId: number;
  likedById: number;
}

export type AddLikeModel = Omit<LikeModel, "id">;
