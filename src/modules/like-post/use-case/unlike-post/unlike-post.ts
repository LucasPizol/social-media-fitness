import {
  AddLikeModel,
  DisableLike,
  DisableLikeRepository,
} from "./unlike-post-protocols";

export class UnlikePostUseCase implements DisableLike {
  private readonly unlikePostRepository: DisableLikeRepository;

  constructor(unlikePostRepository: DisableLikeRepository) {
    this.unlikePostRepository = unlikePostRepository;
  }

  async unlike(data: AddLikeModel) {
    return await this.unlikePostRepository.unlike(data);
  }
}
