import { PostInfra } from "@/infra/post/post-infra";
import { LoadPostController } from "@/modules/post/controller/load-post-by-user-id/load-post-by-user-id";
import { LoadPostUseCase } from "@/modules/post/use-case/load-post-by-user-id/load-post";
import { Controller } from "@/protocols/controller";

export const loadPostFactory = (): Controller => {
  return new LoadPostController(new LoadPostUseCase(new PostInfra()));
};
