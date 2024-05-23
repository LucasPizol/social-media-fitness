import { PostInfra } from "@/infra/post/post-infra";
import { DisablePostByIdController } from "@/modules/post/controller/disable-post-by-id/disable-post-by-id";
import { DisablePostByIdUseCase } from "@/modules/post/use-case/disable-post-by-id/disable-post-by-id";
import { Controller } from "@/protocols/controller";

export const disablePostByIdFactory = (): Controller => {
  return new DisablePostByIdController(
    new DisablePostByIdUseCase(new PostInfra())
  );
};
