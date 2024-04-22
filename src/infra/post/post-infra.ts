import {
  AddPostModel,
  PostModel,
  PostModelWithLikes,
} from "@/domain/model/post";
import { AddPostRepository } from "@/domain/repository/post/add-post-repository";
import { DisablePostByIdRepository } from "@/domain/repository/post/disable-post-by-id-repository";
import { LoadPostByUserIdRepository } from "@/domain/repository/post/load-post-by-user-id-repository";
import { knexHelper } from "../knex/knex";

export class PostInfra
  implements
    AddPostRepository,
    LoadPostByUserIdRepository,
    DisablePostByIdRepository
{
  async add(post: AddPostModel): Promise<PostModel> {
    return (await knexHelper<PostModel>("post").insert(post).returning("*"))[0];
  }

  async disableById(id: string, userId: string): Promise<void> {
    await knexHelper("post")
      .where({ id, userId })
      .update({ isActive: false, disabledAt: new Date() });
  }

  async loadByUserId(userId: string): Promise<PostModel[] | null> {
    const posts: (PostModel & {
      likedById: string;
      userName: string;
      userAvatar: string;
    })[] = await knexHelper("post")
      .select([
        "post.*",
        "user.name as userName",
        "user.avatar as userAvatar",
        "like_post.userId as likedById",
      ])
      .leftJoin("like_post", "post.id", "like_post.postId")
      .innerJoin("user", "user.id", "like_post.userId")
      .where("post.userId", userId);

    return posts.reduce((accum, post) => {
      const thisPost = {
        ...post,
        userAvatar: undefined,
        userName: undefined,
        likedById: undefined,
      };

      if (!post.likedById) {
        accum.push({
          ...thisPost,
          likes: [],
        });
        return accum;
      }

      const findPost = accum.find((accumPost) => accumPost.id === post.id);

      if (!findPost) {
        accum.push({
          ...thisPost,
          likes: [
            {
              id: post.likedById,
              name: post.userName,
              avatar: post.userAvatar,
            },
          ],
        });
        return accum;
      }

      findPost.likes.push({
        id: post.likedById,
        name: post.userName,
        avatar: post.userAvatar,
      });
      return accum;
    }, [] as PostModelWithLikes[]);
  }
}
