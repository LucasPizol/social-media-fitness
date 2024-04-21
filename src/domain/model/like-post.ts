export interface LikePostModel {
  id: string;
  postId: string;
  userId: string;
}

export interface AddLikePostModel extends Omit<LikePostModel, "id"> {}
