import { PostMediaInfra } from "@/infra/post-media/post-media-infra";
import { PostInfra } from "@/infra/post/post-infra";
import { AddPostMediaUseCase } from "@/modules/post-media/use-case/add-post-media/add-post-media";
import { AddPostController } from "@/modules/post/controller/add-post/add-post";
import { AddPostUseCase } from "@/modules/post/use-case/add-post/add-post";
import { Controller } from "@/protocols/controller";
import { AWSHelper } from "@/services/implementations/aws/aws-helper";

export const addPostFactory = (): Controller => {
  return new AddPostController(
    new AddPostUseCase(
      new PostInfra(),
      new AddPostMediaUseCase(new PostMediaInfra(), new AWSHelper())
    )
  );
};
