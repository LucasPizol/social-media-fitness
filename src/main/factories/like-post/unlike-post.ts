import { LikePostInfra } from "@/infra/like-post/like-post-infra";
import { Controller } from "@/main/protocols/controller";
import { UnlikePostController } from "@/modules/like-post/controller/unlike-post/unlike-post";
import { UnlikePostUseCase } from "@/modules/like-post/use-case/unlike-post/unlike-post";

export const unlikePostFactory = (): Controller => {
  return new UnlikePostController(new UnlikePostUseCase(new LikePostInfra()));
};
