import { UserModel } from "@/domain/model/user";
import { LoadUserByEmailRepository } from "@/domain/repository/user/load-user-by-email-repository";
import { LoadUserByEmail } from "@/domain/use-case/user/load-user-by-email";

export class LoadUserByEmailUseCase implements LoadUserByEmail {
  private readonly loadUserByIdRepository: LoadUserByEmailRepository;
  constructor(loadUserByIdRepository: LoadUserByEmailRepository) {
    this.loadUserByIdRepository = loadUserByIdRepository;
  }

  async loadByEmail(email: string): Promise<UserModel | null> {
    return this.loadUserByIdRepository.loadByEmail(email);
  }
}
