import { LoadUserByIdRepository } from "@/domain/repository/user/load-user-by-id-repository";
import { LoadUserById } from "@/domain/use-case/user/load-user-by-id";
import { NotFoundError } from "@/protocols/errors/not-found";

export class LoadUserByIdUseCase implements LoadUserById {
  private readonly loadUserByIdRepository: LoadUserByIdRepository;

  constructor(loadUserByIdRepository: LoadUserByIdRepository) {
    this.loadUserByIdRepository = loadUserByIdRepository;
  }

  async loadById(id: number) {
    const user = await this.loadUserByIdRepository.loadById(id);
    if (!user) throw new NotFoundError("User not found");
    return user;
  }
}
