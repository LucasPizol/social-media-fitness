import { CommentModel } from "@/domain/model/comment";

export interface LoadCommentRepository {
  load: (postId: number) => Promise<CommentModel[]>;
}
