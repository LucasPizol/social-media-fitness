import { LoadPostByUserIdRepository } from "@/domain/repository/post/load-post-by-user-id-repository";
import { LoadPostByUserId } from "@/domain/use-case/post/load-post-by-user-id";
import { PostModelWithLikes } from "../add-post/add-post-protocols";

export class LoadPostByUserIdUseCase implements LoadPostByUserId {
  private readonly loadPostByUserIdRepository: LoadPostByUserIdRepository;

  constructor(loadPostByUserIdRepository: LoadPostByUserIdRepository) {
    this.loadPostByUserIdRepository = loadPostByUserIdRepository;
  }

  async loadByUserId(userId: string): Promise<PostModelWithLikes[] | null> {
    return await this.loadPostByUserIdRepository.loadByUserId(userId);
  }
}
