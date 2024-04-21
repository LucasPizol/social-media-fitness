import {
  AddLikePostModel,
  LikePost,
  LikePostRepository,
} from "./like-post-protocols";

export class LikePostUseCase implements LikePost {
  private readonly likePostRepository: LikePostRepository;

  constructor(likePostRepository: LikePostRepository) {
    this.likePostRepository = likePostRepository;
  }

  async like({ postId, userId }: AddLikePostModel) {
    return await this.likePostRepository.like({ postId, userId });
  }
}
