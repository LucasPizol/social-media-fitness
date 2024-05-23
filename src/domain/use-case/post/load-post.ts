import { PostModel } from "@/domain/model/post";

export interface LoadPost {
  load: (userId?: number) => Promise<PostModel[]>;
}
