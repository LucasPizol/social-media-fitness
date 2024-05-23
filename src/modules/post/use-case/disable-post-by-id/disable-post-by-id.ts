import { DisablePostByIdRepository } from "@/domain/repository/post/disable-post-by-id-repository";
import { DisablePostById } from "@/domain/use-case/post/disable-post-by-id-repository";

export class DisablePostByIdUseCase implements DisablePostById {
  private readonly disablePostByIdRepository: DisablePostByIdRepository;

  constructor(disablePostByIdRepository: DisablePostByIdRepository) {
    this.disablePostByIdRepository = disablePostByIdRepository;
  }

  async disableById(id: number, userId: number): Promise<void> {
    await this.disablePostByIdRepository.disableById(id, userId);
  }
}
