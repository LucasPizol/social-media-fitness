import { LikePostInfra } from "@/infra/like-post/like-post-infra";
import { Controller } from "@/main/protocols/controller";
import { LikePostController } from "@/modules/like-post/controller/like-post/like-post";
import { LikePostUseCase } from "@/modules/like-post/use-case/like-post/like-post";
import { LoadLikeByPostAndUserUseCase } from "@/modules/like-post/use-case/load-like-by-post-and-user/load-like-by-post-and-user";

export const likePostFactory = (): Controller => {
  const likePostInfra = new LikePostInfra();

  return new LikePostController(
    new LikePostUseCase(
      likePostInfra,
      new LoadLikeByPostAndUserUseCase(likePostInfra)
    )
  );
};
