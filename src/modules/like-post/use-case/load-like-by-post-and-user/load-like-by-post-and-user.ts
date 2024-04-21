import { LoadLikeByPostAndUserRepository } from "@/domain/repository/like-post/load-like-by-post-and-user-repository";
import { LoadLikeByPostAndUser } from "@/domain/use-case/like-post/load-like-by-post-and-user";
import { LikePostModel } from "../like-post/like-post-protocols";

export class LoadLikeByPostAndUserUseCase implements LoadLikeByPostAndUser {
  private readonly loadLikeByPostAndUserRepository: LoadLikeByPostAndUserRepository;

  constructor(
    loadLikeByPostAndUserRepository: LoadLikeByPostAndUserRepository
  ) {
    this.loadLikeByPostAndUserRepository = loadLikeByPostAndUserRepository;
  }

  async load(postId: string, userId: string): Promise<LikePostModel | null> {
    return await this.loadLikeByPostAndUserRepository.load(postId, userId);
  }
}
