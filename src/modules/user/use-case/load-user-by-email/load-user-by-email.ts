import {
  LoadUserByEmail,
  LoadUserByEmailRepository,
  UserModel,
} from "./load-user-by-email-protocols";

export class LoadUserByEmailUseCase implements LoadUserByEmail {
  private readonly loadUserByIdRepository: LoadUserByEmailRepository;
  constructor(loadUserByIdRepository: LoadUserByEmailRepository) {
    this.loadUserByIdRepository = loadUserByIdRepository;
  }

  async loadByEmail(email: string): Promise<UserModel | null> {
    return this.loadUserByIdRepository.loadByEmail(email);
  }
}
