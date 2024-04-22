import { PostInfra } from "@/infra/post/post-infra";
import { Controller } from "@/main/protocols/controller";
import { DisablePostByIdController } from "@/modules/post/controller/disable-post-by-id/disable-post-by-id";
import { DisablePostByIdUseCase } from "@/modules/post/use-case/disable-post-by-id/disable-post-by-id";

export const disablePostByIdFactory = (): Controller => {
  return new DisablePostByIdController(
    new DisablePostByIdUseCase(new PostInfra())
  );
};
