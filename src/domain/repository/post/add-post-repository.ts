import { AddPostModel, PostModel } from "@/domain/model/post";

export interface AddPostRepository {
  add: (post: AddPostModel) => Promise<PostModel>;
}
