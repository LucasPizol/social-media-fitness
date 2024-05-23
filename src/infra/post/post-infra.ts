import { AddPostModel } from "@/domain/model/post";
import { AddPostRepository } from "@/domain/repository/post/add-post-repository";
import { DisablePostByIdRepository } from "@/domain/repository/post/disable-post-by-id-repository";
import { LoadPostByUserIdRepository } from "@/domain/repository/post/load-post-by-user-id-repository";
import { prismaHelper } from "../prisma/prisma-helper";

export class PostInfra
  implements
    AddPostRepository,
    LoadPostByUserIdRepository,
    DisablePostByIdRepository
{
  async add(data: AddPostModel) {
    return await prismaHelper.post.create({ data });
  }

  async disableById(id: number, userId: number) {
    await prismaHelper.post.update({
      where: { id, userId },
      data: { isDisabled: true },
    });
  }

  async loadByUserId(userId: number) {
    return await prismaHelper.post.findMany({
      where: { userId },
      include: {
        likes: {
          select: {
            likedBy: {
              select: {
                avatar: true,
                id: true,
                name: true,
              },
            },
          },
        },
      },
    });
  }
}
