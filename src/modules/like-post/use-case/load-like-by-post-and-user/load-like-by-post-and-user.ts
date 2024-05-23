import { LoadLikeByPostRepository } from "@/domain/repository/like/load-like-by-post-repository";
import { LoadLikeByPost } from "@/domain/use-case/like/load-like-by-post";

export class LoadLikeByPostAndUserUseCase implements LoadLikeByPost {
  private readonly loadLikeByPostAndUserRepository: LoadLikeByPostRepository;

  constructor(loadLikeByPostAndUserRepository: LoadLikeByPostRepository) {
    this.loadLikeByPostAndUserRepository = loadLikeByPostAndUserRepository;
  }

  async loadLikeByPost(postId: number) {
    return await this.loadLikeByPostAndUserRepository.loadLikeByPost(postId);
  }
}
