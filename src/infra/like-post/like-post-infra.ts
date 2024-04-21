import { AddLikePostModel, LikePostModel } from "@/domain/model/like-post";
import { LikePostRepository } from "@/domain/repository/like-post/like-post-repository";
import { UnlikePostRepository } from "@/domain/repository/like-post/unlike-post-repository";
import { knexHelper } from "../knex/knex";

export class LikePostInfra implements LikePostRepository, UnlikePostRepository {
  async like({ postId, userId }: AddLikePostModel): Promise<LikePostModel> {
    return (
      await knexHelper("like-post").insert({ postId, userId }).returning("*")
    )[0];
  }

  async unlike({ postId, userId }: LikePostModel): Promise<void> {
    await knexHelper("like-post").where({ postId, userId }).del();
  }
}
