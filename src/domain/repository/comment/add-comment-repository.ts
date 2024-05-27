import { AddCommentModel, CommentModel } from "@/domain/model/comment";

export interface AddCommentRepository {
  add: (data: AddCommentModel) => Promise<CommentModel>;
}
