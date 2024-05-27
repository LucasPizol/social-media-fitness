import { PostModel } from "@/domain/model/post";

export interface LoadPostRepository {
  load: (postCount: number, userId?: number) => Promise<PostModel[]>;
}
