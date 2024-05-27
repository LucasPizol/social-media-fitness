import { PostModel } from "@/domain/model/post";

export interface LoadPost {
  load: (postCount: number, userId?: number) => Promise<PostModel[]>;
}
