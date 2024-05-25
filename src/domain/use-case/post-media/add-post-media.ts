import { AddPostMediaModel, PostMediaModel } from "@/domain/model/post-media";
import { File } from "@/protocols/http";

export interface AddPostMedia {
  add: (
    data: Omit<AddPostMediaModel, "url">,
    files: File[]
  ) => Promise<PostMediaModel[]>;
}
