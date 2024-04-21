import {
  LikePostModel,
  UnlikePost,
  UnlikePostRepository,
} from "./unlike-post-protocols";

export class UnlikePostUseCase implements UnlikePost {
  private readonly unlikePostRepository: UnlikePostRepository;

  constructor(unlikePostRepository: UnlikePostRepository) {
    this.unlikePostRepository = unlikePostRepository;
  }

  async unlike({ id, postId, userId }: LikePostModel) {
    return await this.unlikePostRepository.unlike({ id, postId, userId });
  }
}
