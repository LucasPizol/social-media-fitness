import {
  AddUser,
  AddUserModel,
  AddUserRepository,
  UserModel,
} from "./add-user-protocols";

export class AddUserUseCase implements AddUser {
  private readonly addUserRepository: AddUserRepository;

  constructor(addUserRepository: AddUserRepository) {
    this.addUserRepository = addUserRepository;
  }

  add(user: AddUserModel): Promise<UserModel> {
    return this.addUserRepository.add(user);
  }
}
