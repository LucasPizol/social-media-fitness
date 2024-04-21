import { AddPostModel, PostModel } from "@/domain/model/post";

export interface AddPost {
  add: (post: AddPostModel) => Promise<PostModel>;
}
