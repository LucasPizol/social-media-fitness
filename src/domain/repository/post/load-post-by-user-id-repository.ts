import { PostModelWithLikes } from "@/domain/model/post";

export interface LoadPostByUserIdRepository {
  loadByUserId(userId: string): Promise<PostModelWithLikes[] | null>;
}
