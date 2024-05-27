import { PostModel } from "@/domain/model/post";

export interface LoadPost {
  load: (
    postCount: number,
    userSessionId?: number,
    userId?: number
  ) => Promise<PostModel[]>;
}
