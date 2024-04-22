import { PostInfra } from "@/infra/post/post-infra";
import { Controller } from "@/main/protocols/controller";
import { LoadPostByUserIdController } from "@/modules/post/controller/load-post-by-user-id/load-post-by-user-id";
import { LoadPostByUserIdUseCase } from "@/modules/post/use-case/load-post-by-user-id/load-post-by-user-id";

export const loadPostByUserIdFactory = (): Controller => {
  return new LoadPostByUserIdController(
    new LoadPostByUserIdUseCase(new PostInfra())
  );
};
