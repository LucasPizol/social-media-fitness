import { PostInfra } from "@/infra/post/post-infra";
import { LoadPostByUserIdController } from "@/modules/post/controller/load-post-by-user-id/load-post-by-user-id";
import { LoadPostByUserIdUseCase } from "@/modules/post/use-case/load-post-by-user-id/load-post-by-user-id";
import { Controller } from "@/protocols/controller";

export const loadPostByUserIdFactory = (): Controller => {
  return new LoadPostByUserIdController(
    new LoadPostByUserIdUseCase(new PostInfra())
  );
};
