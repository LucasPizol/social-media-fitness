import { LoadPostByUserIdRepository } from "@/domain/repository/post/load-post-by-user-id-repository";
import { LoadPostByUserId } from "@/domain/use-case/post/load-post-by-user-id";

export class LoadPostByUserIdUseCase implements LoadPostByUserId {
  private readonly loadPostByUserIdRepository: LoadPostByUserIdRepository;

  constructor(loadPostByUserIdRepository: LoadPostByUserIdRepository) {
    this.loadPostByUserIdRepository = loadPostByUserIdRepository;
  }

  async loadByUserId(userId: string): Promise<any> {
    return await this.loadPostByUserIdRepository.loadByUserId(userId);
  }
}
