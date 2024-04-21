import {
  AddLikePostModel,
  UnlikePost,
  UnlikePostRepository,
} from "./unlike-post-protocols";

export class UnlikePostUseCase implements UnlikePost {
  private readonly unlikePostRepository: UnlikePostRepository;

  constructor(unlikePostRepository: UnlikePostRepository) {
    this.unlikePostRepository = unlikePostRepository;
  }

  async unlike({ postId, userId }: AddLikePostModel) {
    return await this.unlikePostRepository.unlike({ postId, userId });
  }
}
