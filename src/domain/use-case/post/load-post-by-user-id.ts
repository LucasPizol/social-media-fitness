import { PostModel } from "@/domain/model/post";

export interface LoadPostByUserId {
  loadByUserId(userId: string): Promise<PostModel[] | null>;
}
