import { AddUser, AddUserModel, AddUserRepository } from "./add-user-protocols";

export class AddUserUseCase implements AddUser {
  private readonly addUserRepository: AddUserRepository;

  constructor(addUserRepository: AddUserRepository) {
    this.addUserRepository = addUserRepository;
  }

  add(user: AddUserModel) {
    return this.addUserRepository.add(user);
  }
}
