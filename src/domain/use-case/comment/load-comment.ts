import { CommentModel } from "@/domain/model/comment";

export interface LoadComment {
  load: (postId: number) => Promise<CommentModel[]>;
}
