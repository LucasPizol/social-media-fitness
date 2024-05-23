import { LoadPostRepository } from "@/domain/repository/post/load-post-repository";
import { LoadPost } from "@/domain/use-case/post/load-post";

export class LoadPostUseCase implements LoadPost {
  private readonly loadPostByUserIdRepository: LoadPostRepository;

  constructor(loadPostByUserIdRepository: LoadPostRepository) {
    this.loadPostByUserIdRepository = loadPostByUserIdRepository;
  }

  async load(userId?: number) {
    return await this.loadPostByUserIdRepository.load(userId);
  }
}
