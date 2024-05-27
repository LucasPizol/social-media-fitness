import { AddCommentModel, CommentModel } from "@/domain/model/comment";

export interface AddComment {
  add: (data: AddCommentModel) => Promise<CommentModel>;
}
