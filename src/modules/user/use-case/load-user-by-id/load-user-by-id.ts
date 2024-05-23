import { LoadUserByIdRepository } from "@/domain/repository/user/load-user-by-id-repository";
import { LoadUserById } from "@/domain/use-case/user/load-user-by-id";
import { NotFoundError } from "@/protocols/errors/not-found";
import { UserModel } from "../add-user/add-user-protocols";

export class LoadUserByIdUseCase implements LoadUserById {
  private readonly loadUserByIdRepository: LoadUserByIdRepository;

  constructor(loadUserByIdRepository: LoadUserByIdRepository) {
    this.loadUserByIdRepository = loadUserByIdRepository;
  }

  async loadById(
    id: string
  ): Promise<Pick<UserModel, "id" | "name" | "avatar"> | null> {
    const user = await this.loadUserByIdRepository.loadById(id);
    if (!user) throw new NotFoundError("User not found");
    return user;
  }
}
