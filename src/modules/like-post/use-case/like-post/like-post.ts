import {
  AddLike,
  AddLikeModel,
  AddLikeRepository,
} from "./like-post-protocols";

export class LikePostUseCase implements AddLike {
  private readonly likePostRepository: AddLikeRepository;

  constructor(likePostRepository: AddLikeRepository) {
    this.likePostRepository = likePostRepository;
  }

  async like(data: AddLikeModel) {
    return await this.likePostRepository.like(data);
  }
}
