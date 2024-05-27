import { PostModel } from "@/domain/model/post";

export interface LoadPostRepository {
  load: (
    postCount: number,
    userSessionId?: number,
    userId?: number
  ) => Promise<PostModel[]>;
}
