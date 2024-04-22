import { PostModelWithLikes } from "@/domain/model/post";

export interface LoadPostByUserId {
  loadByUserId(userId: string): Promise<PostModelWithLikes[] | null>;
}
