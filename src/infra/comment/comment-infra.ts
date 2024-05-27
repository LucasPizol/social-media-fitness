import { AddCommentModel, CommentModel } from "@/domain/model/comment";
import { AddCommentRepository } from "@/domain/repository/comment/add-comment-repository";
import { LoadCommentRepository } from "@/domain/repository/comment/load-comment-repository";
import { prismaHelper } from "../prisma/prisma-helper";

export class CommentInfra
  implements AddCommentRepository, LoadCommentRepository
{
  async add(data: AddCommentModel): Promise<CommentModel> {
    return await prismaHelper.comment.create({ data });
  }

  async load(postId: number): Promise<CommentModel[]> {
    return await prismaHelper.comment.findMany({
      where: { postId },
      include: {
        user: {
          select: {
            avatar: true,
            id: true,
            name: true,
          },
        },
      },
    });
  }
}
