export interface PostMediaModel {
  id: number;
  url: string;
  userId: number;
  postId: number;
  createdAt: Date;
  updatedAt: Date;
}

export type AddPostMediaModel = Omit<
  PostMediaModel,
  "id" | "createdAt" | "updatedAt"
>;
