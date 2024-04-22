import { PostModel } from "@/domain/model/post";

export interface LoadPostByUserIdRepository {
  loadByUserId(userId: string): Promise<PostModel[] | null>;
}
