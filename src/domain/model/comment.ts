export interface CommentModel {
  id: number;
  postId: number;
  userId: number;
  parentCommentId: number | null;
  content: string;
  createdAt: Date;
  updatedAt: Date;
}

export type AddCommentModel = Omit<
  CommentModel,
  "id" | "createdAt" | "updatedAt"
>;
