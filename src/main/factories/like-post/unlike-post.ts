import { LikePostInfra } from "@/infra/like-post/like-post-infra";
import { UnlikePostController } from "@/modules/like-post/controller/unlike-post/unlike-post";
import { UnlikePostUseCase } from "@/modules/like-post/use-case/unlike-post/unlike-post";
import { Controller } from "@/protocols/controller";

export const unlikePostFactory = (): Controller => {
  return new UnlikePostController(new UnlikePostUseCase(new LikePostInfra()));
};
