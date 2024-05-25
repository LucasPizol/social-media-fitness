import { AddPostMediaModel, PostMediaModel } from "@/domain/model/post-media";

export interface AddPostMediaRepository {
  add: (data: AddPostMediaModel[]) => Promise<PostMediaModel[]>;
}
