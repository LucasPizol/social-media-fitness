import { AddLikePostModel, LikePostModel } from "@/domain/model/like-post";
import { LikePostRepository } from "@/domain/repository/like-post/like-post-repository";
import { LoadLikeByPostAndUserRepository } from "@/domain/repository/like-post/load-like-by-post-and-user-repository";
import { UnlikePostRepository } from "@/domain/repository/like-post/unlike-post-repository";
import { knexHelper } from "../knex/knex";

export class LikePostInfra
  implements
    LikePostRepository,
    UnlikePostRepository,
    LoadLikeByPostAndUserRepository
{
  async like({ postId, userId }: AddLikePostModel): Promise<LikePostModel> {
    return (
      await knexHelper("like_post").insert({ postId, userId }).returning("*")
    )[0];
  }

  async unlike({ postId, userId }: AddLikePostModel): Promise<void> {
    await knexHelper("like_post").where({ postId, userId }).del();
  }

  async load(postId: string, userId: string): Promise<LikePostModel | null> {
    return await knexHelper("like_post").where({ postId, userId }).first();
  }
}
