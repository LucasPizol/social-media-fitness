import { PostInfra } from "@/infra/post/post-infra";
import { Controller } from "@/main/protocols/controller";
import { AddPostController } from "@/modules/post/controller/add-post/add-post";
import { AddPostUseCase } from "@/modules/post/use-case/add-post/add-post";

export const addPostFactory = (): Controller => {
  return new AddPostController(new AddPostUseCase(new PostInfra()));
};
