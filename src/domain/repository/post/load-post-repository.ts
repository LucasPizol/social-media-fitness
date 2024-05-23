import { PostModel } from "@/domain/model/post";

export interface LoadPostRepository {
  load: (userId?: number) => Promise<PostModel[]>;
}
