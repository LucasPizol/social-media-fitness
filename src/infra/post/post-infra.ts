import { AddPostModel, PostModel } from "@/domain/model/post";
import { AddPostRepository } from "@/domain/repository/post/add-post-repository";
import { knexHelper } from "../knex/knex";

export class PostInfra implements AddPostRepository {
  async add(post: AddPostModel): Promise<PostModel> {
    return (await knexHelper<PostModel>("post").insert(post).returning("*"))[0];
  }
}
