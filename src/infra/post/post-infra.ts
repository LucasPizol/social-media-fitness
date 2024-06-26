import { AddPostModel } from "@/domain/model/post";
import { AddPostRepository } from "@/domain/repository/post/add-post-repository";
import { DisablePostByIdRepository } from "@/domain/repository/post/disable-post-by-id-repository";
import { LoadPostRepository } from "@/domain/repository/post/load-post-repository";
import { prismaHelper } from "../prisma/prisma-helper";

export class PostInfra
  implements AddPostRepository, DisablePostByIdRepository, LoadPostRepository
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

  async load(postCount: number, userSessionId?: number, userId?: number) {
    return await prismaHelper.post.findMany({
      where: { userId },
      orderBy: { createdAt: "desc" },
      skip: postCount,
      take: postCount + 10,
      include: {
        likes: {
          where: { likedById: userSessionId },
          take: 1,
          select: {
            likedBy: { select: { id: true } },
          },
        },
        _count: {
          select: {
            comments: true,
            likes: true,
          },
        },
        user: {
          select: {
            avatar: true,
            id: true,
            name: true,
          },
        },
        postMedia: {
          select: {
            url: true,
          },
        },
      },
    });
  }
}
