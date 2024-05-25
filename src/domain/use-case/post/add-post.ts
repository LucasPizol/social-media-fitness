import { AddPostModel, PostModel } from "@/domain/model/post";
import { File } from "@/protocols/http";

export interface AddPost {
  add: (post: AddPostModel, files?: File[]) => Promise<PostModel>;
}
