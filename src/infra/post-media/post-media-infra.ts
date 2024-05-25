import { AddPostMediaModel } from "@/domain/model/post-media";
import { AddPostMediaRepository } from "@/domain/repository/post-media/add-post-media-repository";
import { prismaHelper } from "../prisma/prisma-helper";

export class PostMediaInfra implements AddPostMediaRepository {
  async add(data: AddPostMediaModel[]) {
    return await prismaHelper.postMedia.createManyAndReturn({ data });
  }
}
