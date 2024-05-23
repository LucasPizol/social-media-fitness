import { PostModelWithLikes } from "@/domain/model/post";

export interface LoadPostByUserId {
  loadByUserId(userId: number): Promise<PostModelWithLikes[]>;
}
