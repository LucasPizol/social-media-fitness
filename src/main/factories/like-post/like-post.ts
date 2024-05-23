import { LikePostInfra } from "@/infra/like/like-infra";
import { LikePostController } from "@/modules/like-post/controller/like-post/like-post";
import { LikePostUseCase } from "@/modules/like-post/use-case/like-post/like-post";
import { Controller } from "@/protocols/controller";

export const likePostFactory = (): Controller => {
  const likePostInfra = new LikePostInfra();

  return new LikePostController(new LikePostUseCase(likePostInfra));
};
