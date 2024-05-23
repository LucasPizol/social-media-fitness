import { AddLikeModel } from "@/domain/model/like";
import { AddLikeRepository } from "@/domain/repository/like/add-like-repository";
import { DisableLikeRepository } from "@/domain/repository/like/disable-like-repository";
import { LoadLikeByPostRepository } from "@/domain/repository/like/load-like-by-post-repository";
import { prismaHelper } from "../prisma/prisma-helper";

export class LikePostInfra
  implements AddLikeRepository, DisableLikeRepository, LoadLikeByPostRepository
{
  async like(data: AddLikeModel) {
    return await prismaHelper.like.create({ data });
  }

  async unlike(where: AddLikeModel) {
    await prismaHelper.like.deleteMany({ where });
  }

  async loadLikeByPost(postId: number) {
    return await prismaHelper.like.findMany({
      where: { postId },
    });
  }
}
