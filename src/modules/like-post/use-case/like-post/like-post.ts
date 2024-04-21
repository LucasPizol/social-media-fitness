import { LoadLikeByPostAndUser } from "@/domain/use-case/like-post/load-like-by-post-and-user";
import {
  AddLikePostModel,
  LikePost,
  LikePostRepository,
} from "./like-post-protocols";

export class LikePostUseCase implements LikePost {
  private readonly likePostRepository: LikePostRepository;
  private readonly loadLikeByPostAndUser: LoadLikeByPostAndUser;

  constructor(
    likePostRepository: LikePostRepository,
    loadLikeByPostAndUser: LoadLikeByPostAndUser
  ) {
    this.likePostRepository = likePostRepository;
    this.loadLikeByPostAndUser = loadLikeByPostAndUser;
  }

  async like({ postId, userId }: AddLikePostModel) {
    const alreadyExistsLike = await this.loadLikeByPostAndUser.load(
      postId,
      userId
    );

    if (alreadyExistsLike) return alreadyExistsLike;

    return await this.likePostRepository.like({ postId, userId });
  }
}
